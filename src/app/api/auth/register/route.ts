import { NextRequest, NextResponse } from 'next/server'

const users: any[] = [
  { id: '1', name: 'Demo User', email: 'demo@dingai.com', password: 'password123', credits: 100 }
]

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 })
    }

    const existingUser = users.find(u => u.email === email)
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    const user = {
      id: Date.now().toString(),
      name,
      email,
      password,
      credits: 100
    }

    users.push(user)

    return NextResponse.json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email, credits: user.credits }
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
}
