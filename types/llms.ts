import { ModelProvider } from "."

export type LLMID =
  | AzureLLMID
  | OpenAILLMID
  | GoogleLLMID
  | AnthropicLLMID
  | MistralLLMID
  | GroqLLMID
  | PerplexityLLMID

// Azure OpenAI Models (UPDATED 2/22/26)
export type AzureLLMID =
  // GPT-5.x Chat Models
  | "gpt-5.2-chat"
  | "gpt-5.2"
  | "gpt-5.1-chat"
  | "gpt-5.1"
  | "gpt-5-chat"
  | "gpt-5-pro"
  | "gpt-5"
  | "gpt-5-mini"
  | "gpt-5-nano"
  // GPT-4.x Models
  | "gpt-4.1"
  | "gpt-4.1-mini"
  | "gpt-4.1-nano"
  | "gpt-4.5-preview"
  | "gpt-4o"
  | "gpt-4o-mini"
  | "gpt-4"
  | "gpt-35-turbo-16k"
  // O-Series Reasoning Models
  | "o3"
  | "o3-mini"
  | "o3-pro"
  | "o3-deep-research"
  | "o4-mini"
  | "o1"
  | "o1-mini"
  | "o1-preview"
  // Codex Models
  | "gpt-5.2-codex"
  | "gpt-5.1-codex-max"
  | "gpt-5.1-codex"
  | "gpt-5.1-codex-mini"
  | "gpt-5-codex"
  | "codex-mini"
  // Audio Models
  | "gpt-4o-transcribe"
  | "gpt-4o-transcribe-diarize"
  | "gpt-4o-mini-transcribe"
  | "gpt-4o-mini-tts"
  | "gpt-4o-audio-preview"
  | "gpt-4o-realtime-preview"
  | "gpt-4o-mini-audio-preview"
  | "gpt-4o-mini-realtime-preview"
  | "gpt-realtime"
  | "gpt-realtime-mini"
  | "gpt-audio"
  | "gpt-audio-mini"
  // Image/Video Models
  | "gpt-image-1"
  | "dall-e-3"
  | "sora"
  | "sora-2"
  // Special Models
  | "model-router"
  | "computer-use-preview"
  | "davinci-002"

// OpenAI Models (for OpenAI API)
export type OpenAILLMID =
  | "gpt-4o"
  | "gpt-4o-mini"
  | "gpt-4-turbo-preview"
  | "gpt-4-vision-preview"
  | "gpt-4"
  | "gpt-3.5-turbo"
  | "dall-e-3"

// Google Models
export type GoogleLLMID =
  | "gemini-pro" // Gemini Pro
  | "gemini-pro-vision" // Gemini Pro Vision
  | "gemini-1.5-pro-latest" // Gemini 1.5 Pro
  | "gemini-1.5-flash" // Gemini 1.5 Flash

// Anthropic Models
export type AnthropicLLMID =
  | "claude-2.1" // Claude 2
  | "claude-instant-1.2" // Claude Instant
  | "claude-3-haiku-20240307" // Claude 3 Haiku
  | "claude-3-sonnet-20240229" // Claude 3 Sonnet
  | "claude-3-opus-20240229" // Claude 3 Opus
  | "claude-3-5-sonnet-20240620" // Claude 3.5 Sonnet

// Mistral Models
export type MistralLLMID =
  | "mistral-tiny" // Mistral Tiny
  | "mistral-small-latest" // Mistral Small
  | "mistral-medium-latest" // Mistral Medium
  | "mistral-large-latest" // Mistral Large

export type GroqLLMID =
  | "llama3-8b-8192" // LLaMA3-8b
  | "llama3-70b-8192" // LLaMA3-70b
  | "mixtral-8x7b-32768" // Mixtral-8x7b
  | "gemma-7b-it" // Gemma-7b IT

// Perplexity Models (UPDATED 1/31/24)
export type PerplexityLLMID =
  | "pplx-7b-online" // Perplexity Online 7B
  | "pplx-70b-online" // Perplexity Online 70B
  | "pplx-7b-chat" // Perplexity Chat 7B
  | "pplx-70b-chat" // Perplexity Chat 70B
  | "mixtral-8x7b-instruct" // Mixtral 8x7B Instruct
  | "mistral-7b-instruct" // Mistral 7B Instruct
  | "llama-2-70b-chat" // Llama2 70B Chat
  | "codellama-34b-instruct" // CodeLlama 34B Instruct
  | "codellama-70b-instruct" // CodeLlama 70B Instruct
  | "sonar-small-chat" // Sonar Small Chat
  | "sonar-small-online" // Sonar Small Online
  | "sonar-medium-chat" // Sonar Medium Chat
  | "sonar-medium-online" // Sonar Medium Online

export interface LLM {
  modelId: LLMID
  modelName: string
  provider: ModelProvider
  hostedId: string
  platformLink: string
  imageInput: boolean
  pricing?: {
    currency: string
    unit: string
    inputCost: number
    outputCost?: number
  }
}

export interface OpenRouterLLM extends LLM {
  maxContext: number
}
