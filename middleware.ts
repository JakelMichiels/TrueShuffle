import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  // Allow access to the main URL page
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next()
  }

  // Redirect unauthenticated users to the main URL for all other routes
  if (!token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Allow authenticated users to access other routes
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}