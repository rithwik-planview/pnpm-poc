import React from 'react';
import { type IntlShape } from 'react-intl';
export type SupportedLocales = 'en' | 'es' | 'fr';
export { defineMessage, defineMessages } from 'react-intl';
export interface MessageLoader {
    (locale: SupportedLocales): Promise<Record<string, string>>;
}
interface UnityIntlContextType {
    locale: SupportedLocales;
    setLocale: (locale: SupportedLocales) => Promise<void>;
    messages: Record<string, string>;
    loading: boolean;
}
export declare const UnityIntlContext: React.Context<UnityIntlContextType>;
interface UnityIntlProviderProps {
    children: React.ReactNode;
    defaultLocale?: SupportedLocales;
    loadMessages: MessageLoader;
}
export type UnityIntlShape = IntlShape & UnityIntlContextType;
export declare const defaultRichTextElements: {
    b: (chunks: React.ReactNode[]) => import('react/jsx-runtime').JSX.Element;
};
export declare const UnityIntlProvider: React.FC<UnityIntlProviderProps>;
export declare const useUnityIntl: () => UnityIntlShape;
//# sourceMappingURL=index.d.ts.map
