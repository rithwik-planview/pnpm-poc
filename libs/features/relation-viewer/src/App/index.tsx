import styled from 'styled-components';
import { align, spacing } from '@planview/pv-utilities';
import RelationViewerApp from './components/relation-viewer/relation-viewer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { forwardRef } from 'react';
import { IntlProvider } from 'react-intl';
import en from '@planview/pv-grid/lang/en.json';

const StyledApp = styled.div`
    ${align.centerV};
    flex-direction: column;
    gap: ${spacing.medium}px;
    padding: ${spacing.medium}px;
`;

const queryClient = new QueryClient();

export const RelationViewer: typeof RelationViewerApp = forwardRef(function (props, ref) {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <StyledApp>
                <IntlProvider locale="en" messages={en}>
                    <RelationViewerApp {...props} ref={ref} />
                </IntlProvider>
            </StyledApp>
        </QueryClientProvider>
    );
});

export default RelationViewer;
