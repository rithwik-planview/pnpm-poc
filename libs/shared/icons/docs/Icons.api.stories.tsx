import type { Meta, StoryObj } from '@storybook/react-vite';
import Copy from '../src/Copy';
import { theme, iconSizes } from '@planview/pv-utilities';

const meta: Meta<typeof Copy> = {
    title: 'Shared-Icons/API',
    tags: ['hidden'],
    component: Copy,
} satisfies Meta<typeof Copy>;

export default meta;

export const Color: StoryObj<typeof Copy> = {
    render: () => (
        <div style={{ display: 'flex' }}>
            <Copy color={theme.iconNormal} />
            <Copy color={theme.iconWarning} />
            <Copy color={theme.iconSuccess} />
        </div>
    ),
    parameters: {
        docs: {
            source: {
                code: `
<Copy color={theme.iconNormal} />
<Copy color={theme.iconWarning}/>
<Copy color={theme.iconSuccess} />
            `,
            },
        },
    },
};

export const SizesWithContainers: StoryObj<typeof Copy> = {
    render: () => (
        <div style={{ display: 'flex' }}>
            <Copy size={iconSizes.SIZE_XSMALL} />
            <Copy size={iconSizes.SIZE_SMALL} />
            <Copy size={iconSizes.SIZE_MEDIUM} />
            <Copy size={iconSizes.SIZE_LARGE} />
        </div>
    ),
    parameters: {
        docs: {
            source: {
                code: `
<Copy size={iconSizes.SIZE_XSMALL} />
<Copy size={iconSizes.SIZE_SMALL} />
<Copy size={iconSizes.SIZE_MEDIUM} />
<Copy size={iconSizes.SIZE_LARGE} />
            `,
            },
        },
    },
};

export const SizesWithoutContainers: StoryObj<typeof Copy> = {
    render: () => (
        <div style={{ display: 'flex' }}>
            <Copy size={iconSizes.small} />
            <Copy size={iconSizes.medium} />
            <Copy size={iconSizes.large} />
        </div>
    ),
    parameters: {
        docs: {
            source: {
                code: `
<Copy size={iconSizes.small} />
<Copy size={iconSizes.medium} />
<Copy size={iconSizes.large} />
            `,
            },
        },
    },
};
