import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';
import { IntlProvider as ReactIntlProvider, useIntl, type IntlShape } from 'react-intl';

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

export const UnityIntlContext = createContext<UnityIntlContextType>({
    locale: 'en',
    setLocale: async () => {},
    messages: {},
    loading: true,
});

interface UnityIntlProviderProps {
    children: React.ReactNode;
    defaultLocale?: SupportedLocales;
    loadMessages: MessageLoader;
}

export type UnityIntlShape = IntlShape & UnityIntlContextType;

export const UnityIntlProvider: React.FC<UnityIntlProviderProps> = ({
    children,
    defaultLocale = 'en',
    loadMessages,
}) => {
    const [locale, setLocaleState] = useState<SupportedLocales>(defaultLocale);
    const [messages, setMessages] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);

    const setLocale = useCallback(
        async (newLocale: SupportedLocales) => {
            setLoading(true);
            try {
                const newMessages = await loadMessages(newLocale);
                setMessages(newMessages);
                setLocaleState(newLocale);
            } catch (error) {
                console.error('Failed to load messages:', error);
            } finally {
                setLoading(false);
            }
        },
        [loadMessages],
    );

    useEffect(() => {
        setLocale(defaultLocale);
    }, [defaultLocale, setLocale]);

    return (
        <UnityIntlContext.Provider value={{ locale, setLocale, messages, loading }}>
            <ReactIntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale}>
                {loading ? <div>Loading translations...</div> : children}
            </ReactIntlProvider>
        </UnityIntlContext.Provider>
    );
};

export const useUnityIntl = (): UnityIntlShape => {
    const unityIntl = useContext(UnityIntlContext);
    const reactIntl = useIntl();
    return {
        ...reactIntl,
        ...unityIntl,
    };
};
