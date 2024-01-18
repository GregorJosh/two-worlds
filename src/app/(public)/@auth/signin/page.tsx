"use client";

import { useRouter } from "next/navigation";

import { LoginModal } from "@/components";

export default function SigninPage() {
  const router = useRouter();

  return <LoginModal onClose={() => router.back()} />;
}
