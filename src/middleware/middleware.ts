import { NextRequest, NextResponse } from "next/server";

const publicPaths = ["/login", "/register", "/forgot-password"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  // Cho phép truy cập các public path mà không cần xác thực
  if (publicPaths.some(path => pathname.startsWith(path))) {
    // Nếu đã đăng nhập và cố truy cập trang login/register, chuyển về trang chủ
    if (token) {
      return NextResponse.redirect(new URL("/cms/hr", request.url));
    }
    return NextResponse.next();
  }

  // Kiểm tra xác thực cho các route khác
  if (!token) {
    const url = new URL("/login", request.url);
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
