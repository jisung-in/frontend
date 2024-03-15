import type { Meta, StoryObj } from "@storybook/react";

import type { TextareaProps } from "./Textarea";
import { Textarea } from "./Textarea";
import { useInput } from "../../../hook/useInput";

const meta: Meta<typeof Textarea> = {
  title: "components/Textarea",
  component: Textarea,
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["main", "white"],
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

type Story = StoryObj<typeof Textarea>;

const ExTextarea = ({ onSubmit, variant }: TextareaProps) => {
  const { value, handleChange } = useInput("");

  return (
    <Textarea
      value={value}
      placeholder="Textarea"
      onChange={handleChange}
      onSubmit={onSubmit}
      variant={variant}
    />
  );
};

export const BasicTextarea: Story = {};

export const SubmitTextarea: Story = {
  render: () => <ExTextarea onSubmit={() => alert("제출")} />,
};

export const ShortTextarea: Story = {
  args: {
    ...BasicTextarea.args,
    maxNum: 40,
  },
  decorators: [
    (Story) => (
      <div className="w-[800px] h-[300px]">
        <Story />
      </div>
    ),
  ],
};
