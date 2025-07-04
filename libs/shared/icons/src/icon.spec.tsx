import { Copy } from './index';
import { render } from '@testing-library/react';
import 'jest-styled-components';

const snapshot = (str: string, ui: Parameters<typeof render>[0]) => {
    test(`${str}`, () => {
        const { container } = render(ui);
        expect(container.firstChild).toMatchSnapshot();
    });
};

describe('Unity icons', () => {
    snapshot('Icon with default container', <Copy />);
    snapshot('Icon with no container', <Copy size={16} />);
    snapshot('Icon with color', <Copy color="red" />);
});
