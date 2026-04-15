"use client";

import { LanguageProvider } from "@/lib/i18n";

export function Providers({ children }) {
    return <LanguageProvider>{children}</LanguageProvider>;
}
