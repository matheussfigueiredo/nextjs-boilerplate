import {
  PUBLIC_ROUTES,
  REDIRECT_WHEN_NOT_AUTHENTICADED_ROUTE,
} from "@/registry/registry-routes";
import {
  type MiddlewareConfig,
  type NextRequest,
  NextResponse,
} from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const authToken = request.cookies.get("token");
  const publicRoute = PUBLIC_ROUTES.find((route) => route.path === path);

  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICADED_ROUTE;

    return NextResponse.redirect(redirectUrl);
  }

  if (
    authToken &&
    publicRoute &&
    publicRoute.whenAuthenticated === "redirect"
  ) {
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname = "/dashboard";

    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && !publicRoute) {
    /*
     * Check if the JWT is EXPIRED
     * - If yes, remove the cookie and redirect the user to the sign-in screen
     * - Apply a token refresh strategy
     */
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
