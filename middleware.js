import { NextResponse } from "next/server";

const routes = ["/feed", "/perfil", "/login"]

export function middleware(req) {
    // Logica de validacion de JWT

    let currentRoute = req.nextUrl.pathname
    if (!routes.includes(currentRoute)) return NextResponse.redirect(new URL("/feed", req.url))
    return NextResponse.next()
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}