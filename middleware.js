import { NextResponse } from "next/server";

// Rutas permitidas
const routes = ["/feed", "/perfil", "/login"]

// Funcion que se ejecuta previo a cargar cualquier pagina
export function middleware(req) {

    // Logica de validacion de JWT

    // Ruta a la que se dirige
    let currentRoute = req.nextUrl.pathname
    // Si las rutas permitidas no incluyen la ruta a la que se dirige, redirecciona a /feed
    if (!routes.includes(currentRoute)) return NextResponse.redirect(new URL("/feed", req.url))
    // Si todo es correcto y la ruta es valida, continua 
    return NextResponse.next()
}

// Configuracion
export const config = {
    // El middleware solo se va a ejecutar si las rutas son diferentes que /api, /_next/static, /_next/image y /favicon.ico
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}