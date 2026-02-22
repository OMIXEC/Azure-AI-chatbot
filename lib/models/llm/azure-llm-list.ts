import { LLM } from "@/types"

const AZURE_PLATFORM_LINK =
  "https://learn.microsoft.com/azure/ai-services/openai/"

// ===========================================
// GPT-5.x Chat Models
// ===========================================
const GPT52Chat: LLM = {
  modelId: "gpt-5.2-chat",
  modelName: "GPT-5.2 Chat",
  provider: "openai",
  hostedId: "gpt-5.2-chat",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.75,
    outputCost: 14.0
  }
}

const GPT52: LLM = {
  modelId: "gpt-5.2",
  modelName: "GPT-5.2",
  provider: "openai",
  hostedId: "gpt-5.2",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.0,
    outputCost: 15.0
  }
}

const GPT51Chat: LLM = {
  modelId: "gpt-5.1-chat",
  modelName: "GPT-5.1 Chat",
  provider: "openai",
  hostedId: "gpt-5.1-chat",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.5,
    outputCost: 12.0
  }
}

const GPT51: LLM = {
  modelId: "gpt-5.1",
  modelName: "GPT-5.1",
  provider: "openai",
  hostedId: "gpt-5.1",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.75,
    outputCost: 13.0
  }
}

const GPT5Chat: LLM = {
  modelId: "gpt-5-chat",
  modelName: "GPT-5 Chat",
  provider: "openai",
  hostedId: "gpt-5-chat",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.25,
    outputCost: 10.0
  }
}

const GPT5Pro: LLM = {
  modelId: "gpt-5-pro",
  modelName: "GPT-5 Pro",
  provider: "openai",
  hostedId: "gpt-5-pro",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3.0,
    outputCost: 20.0
  }
}

const GPT5: LLM = {
  modelId: "gpt-5",
  modelName: "GPT-5",
  provider: "openai",
  hostedId: "gpt-5",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.5,
    outputCost: 11.0
  }
}

const GPT5Mini: LLM = {
  modelId: "gpt-5-mini",
  modelName: "GPT-5 Mini",
  provider: "openai",
  hostedId: "gpt-5-mini",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.5,
    outputCost: 4.0
  }
}

const GPT5Nano: LLM = {
  modelId: "gpt-5-nano",
  modelName: "GPT-5 Nano",
  provider: "openai",
  hostedId: "gpt-5-nano",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.25,
    outputCost: 2.0
  }
}

// ===========================================
// GPT-4.x Models
// ===========================================
const GPT41: LLM = {
  modelId: "gpt-4.1",
  modelName: "GPT-4.1",
  provider: "openai",
  hostedId: "gpt-4.1",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.0,
    outputCost: 8.0
  }
}

const GPT41Mini: LLM = {
  modelId: "gpt-4.1-mini",
  modelName: "GPT-4.1 Mini",
  provider: "openai",
  hostedId: "gpt-4.1-mini",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.5,
    outputCost: 2.0
  }
}

const GPT41Nano: LLM = {
  modelId: "gpt-4.1-nano",
  modelName: "GPT-4.1 Nano",
  provider: "openai",
  hostedId: "gpt-4.1-nano",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.25,
    outputCost: 1.0
  }
}

const GPT45Preview: LLM = {
  modelId: "gpt-4.5-preview",
  modelName: "GPT-4.5 Preview",
  provider: "openai",
  hostedId: "gpt-4.5-preview",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 5.0,
    outputCost: 15.0
  }
}

const GPT4o: LLM = {
  modelId: "gpt-4o",
  modelName: "GPT-4o",
  provider: "openai",
  hostedId: "gpt-4o",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.5,
    outputCost: 10.0
  }
}

const GPT4oMini: LLM = {
  modelId: "gpt-4o-mini",
  modelName: "GPT-4o Mini",
  provider: "openai",
  hostedId: "gpt-4o-mini",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.15,
    outputCost: 0.6
  }
}

const GPT4: LLM = {
  modelId: "gpt-4",
  modelName: "GPT-4",
  provider: "openai",
  hostedId: "gpt-4",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 30.0,
    outputCost: 60.0
  }
}

const GPT35Turbo16k: LLM = {
  modelId: "gpt-35-turbo-16k",
  modelName: "GPT-3.5 Turbo 16K",
  provider: "openai",
  hostedId: "gpt-35-turbo-16k",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3.0,
    outputCost: 4.0
  }
}

// ===========================================
// O-Series Reasoning Models
// ===========================================
const O3: LLM = {
  modelId: "o3",
  modelName: "O3",
  provider: "openai",
  hostedId: "o3",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 10.0,
    outputCost: 40.0
  }
}

const O3Mini: LLM = {
  modelId: "o3-mini",
  modelName: "O3 Mini",
  provider: "openai",
  hostedId: "o3-mini",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.1,
    outputCost: 4.4
  }
}

