export const PUBLIC_ROUTES = [
  { path: "/", whenAuthenticated: "next" },
  { path: "/typography", whenAuthenticated: "next" },
  { path: "/sign-in", whenAuthenticated: "redirect" },
];

export const REDIRECT_WHEN_NOT_AUTHENTICADED_ROUTE = "/sign-in";
