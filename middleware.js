import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

const routes = ["login", "feed", "perfil"]

export default withAuth(
    function middleware(req) {
        const currentRoute = req.nextUrl.pathname.split('/')[1]
        if (!routes.includes(currentRoute)) return NextResponse.redirect(new URL("/feed", req.url))
    }
)

export const config = {
    // Ignora las rutas default de next
    matcher: ['/feed', '/perfil', '/((?!api|_next/static|_next/image|favicon.ico|assets).*)']
}