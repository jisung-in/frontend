import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Button from "./_component/Button";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div>
      <Button />
    </div>
  );
}
