import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let defaultLocale = "en";
let locales = ["en", "bn"];

function getLocale(request) {
    const acceptedLanguage =
        request.headers.get("accept-language") ?? undefined;
    const headers = { "accept-language": acceptedLanguage };
    const languages = new Negotiator({ headers }).languages();

    return match(languages, locales, defaultLocale); // en or bn
}

export function middleware(request) {
    // get the pathname from request url
    const pathname = request.nextUrl.pathname;

    const pathNameIsMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}`) &&
            !pathname.startsWith(`/${locale}/`)
    );

    if (pathNameIsMissingLocale) {
        // detect user's preference & redirect with a locale with a path eg: /en/about
        const locale = getLocale(request);

        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next).*)"],
};
