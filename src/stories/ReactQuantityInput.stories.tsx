import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ReactQuantityInput } from '..';

const meta = {
  title: 'Example/ReactQuantityInput',
  component: ReactQuantityInput,
  parameters: {
    layout: 'centered'
  },
  args: {
    value: '',
    min: 0,
    max: 100,
    step: 1,
    placeholder: '',
    maxLength: 4,
    disabled: false,
    isInvalid: false,
    onState: fn()
  }
} satisfies Meta<typeof ReactQuantityInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
