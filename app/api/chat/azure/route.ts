import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { ChatSettings } from "@/types"
import { OpenAIStream, StreamingTextResponse } from "ai"
import { ServerRuntime } from "next"
import OpenAI from "openai"

export const runtime: ServerRuntime = "edge"

// Model to profile field mapping for Azure deployment IDs
const AZURE_MODEL_DEPLOYMENT_MAP: Record<string, string> = {
  // GPT-5.x Chat Models
  "gpt-5.2-chat": "azure_openai_52_chat_id",
  "gpt-5.2": "azure_openai_52_id",
  "gpt-5.1-chat": "azure_openai_51_chat_id",
  "gpt-5.1": "azure_openai_51_id",
  "gpt-5-chat": "azure_openai_5_chat_id",
  "gpt-5-pro": "azure_openai_5_pro_id",
  "gpt-5": "azure_openai_5_id",
  "gpt-5-mini": "azure_openai_5_mini_id",
  "gpt-5-nano": "azure_openai_5_nano_id",
  // GPT-4.x Models
  "gpt-4.1": "azure_openai_41_id",
  "gpt-4.1-mini": "azure_openai_41_mini_id",
  "gpt-4.1-nano": "azure_openai_41_nano_id",
  "gpt-4.5-preview": "azure_openai_45_preview_id",
  "gpt-4o": "azure_openai_4o_id",
  "gpt-4o-mini": "azure_openai_4o_mini_id",
  "gpt-4": "azure_openai_4_id",
  "gpt-35-turbo-16k": "azure_openai_35_turbo_id",
  // O-Series Models
  o3: "azure_openai_o3_id",
  "o3-mini": "azure_openai_o3_mini_id",
  "o3-pro": "azure_openai_o3_pro_id",
  "o4-mini": "azure_openai_o4_mini_id",
  o1: "azure_openai_o1_id",
  "o1-mini": "azure_openai_o1_mini_id",
  "o1-preview": "azure_openai_o1_preview_id",
  // Codex Models
  "gpt-5.2-codex": "azure_openai_52_codex_id",
  "gpt-5.1-codex-max": "azure_openai_51_codex_max_id",
  "gpt-5.1-codex": "azure_openai_51_codex_id",
  "gpt-5.1-codex-mini": "azure_openai_51_codex_mini_id",
  "gpt-5-codex": "azure_openai_5_codex_id",
  "codex-mini": "azure_openai_codex_mini_id",
  // Legacy Models
  "gpt-3.5-turbo": "azure_openai_35_turbo_id",
  "gpt-4-turbo-preview": "azure_openai_45_turbo_id",
  "gpt-4-vision-preview": "azure_openai_45_vision_id"
}

// Models that don't support temperature parameter
const MODELS_WITHOUT_TEMPERATURE = new Set([
  "o1",
  "o1-mini",
  "o1-preview",
  "o3",
  "o3-mini",
  "o3-pro",
  "o4-mini"
])

// Default max tokens by model category
const DEFAULT_MAX_TOKENS: Record<string, number> = {
  "gpt-5.2-chat": 16384,
  "gpt-5.2": 16384,
  "gpt-5.1-chat": 16384,
  "gpt-5.1": 16384,
  "gpt-5-chat": 8192,
  "gpt-5-pro": 32768,
  "gpt-5": 8192,
  "gpt-5-mini": 4096,
  "gpt-5-nano": 2048,
  "gpt-4.1": 32768,
  "gpt-4.1-mini": 16384,
  "gpt-4.1-nano": 8192,
  "gpt-4.5-preview": 16384,
  "gpt-4o": 16384,
  "gpt-4o-mini": 16384,
  "gpt-4": 8192,
  o3: 100000,
  "o3-mini": 100000,
  "o3-pro": 100000,
  "o4-mini": 100000,
  o1: 100000,
  "o1-mini": 65536,
  "o1-preview": 32768
}

export async function POST(request: Request) {
  const json = await request.json()
  const { chatSettings, messages } = json as {
    chatSettings: ChatSettings
    messages: unknown[]
  }

  try {
    const profile = await getServerProfile()

    checkApiKey(profile.azure_openai_api_key, "Azure OpenAI")

    const ENDPOINT = profile.azure_openai_endpoint
    const KEY = profile.azure_openai_api_key
    const MODEL_ID = chatSettings.model

    // Get deployment ID from mapping
    const deploymentField = AZURE_MODEL_DEPLOYMENT_MAP[MODEL_ID]
    if (!deploymentField) {
      return new Response(
        JSON.stringify({ message: `Model '${MODEL_ID}' not supported` }),
        {
          status: 400
        }
      )
    }

    const profileRecord = profile as Record<string, unknown>
    const DEPLOYMENT_ID = profileRecord[deploymentField] as string | undefined
    if (!DEPLOYMENT_ID) {
      return new Response(
        JSON.stringify({
          message: `Deployment ID not configured for model '${MODEL_ID}'`
        }),
        { status: 400 }
      )
    }

    if (!ENDPOINT || !KEY) {
      return new Response(
        JSON.stringify({ message: "Azure OpenAI resources not found" }),
        { status: 400 }
      )
    }

    const azureOpenai = new OpenAI({
      apiKey: KEY,
      baseURL: `${ENDPOINT}/openai/deployments/${DEPLOYMENT_ID}`,
      defaultQuery: { "api-version": "2024-12-01-preview" },
      defaultHeaders: { "api-key": KEY }
    })

    // Build request parameters
    const maxTokens = DEFAULT_MAX_TOKENS[MODEL_ID] || 4096
    const supportsTemperature = !MODELS_WITHOUT_TEMPERATURE.has(MODEL_ID)

    const response = await azureOpenai.chat.completions.create({
      model: DEPLOYMENT_ID,
      messages: messages as OpenAI.Chat.ChatCompletionMessageParam[],
      temperature: supportsTemperature ? chatSettings.temperature : undefined,
      max_completion_tokens: maxTokens,
      stream: true
    } as OpenAI.Chat.ChatCompletionCreateParamsStreaming)

    // Use type assertion to handle streaming response
    const stream = OpenAIStream(
      response as unknown as AsyncIterable<OpenAI.Chat.ChatCompletionChunk>
    )

    return new StreamingTextResponse(stream)
  } catch (error) {
    const err = error as { message?: string; status?: number }
    let errorMessage = err.message || "An unexpected error occurred"
    const errorCode = err.status || 500

    if (errorMessage.toLowerCase().includes("api key not found")) {
      errorMessage =
        "Azure OpenAI API Key not found. Please set it in your profile settings."
    } else if (errorMessage.toLowerCase().includes("incorrect api key")) {
      errorMessage =
        "Azure OpenAI API Key is incorrect. Please fix it in your profile settings."
    }

    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorCode
    })
  }
}
