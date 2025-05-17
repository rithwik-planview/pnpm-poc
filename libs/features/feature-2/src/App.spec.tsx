import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
    it('should render the App component', () => {
        const { getByText } = render(<App />);
        expect(getByText(/Feature 2/)).toBeInTheDocument();
    });

    it('should render the shared counter component', () => {
        const { getByText } = render(<App />);
        expect(getByText(/Shared Counter: 0/)).toBeInTheDocument();
    });
});
