import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import api from "@/lib/api";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  if (pathname === "/login" || pathname === "/register") {
    if (token) {
      try {
        await api.get("/tasks");
        return NextResponse.redirect(new URL("/hr", request.url));
      } catch (err) {
        return NextResponse.next();
      }
    }
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    await api.get("/tasks");
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/login", "/register", "/hr"],
};
