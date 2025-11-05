import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { SimpleButton } from '../components';

const meta = {
    title: 'System/SimpleButton',
    component: SimpleButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof SimpleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Button',
    },
};