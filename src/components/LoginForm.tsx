"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/";
  const [password, setPassword] = useState("");
  const [error, setError] = useState(search.get("error") === "1");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({ password, next }),
      });

      if (!response.ok) {
        setError(true);
        return;
      }

      const body = (await response.json()) as { next?: string };
      router.replace(body.next || "/");
      router.refresh();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="login-form" onSubmit={submit}>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        aria-invalid={error}
        aria-describedby={error ? "login-error" : undefined}
        required
        autoFocus
      />
      {error ? (
        <p id="login-error" className="login-error" role="alert">
          Wrong password. Try again.
        </p>
      ) : null}
      <button type="submit" disabled={loading}>
        {loading ? "Checking..." : "Open the site"}
      </button>
    </form>
  );
}
