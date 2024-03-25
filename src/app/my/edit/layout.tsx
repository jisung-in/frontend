import { ReactNode } from "react";

type Props = { children: ReactNode };
export default function EditLayout({ children }: Props) {
  return <div>{children}</div>;
}
