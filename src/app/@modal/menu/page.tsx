"use client";

import { useRouter } from "next/navigation";

import { MenuModal } from "@/components";

export default function MenuModalPage() {
  const router = useRouter();

  return <MenuModal onClose={() => router.back()} />;
}
