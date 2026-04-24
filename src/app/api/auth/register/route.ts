import { NextRequest, NextResponse } from 'next/server'

// 简单的内存存储（测试用）
const users: any[] = []

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // 检查用户是否已存在
    const existingUser = users.find(u => u.email === email)
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }

    // 创建用户（简化版，不加密密码）
    const user = {
      id: Date.now().toString(),
      name,
      email,
      password,
      credits: 100,
      createdAt: new Date()
    }

    users.push(user)

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        credits: user.credits
      }
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    )
  }
}
