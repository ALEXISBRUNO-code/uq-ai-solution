import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const res = NextResponse.redirect(new URL('/login', req.url))
  // SEGURIDAD: eliminar cookie en el servidor con Max-Age=0
  res.cookies.set('auth_token', '', { maxAge: 0, path: '/' })
  res.cookies.set('user_rol', '', { maxAge: 0, path: '/' })
  return res
}