const O3Pro: LLM = {
  modelId: "o3-pro",
  modelName: "O3 Pro",
  provider: "openai",
  hostedId: "o3-pro",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 20.0,
    outputCost: 80.0
  }
}

const O3DeepResearch: LLM = {
  modelId: "o3-deep-research",
  modelName: "O3 Deep Research",
  provider: "openai",
  hostedId: "o3-deep-research",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 15.0,
    outputCost: 60.0
  }
}

const O4Mini: LLM = {
  modelId: "o4-mini",
  modelName: "O4 Mini",
  provider: "openai",
  hostedId: "o4-mini",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.5,
    outputCost: 6.0
  }
}

const O1: LLM = {
  modelId: "o1",
  modelName: "O1",
  provider: "openai",
  hostedId: "o1",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 15.0,
    outputCost: 60.0
  }
}

const O1Mini: LLM = {
  modelId: "o1-mini",
  modelName: "O1 Mini",
  provider: "openai",
  hostedId: "o1-mini",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.1,
    outputCost: 4.4
  }
}

const O1Preview: LLM = {
  modelId: "o1-preview",
  modelName: "O1 Preview",
  provider: "openai",
  hostedId: "o1-preview",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 5.0,
    outputCost: 15.0
  }
}

// ===========================================
// Codex Models
// ===========================================
const GPT52Codex: LLM = {
  modelId: "gpt-5.2-codex",
  modelName: "GPT-5.2 Codex",
  provider: "openai",
  hostedId: "gpt-5.2-codex",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.0,
    outputCost: 12.0
  }
}

const GPT51CodexMax: LLM = {
  modelId: "gpt-5.1-codex-max",
  modelName: "GPT-5.1 Codex Max",
  provider: "openai",
  hostedId: "gpt-5.1-codex-max",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3.0,
    outputCost: 18.0
  }
}

const GPT51Codex: LLM = {
  modelId: "gpt-5.1-codex",
  modelName: "GPT-5.1 Codex",
  provider: "openai",
  hostedId: "gpt-5.1-codex",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.75,
    outputCost: 11.0
  }
}

const GPT51CodexMini: LLM = {
  modelId: "gpt-5.1-codex-mini",
  modelName: "GPT-5.1 Codex Mini",
  provider: "openai",
  hostedId: "gpt-5.1-codex-mini",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.75,
    outputCost: 5.0
  }
}

const GPT5Codex: LLM = {
  modelId: "gpt-5-codex",
  modelName: "GPT-5 Codex",
  provider: "openai",
  hostedId: "gpt-5-codex",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.5,
    outputCost: 10.0
  }
}

const CodexMini: LLM = {
  modelId: "codex-mini",
  modelName: "Codex Mini",
  provider: "openai",
  hostedId: "codex-mini",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.5,
    outputCost: 3.0
  }
}

// ===========================================
// Audio Models
// ===========================================
const GPT4oTranscribe: LLM = {
  modelId: "gpt-4o-transcribe",
  modelName: "GPT-4o Transcribe",
  provider: "openai",
  hostedId: "gpt-4o-transcribe",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.5,
    outputCost: 10.0
  }
}

const GPT4oTranscribeDiarize: LLM = {
  modelId: "gpt-4o-transcribe-diarize",
  modelName: "GPT-4o Transcribe Diarize",
  provider: "openai",
  hostedId: "gpt-4o-transcribe-diarize",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3.0,
    outputCost: 12.0
  }
}

const GPT4oMiniTranscribe: LLM = {
  modelId: "gpt-4o-mini-transcribe",
  modelName: "GPT-4o Mini Transcribe",
  provider: "openai",
  hostedId: "gpt-4o-mini-transcribe",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.3,
    outputCost: 1.2
  }
}

const GPT4oMiniTTS: LLM = {
  modelId: "gpt-4o-mini-tts",
  modelName: "GPT-4o Mini TTS",
  provider: "openai",
  hostedId: "gpt-4o-mini-tts",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.15,
    outputCost: 0.6
  }
}

const GPT4oAudioPreview: LLM = {
  modelId: "gpt-4o-audio-preview",
  modelName: "GPT-4o Audio Preview",
  provider: "openai",
  hostedId: "gpt-4o-audio-preview",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.5,
    outputCost: 10.0
  }
}

const GPT4oRealtimePreview: LLM = {
  modelId: "gpt-4o-realtime-preview",
  modelName: "GPT-4o Realtime Preview",
  provider: "openai",
  hostedId: "gpt-4o-realtime-preview",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 5.0,
    outputCost: 20.0
  }
}

const GPT4oMiniAudioPreview: LLM = {
  modelId: "gpt-4o-mini-audio-preview",
  modelName: "GPT-4o Mini Audio Preview",
  provider: "openai",
  hostedId: "gpt-4o-mini-audio-preview",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.3,
    outputCost: 1.2
  }
}

