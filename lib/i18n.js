"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/site.config";

const STORAGE_KEY = "p2r_lang";
const SUPPORTED_LANGS = ["fr", "en"];
const DEFAULT_LANG = "fr";

const LanguageContext = createContext(null);

/**
 * Detect browser language, check localStorage first.
 * Returns "fr" or "en".
 */
function detectLanguage() {
    // 1. localStorage (user choice persisted)
    if (typeof window !== "undefined") {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

        // 2. Browser language
        const browserLang = navigator.language?.split("-")[0];
        if (browserLang && SUPPORTED_LANGS.includes(browserLang)) return browserLang;
    }
    // 3. Fallback
    return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(DEFAULT_LANG);
    const [mounted, setMounted] = useState(false);

    // Detect language on mount (client-side only)
    useEffect(() => {
        setLangState(detectLanguage());
        setMounted(true);
    }, []);

    const setLang = useCallback((newLang) => {
        if (!SUPPORTED_LANGS.includes(newLang)) return;
        setLangState(newLang);
        localStorage.setItem(STORAGE_KEY, newLang);
        // Update <html lang> attribute
        document.documentElement.lang = newLang;
    }, []);

    // Update <html lang> on mount
    useEffect(() => {
        if (mounted) {
            document.documentElement.lang = lang;
        }
    }, [lang, mounted]);

    // Get the config for the current language
    const config = siteConfig[lang] || siteConfig[DEFAULT_LANG];

    return (
        <LanguageContext.Provider value={{ lang, setLang, config, mounted }}>
            {children}
        </LanguageContext.Provider>
    );
}

/**
 * Hook to access language state and localized config.
 * @returns {{ lang: string, setLang: (lang: string) => void, config: object, mounted: boolean }}
 */
export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
    return ctx;
}
