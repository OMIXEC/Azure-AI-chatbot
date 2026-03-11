import { LLM } from "@/types"

const GOOGLE_PLATORM_LINK = "https://ai.google.dev/"

// Google Models (UPDATED 12/22/23) -----------------------------

// Gemini 3.1 Flash Lite Preview
const GEMINI_3_1_FLASH_LITE_PREVIEW: LLM = {
  modelId: "gemini-3.1-flash-lite-preview",
  modelName: "Gemini 3.1 Flash Lite Preview",
  provider: "google",
  hostedId: "gemini-3.1-flash-lite-preview",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini Flash 3 Preview
const GEMINI_FLASH_3_PREVIEW: LLM = {
  modelId: "gemini-flash-3-preview",
  modelName: "Gemini Flash 3 Preview",
  provider: "google",
  hostedId: "gemini-flash-3-preview",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 1.5 Flash
const GEMINI_1_5_FLASH: LLM = {
  modelId: "gemini-1.5-flash",
  modelName: "Gemini 1.5 Flash",
  provider: "google",
  hostedId: "gemini-1.5-flash",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 1.5 Pro (UPDATED 05/28/24)
const GEMINI_1_5_PRO: LLM = {
  modelId: "gemini-1.5-pro-latest",
  modelName: "Gemini 1.5 Pro",
  provider: "google",
  hostedId: "gemini-1.5-pro-latest",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini Pro (UPDATED 12/22/23)
const GEMINI_PRO: LLM = {
  modelId: "gemini-pro",
  modelName: "Gemini Pro",
  provider: "google",
  hostedId: "gemini-pro",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: false
}

// Gemini Pro Vision (UPDATED 12/22/23)
const GEMINI_PRO_VISION: LLM = {
  modelId: "gemini-pro-vision",
  modelName: "Gemini Pro Vision",
  provider: "google",
  hostedId: "gemini-pro-vision",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

export const GOOGLE_LLM_LIST: LLM[] = [
  GEMINI_3_1_FLASH_LITE_PREVIEW,
  GEMINI_FLASH_3_PREVIEW,
  GEMINI_PRO,
  GEMINI_PRO_VISION,
  GEMINI_1_5_PRO,
  GEMINI_1_5_FLASH
]