const GPT4oMiniRealtimePreview: LLM = {
  modelId: "gpt-4o-mini-realtime-preview",
  modelName: "GPT-4o Mini Realtime Preview",
  provider: "openai",
  hostedId: "gpt-4o-mini-realtime-preview",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.6,
    outputCost: 2.4
  }
}

const GPTRealtime: LLM = {
  modelId: "gpt-realtime",
  modelName: "GPT Realtime",
  provider: "openai",
  hostedId: "gpt-realtime",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 5.0,
    outputCost: 20.0
  }
}

const GPTRealtimeMini: LLM = {
  modelId: "gpt-realtime-mini",
  modelName: "GPT Realtime Mini",
  provider: "openai",
  hostedId: "gpt-realtime-mini",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.6,
    outputCost: 2.4
  }
}

const GPTAudio: LLM = {
  modelId: "gpt-audio",
  modelName: "GPT Audio",
  provider: "openai",
  hostedId: "gpt-audio",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.5,
    outputCost: 10.0
  }
}

const GPTAudioMini: LLM = {
  modelId: "gpt-audio-mini",
  modelName: "GPT Audio Mini",
  provider: "openai",
  hostedId: "gpt-audio-mini",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.3,
    outputCost: 1.2
  }
}

// ===========================================
// Image/Video Models
// ===========================================
const GPTImage1: LLM = {
  modelId: "gpt-image-1",
  modelName: "GPT Image 1",
  provider: "openai",
  hostedId: "gpt-image-1",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 5.0,
    outputCost: 20.0
  }
}

const DALLE3: LLM = {
  modelId: "dall-e-3",
  modelName: "DALL-E 3",
  provider: "openai",
  hostedId: "dall-e-3",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 40.0,
    outputCost: 120.0
  }
}

const Sora: LLM = {
  modelId: "sora",
  modelName: "Sora",
  provider: "openai",
  hostedId: "sora",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 20.0,
    outputCost: 80.0
  }
}

const Sora2: LLM = {
  modelId: "sora-2",
  modelName: "Sora 2",
  provider: "openai",
  hostedId: "sora-2",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 30.0,
    outputCost: 120.0
  }
}

// ===========================================
// Special Models
// ===========================================
const ModelRouter: LLM = {
  modelId: "model-router",
  modelName: "Model Router",
  provider: "openai",
  hostedId: "model-router",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.5,
    outputCost: 2.0
  }
}

const ComputerUsePreview: LLM = {
  modelId: "computer-use-preview",
  modelName: "Computer Use Preview",
  provider: "openai",
  hostedId: "computer-use-preview",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 10.0,
    outputCost: 40.0
  }
}

const Davinci002: LLM = {
  modelId: "davinci-002",
  modelName: "Davinci 002",
  provider: "openai",
  hostedId: "davinci-002",
  platformLink: AZURE_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.0,
    outputCost: 2.0
  }
}

// ===========================================
// Export Lists
// ===========================================

// Chat Completion Models (primary use)
export const AZURE_CHAT_MODELS: LLM[] = [
  GPT52Chat,
  GPT52,
  GPT51Chat,
  GPT51,
  GPT5Chat,
  GPT5Pro,
  GPT5,
  GPT5Mini,
  GPT5Nano,
  GPT41,
  GPT41Mini,
  GPT41Nano,
  GPT45Preview,
  GPT4o,
  GPT4oMini,
  GPT4,
  GPT35Turbo16k,
  O3,
  O3Mini,
  O3Pro,
  O4Mini,
  O1,
  O1Mini,
  O1Preview
]

// Codex Models
export const AZURE_CODEX_MODELS: LLM[] = [
  GPT52Codex,
  GPT51CodexMax,
  GPT51Codex,
  GPT51CodexMini,
  GPT5Codex,
  CodexMini
]

// Audio Models
export const AZURE_AUDIO_MODELS: LLM[] = [
  GPT4oTranscribe,
  GPT4oTranscribeDiarize,
  GPT4oMiniTranscribe,
  GPT4oMiniTTS,
  GPT4oAudioPreview,
  GPT4oRealtimePreview,
  GPT4oMiniAudioPreview,
  GPT4oMiniRealtimePreview,
  GPTRealtime,
  GPTRealtimeMini,
  GPTAudio,
  GPTAudioMini
]

// Image/Video Models
export const AZURE_IMAGE_MODELS: LLM[] = [GPTImage1, DALLE3, Sora, Sora2]

// Special Models
export const AZURE_SPECIAL_MODELS: LLM[] = [
  O3DeepResearch,
  ModelRouter,
  ComputerUsePreview,
  Davinci002
]

// All Azure Models
export const AZURE_LLM_LIST: LLM[] = [
  ...AZURE_CHAT_MODELS,
  ...AZURE_CODEX_MODELS,
  ...AZURE_AUDIO_MODELS,
  ...AZURE_IMAGE_MODELS,
  ...AZURE_SPECIAL_MODELS
]
