import styled from 'styled-components';
import { align, spacing } from '@planview/pv-utilities';
import RelationViewerApp from './components/relation-viewer/relation-viewer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { forwardRef } from 'react';
import { UnityIntlProvider, type MessageLoader, type SupportedLocales } from '@unity/shared.ui';
import en from '../../translations/en.json';

const StyledApp = styled.div`
    ${align.centerV};
    flex-direction: column;
    gap: ${spacing.medium}px;
    padding: ${spacing.medium}px;
`;

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

export const RelationViewer: typeof RelationViewerApp = forwardRef(function (props, ref) {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <StyledApp>
                <UnityIntlProvider defaultLocale="en" loadMessages={loadMessages}>
                    <RelationViewerApp {...props} ref={ref} />
                </UnityIntlProvider>
            </StyledApp>
        </QueryClientProvider>
    );
});

export default RelationViewer;
