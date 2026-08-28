import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { hasValidSession, SESSION_COOKIE } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();

  if (!hasValidSession(cookieStore.get(SESSION_COOKIE)?.value)) {
    redirect("/login?next=%2F");
  }

  return children;
}
