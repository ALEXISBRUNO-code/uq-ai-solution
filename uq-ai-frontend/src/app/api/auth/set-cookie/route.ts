import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { token, rol } = await req.json()
  const res = NextResponse.json({ ok: true })
  // SEGURIDAD: JWT en cookie HttpOnly - JS del navegador NO puede leerla (previene XSS)
  res.cookies.set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 86400,
    path: '/',
  })
  res.cookies.set('user_rol', rol, {
    httpOnly: false,
    sameSite: 'strict',
    maxAge: 86400,
    path: '/',
  })
  return res
}