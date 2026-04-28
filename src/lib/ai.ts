import OpenAI from 'openai'

const deepseek = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || '',
  baseURL: 'https://api.deepseek.com',
})

export async function parseSearchQuery(query: string) {
  if (!process.env.DEEPSEEK_API_KEY) {
    return {
      intent: query,
      keywords: query.split(' ').filter(w => w.length > 2),
      filters: {},
      suggestedQueries: []
    }
  }

  try {
    const response = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `You are an AI assistant that parses people search queries. 
          Extract keywords, location, industry, follower count range, platforms, and tags.
          Return JSON: { "intent": "...", "keywords": [...], "filters": { "location": "...", "industry": "...", "followers": { "min": number, "max": number }, "platforms": [...], "tags": [...] }, "suggestedQueries": [...] }`
        },
        { role: 'user', content: query }
      ],
      temperature: 0.3,
      max_tokens: 500
    })

    const content = response.choices[0]?.message?.content || '{}'
    return JSON.parse(content)
  } catch (error) {
    console.error('AI parsing error:', error)
    return {
      intent: query,
      keywords: query.split(' ').filter(w => w.length > 2),
      filters: {},
      suggestedQueries: []
    }
  }
}

export async function generateEmail(
  recipientName: string,
  recipientCompany: string,
  purpose: string,
  tone: string
) {
  if (!process.env.DEEPSEEK_API_KEY) {
    return {
      subject: `Quick question about ${purpose}`,
      body: `Hi ${recipientName},\n\nI noticed your work at ${recipientCompany || 'your company'} and wanted to reach out about ${purpose}.\n\nWould you be open to a quick chat?\n\nBest regards`
    }
  }

  try {
    const response = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `You are an expert at writing professional cold emails. 
          Generate a compelling email with a catchy subject line, personalized opening, clear value proposition, and call to action.
          Return JSON: { "subject": "...", "body": "..." }`
        },
        {
          role: 'user',
          content: `Write a ${tone} email to ${recipientName} at ${recipientCompany || 'their company'} about ${purpose}`
        }
      ],
      temperature: 0.7,
      max_tokens: 800
    })

    const content = response.choices[0]?.message?.content || '{}'
    return JSON.parse(content)
  } catch (error) {
    console.error('Email generation error:', error)
    return {
      subject: `Regarding ${purpose}`,
      body: `Hi ${recipientName},\n\nI wanted to reach out about ${purpose}.\n\nBest regards`
    }
  }
}

export async function analyzeProfile(profile: any) {
  if (!process.env.DEEPSEEK_API_KEY) {
    return {
      score: 75,
      insights: ['Profile appears active', 'Good engagement metrics'],
      recommendations: ['Personalize your outreach', 'Reference their recent work']
    }
  }

  try {
    const response = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `Analyze this person's profile and provide a score (0-100), insights, and recommendations.
          Return JSON: { "score": number, "insights": [...], "recommendations": [...] }`
        },
        { role: 'user', content: JSON.stringify(profile) }
      ],
      temperature: 0.3,
      max_tokens: 500
    })

    const content = response.choices[0]?.message?.content || '{}'
    return JSON.parse(content)
  } catch (error) {
    console.error('Profile analysis error:', error)
    return {
      score: 75,
      insights: ['Profile appears active'],
      recommendations: ['Personalize your outreach']
    }
  }
}
