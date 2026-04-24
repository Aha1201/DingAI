import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { recipientName, recipientCompany, purpose, tone } = await request.json()
    if (!recipientName || !purpose) {
      return NextResponse.json({ error: 'Recipient name and purpose are required' }, { status: 400 })
    }
    const email = {
      subject: `Quick question about ${purpose}`,
      body: `Hi ${recipientName},\n\nI noticed your work at ${recipientCompany || 'your company'} and wanted to reach out about ${purpose}.\n\nWould you be open to a quick chat?\n\nBest regards`
    }
    return NextResponse.json({ success: true, data: email })
  } catch (error) {
    console.error('Email generation error:', error)
    return NextResponse.json({ error: 'Failed to generate email' }, { status: 500 })
  }
}
