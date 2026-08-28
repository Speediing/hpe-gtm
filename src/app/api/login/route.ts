import { NextResponse } from "next/server";
import {
  createSessionToken,
  isPasswordValid,
  safeRedirect,
  SESSION_COOKIE,
  SESSION_MAX_AGE,
} from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LoginBody = {
  password?: unknown;
  next?: unknown;
};

export async function POST(request: Request) {
  let body: LoginBody;

  try {
    body = (await request.json()) as LoginBody;
  } catch {
    return NextResponse.json(
      { ok: false },
      { status: 400, headers: { "cache-control": "no-store" } },
    );
  }

  if (typeof body.password !== "string" || !isPasswordValid(body.password)) {
    return NextResponse.json(
      { ok: false },
      { status: 401, headers: { "cache-control": "no-store" } },
    );
  }

  const next = safeRedirect(body.next);
  const response = NextResponse.json(
    { ok: true, next },
    { headers: { "cache-control": "no-store" } },
  );

  response.cookies.set({
    name: SESSION_COOKIE,
    value: createSessionToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
    priority: "high",
  });

  return response;
}
