
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

import {DEFAULT_REDIRECT, PUBLIC_ROUTES, LOGIN, ROOT} from "@/lib/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;

  const isAuthenticated = !!req.auth;

  console.log(isAuthenticated, nextUrl.pathname);

  const isPublicRoute = (PUBLIC_ROUTES.find(route => nextUrl.pathname.startsWith(route))
   || nextUrl.pathname === ROOT);

  console.log({isPublicRoute});

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(LOGIN, nextUrl));

 });

 export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
 };