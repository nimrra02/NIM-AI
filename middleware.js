import { NextResponse } from 'next/server';

// Cookie name must match SESSION_COOKIE in lib/auth-context.js
const ROLE_COOKIE = 'nimai_role';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const role = request.cookies.get(ROLE_COOKIE)?.value;

  // ── Protect /dashboard/** ────────────────────────────────
  if (pathname.startsWith('/dashboard')) {
    if (!role) {
      // Not logged in → redirect to login, remember where they were going
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // ── Redirect logged-in users away from /login ────────────
  if (pathname === '/login' && role) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Run only on relevant paths — skip static assets & Next internals
  matcher: ['/dashboard/:path*', '/login'],
};
