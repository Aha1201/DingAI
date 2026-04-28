import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
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

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        const users = getUsers()
        const user = users.find(u => u.email === credentials.email)
        if (!user || user.password !== credentials.password) {
          return null
        }
        return { id: user.id, email: user.email, name: user.name }
      }
    })
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) { token.id = user.id }
      return token
    },
    async session({ session, token }) {
      if (session.user) { (session.user as any).id = token.id }
      return session
    }
  }
})

export { handler as GET, handler as POST }
