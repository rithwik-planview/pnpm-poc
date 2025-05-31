import { renderWithIntl } from '@unity/shared.ui';
import { HEADER_MORE_MENU_ITEMS as HeaderItems } from './index';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('HeaderItems', () => {
    test('should render with correct options', async () => {
        const { getByText } = await renderWithIntl(<HeaderItems />);
        const buttonElement = getByText(/minimize/i);
        expect(buttonElement).toBeInTheDocument();
    });
});
