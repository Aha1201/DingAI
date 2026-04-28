import { NextRequest, NextResponse } from 'next/server'

// 使用文件系统存储（持久化）
import fs from 'fs'
import path from 'path'

const DB_FILE = path.join(process.cwd(), 'users.json')

function getUsers(): any[] {
  try {
    if (fs.existsSync(DB_FILE)) {
      const data = fs.readFileSync(DB_FILE, 'utf-8')
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Error reading users:', error)
  }
  return [
    { id: '1', name: 'Demo User', email: 'demo@dingai.com', password: 'password123', credits: 100 }
  ]
}

function saveUsers(users: any[]) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2))
  } catch (error) {
    console.error('Error saving users:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 })
    }

    const users = getUsers()
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
    saveUsers(users)

    return NextResponse.json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email, credits: user.credits }
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
}
