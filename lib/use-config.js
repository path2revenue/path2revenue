"use client";

import { useLanguage } from "./i18n";

/**
 * Shortcut hook to get the localized site config.
 * Also re-exports lang and setLang for convenience.
 */
export function useConfig() {
    const { config, lang, setLang, mounted } = useLanguage();
    return { ...config, lang, setLang, mounted };
}
