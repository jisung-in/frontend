"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("not-found");
  }, [router]);

  return null;
};

export default page;
