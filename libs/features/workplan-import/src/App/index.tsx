import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { forwardRef } from 'react';
import WorkplanImportApp from './components/workplanimport';
import { UnityIntlProvider, type MessageLoader, type SupportedLocales } from '@unity/shared.ui';
import en from '../../translations/en.json';

const queryClient = new QueryClient();

const loadMessages: MessageLoader = async (locale: SupportedLocales) => {
    try {
        const { default: md } = await import(`../../translations/compiled/${locale}.json`);
        return md;
    } catch (e) {
        console.error(`Failed to load messages for locale ${locale}:`, e);
        return en;
    }
};

export const WorkplanImport: typeof WorkplanImportApp = forwardRef(function (props, ref) {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <UnityIntlProvider defaultLocale="en" loadMessages={loadMessages}>
                <WorkplanImportApp {...props} ref={ref} />
            </UnityIntlProvider>
        </QueryClientProvider>
    );
});

export default WorkplanImport;
