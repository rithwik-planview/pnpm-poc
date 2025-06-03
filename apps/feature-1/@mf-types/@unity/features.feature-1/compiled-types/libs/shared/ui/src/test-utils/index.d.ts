import { type RenderOptions, type RenderResult } from '@testing-library/react';
import { type ReactElement } from 'react';
import type { SupportedLocales } from '../providers';
interface IntlRenderOptions extends Omit<RenderOptions, 'wrapper'> {
    locale?: SupportedLocales;
    loadMessages?: (locale: SupportedLocales) => Promise<Record<string, string>>;
}
declare function renderWithIntl(
    ui: ReactElement,
    { locale, loadMessages, ...renderOptions }?: IntlRenderOptions,
): Promise<RenderResult>;
export { renderWithIntl };
//# sourceMappingURL=index.d.ts.map
