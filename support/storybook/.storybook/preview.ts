import './font.css';
import './global.css';
import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                order: [
                    'Overview',
                    ['Introduction', 'Project Structure', 'Getting Started'],
                    'Core',
                    ['Shell Introduction', 'Shell Usage'],
                ],
            },
        },
    },
};

export default preview;
