import { Suspense } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BrandLockup } from "@/components/BrandLockup";
import { LoginForm } from "@/components/LoginForm";
import { hasValidSession, SESSION_COOKIE } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const cookieStore = await cookies();

  if (hasValidSession(cookieStore.get(SESSION_COOKIE)?.value)) {
    redirect("/");
  }

  return (
    <main className="login-shell">
      <section className="login-card" aria-labelledby="login-title">
        <BrandLockup size="md" />
        <p className="eyebrow">Hewlett Packard Enterprise x SpaceXAI</p>
        <h1 id="login-title">Enter the site password</h1>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </section>
    </main>
  );
}
