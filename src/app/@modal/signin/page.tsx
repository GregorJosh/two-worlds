"use client";

import { useRouter } from "next/navigation";

import { LoginModal } from "@/components";

export default function SigninModalPage() {
  const router = useRouter();

  return <LoginModal onClose={() => router.back()} />;
}
