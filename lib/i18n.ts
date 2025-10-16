import { translations } from "./translations"

export type Language = "fr" | "en"

export function getTranslations(lang: Language = "fr") {
  return translations[lang]
}
