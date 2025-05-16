import { cleanup, render } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Button', () => {
    test('should render with correct label', () => {
        const { getByText } = render(<Button label="Click Me" />);
        const buttonElement = getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
    });
});
