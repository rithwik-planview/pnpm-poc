import type { Meta, StoryFn } from '@storybook/react-vite';
import { IconFinder } from './helpers';
import { Copy } from '../src';

export default {
    title: 'Shared-Icons/Collection',
    tags: ['hidden'],
} satisfies Meta;

const icons = [{ name: 'Copy', icon: <Copy />, description: ['page', 'file', 'shading'] }];

export const Icons: StoryFn = () => <IconFinder icons={icons} />;
