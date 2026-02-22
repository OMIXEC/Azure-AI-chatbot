import { Database, Tables } from "@/supabase/types"
import { VALID_ENV_KEYS } from "@/types/valid-keys"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function getServerProfile() {
  const cookieStore = cookies()
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        }
      }
    }
  )

  const user = (await supabase.auth.getUser()).data.user
  if (!user) {
    throw new Error("User not found")
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user.id)
    .single()

  if (!profile) {
    throw new Error("Profile not found")
  }

  const profileWithKeys = addApiKeysToProfile(profile)

  return profileWithKeys
}

function addApiKeysToProfile(profile: Tables<"profiles">) {
  const apiKeys = {
    [VALID_ENV_KEYS.OPENAI_API_KEY]: "openai_api_key",
    [VALID_ENV_KEYS.ANTHROPIC_API_KEY]: "anthropic_api_key",
    [VALID_ENV_KEYS.GOOGLE_GEMINI_API_KEY]: "google_gemini_api_key",
    [VALID_ENV_KEYS.MISTRAL_API_KEY]: "mistral_api_key",
    [VALID_ENV_KEYS.GROQ_API_KEY]: "groq_api_key",
    [VALID_ENV_KEYS.PERPLEXITY_API_KEY]: "perplexity_api_key",
    [VALID_ENV_KEYS.AZURE_OPENAI_API_KEY]: "azure_openai_api_key",
    [VALID_ENV_KEYS.OPENROUTER_API_KEY]: "openrouter_api_key",

    [VALID_ENV_KEYS.OPENAI_ORGANIZATION_ID]: "openai_organization_id",

    [VALID_ENV_KEYS.AZURE_OPENAI_ENDPOINT]: "azure_openai_endpoint",

    // GPT-5.x Chat Models
    [VALID_ENV_KEYS.AZURE_GPT_52_CHAT_NAME]: "azure_openai_52_chat_id",
    [VALID_ENV_KEYS.AZURE_GPT_52_NAME]: "azure_openai_52_id",
    [VALID_ENV_KEYS.AZURE_GPT_51_CHAT_NAME]: "azure_openai_51_chat_id",
    [VALID_ENV_KEYS.AZURE_GPT_51_NAME]: "azure_openai_51_id",
    [VALID_ENV_KEYS.AZURE_GPT_5_CHAT_NAME]: "azure_openai_5_chat_id",
    [VALID_ENV_KEYS.AZURE_GPT_5_PRO_NAME]: "azure_openai_5_pro_id",
    [VALID_ENV_KEYS.AZURE_GPT_5_NAME]: "azure_openai_5_id",
    [VALID_ENV_KEYS.AZURE_GPT_5_MINI_NAME]: "azure_openai_5_mini_id",
    [VALID_ENV_KEYS.AZURE_GPT_5_NANO_NAME]: "azure_openai_5_nano_id",

    // GPT-4.x Models
    [VALID_ENV_KEYS.AZURE_GPT_41_NAME]: "azure_openai_41_id",
    [VALID_ENV_KEYS.AZURE_GPT_41_MINI_NAME]: "azure_openai_41_mini_id",
    [VALID_ENV_KEYS.AZURE_GPT_41_NANO_NAME]: "azure_openai_41_nano_id",
    [VALID_ENV_KEYS.AZURE_GPT_45_PREVIEW_NAME]: "azure_openai_45_preview_id",
    [VALID_ENV_KEYS.AZURE_GPT_4O_NAME]: "azure_openai_4o_id",
    [VALID_ENV_KEYS.AZURE_GPT_4O_MINI_NAME]: "azure_openai_4o_mini_id",
    [VALID_ENV_KEYS.AZURE_GPT_4_NAME]: "azure_openai_4_id",

    // O-Series Models
    [VALID_ENV_KEYS.AZURE_O3_NAME]: "azure_openai_o3_id",
    [VALID_ENV_KEYS.AZURE_O3_MINI_NAME]: "azure_openai_o3_mini_id",
    [VALID_ENV_KEYS.AZURE_O3_PRO_NAME]: "azure_openai_o3_pro_id",
    [VALID_ENV_KEYS.AZURE_O4_MINI_NAME]: "azure_openai_o4_mini_id",
    [VALID_ENV_KEYS.AZURE_O1_NAME]: "azure_openai_o1_id",
    [VALID_ENV_KEYS.AZURE_O1_MINI_NAME]: "azure_openai_o1_mini_id",
    [VALID_ENV_KEYS.AZURE_O1_PREVIEW_NAME]: "azure_openai_o1_preview_id",

    // Codex Models
    [VALID_ENV_KEYS.AZURE_GPT_52_CODEX_NAME]: "azure_openai_52_codex_id",
    [VALID_ENV_KEYS.AZURE_GPT_51_CODEX_MAX_NAME]:
      "azure_openai_51_codex_max_id",
    [VALID_ENV_KEYS.AZURE_GPT_51_CODEX_NAME]: "azure_openai_51_codex_id",
    [VALID_ENV_KEYS.AZURE_GPT_51_CODEX_MINI_NAME]:
      "azure_openai_51_codex_mini_id",
    [VALID_ENV_KEYS.AZURE_GPT_5_CODEX_NAME]: "azure_openai_5_codex_id",
    [VALID_ENV_KEYS.AZURE_CODEX_MINI_NAME]: "azure_openai_codex_mini_id",

    // Legacy
    [VALID_ENV_KEYS.AZURE_GPT_35_TURBO_NAME]: "azure_openai_35_turbo_id",
    [VALID_ENV_KEYS.AZURE_GPT_45_VISION_NAME]: "azure_openai_45_vision_id",
    [VALID_ENV_KEYS.AZURE_GPT_45_TURBO_NAME]: "azure_openai_45_turbo_id",

    // Embeddings
    [VALID_ENV_KEYS.AZURE_EMBEDDINGS_NAME]: "azure_openai_embeddings_id"
  }

  for (const [envKey, profileKey] of Object.entries(apiKeys)) {
    if (process.env[envKey]) {
      ;(profile as any)[profileKey] = process.env[envKey]
    }
  }

  return profile
}

export function checkApiKey(apiKey: string | null, keyName: string) {
  if (apiKey === null || apiKey === "") {
    throw new Error(`${keyName} API Key not found`)
  }
}
