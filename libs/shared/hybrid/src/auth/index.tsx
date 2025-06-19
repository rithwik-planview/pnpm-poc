import { UnityIntlProvider, type MessageLoader, type SupportedLocales } from '@unity/shared.ui';
import { HybridAppShell as App } from './App';
import en from '../../translations/en.json';

const loadMessages: MessageLoader = async (locale: SupportedLocales) => {
    try {
        const { default: md } = await import(`../../translations/compiled/${locale}.json`);
        return md;
    } catch (e) {
        console.error(`Failed to load messages for locale ${locale}:`, e);
        return en;
    }
};

export const HybridAppShell: typeof App = (props) => {
    return (
        <UnityIntlProvider defaultLocale="en" loadMessages={loadMessages}>
            <App {...props} />
        </UnityIntlProvider>
    );
};

export * from './useAuth';
