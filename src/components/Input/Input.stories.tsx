import type { Meta, StoryObj } from "@storybook/react";

import type { InputProps } from "./Input";
import { Input } from "./Input";
import { useInput } from "../../hook/useInput";

const meta: Meta<typeof Input> = {
  title: "components/atoms/input",
  component: Input,
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["main", "empty"],
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

const ExInput = ({ onSubmit, variant }: InputProps) => {
  const { value, handleChange } = useInput("");

  return (
    <Input
      value={value}
      placeholder="Input"
      onChange={handleChange}
      onSubmit={onSubmit}
      variant={variant}
    />
  );
};

export const BasicInput: Story = {};

export const SubmitInput: Story = {
  render: () => <ExInput onSubmit={() => alert("제출")} />,
};

export const ShortInput: Story = {
  decorators: [
    (Story) => (
      <div className="w-[200px]">
        <Story />
      </div>
    ),
  ],
};
