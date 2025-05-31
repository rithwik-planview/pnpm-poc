import {
    render as rtlRender,
    type RenderOptions,
    type RenderResult,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import { type ReactElement } from 'react';
import { UnityIntlProvider } from '../providers';
import type { SupportedLocales } from '../providers';

interface IntlRenderOptions extends Omit<RenderOptions, 'wrapper'> {
    locale?: SupportedLocales;
    loadMessages?: (locale: SupportedLocales) => Promise<Record<string, string>>;
}

interface WrapperProps {
    children: React.ReactNode;
}

const mockLoadMessages = async () => ({});

async function renderWithIntl(
    ui: ReactElement,
    { locale = 'en', loadMessages = mockLoadMessages, ...renderOptions }: IntlRenderOptions = {},
): Promise<RenderResult> {
    function Wrapper({ children }: WrapperProps) {
        return (
            <UnityIntlProvider defaultLocale={locale} loadMessages={loadMessages}>
                {children}
            </UnityIntlProvider>
        );
    }

    const utils = rtlRender(ui, { wrapper: Wrapper, ...renderOptions });

    await waitForElementToBeRemoved(() => screen.getByTestId('LoadingContainer'));

    return utils;
}

export { renderWithIntl };
