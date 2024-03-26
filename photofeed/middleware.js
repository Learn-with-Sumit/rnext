import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let defaultLocale = 'en'
let locales = ['bn', 'en']

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
  const acceptedLanguage = request.headers.get('accept-language') ?? undefined
  let headers = { 'accept-language': acceptedLanguage }
  let languages = new Negotiator({ headers }).languages()

  console.log(languages);

  return match(languages, locales, defaultLocale) // -> 'en-US'
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    '/((?!api|assets|.*\\..*|_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}