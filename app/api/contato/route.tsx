import EmailContato from '@/components/Shared/Email/Contato'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_EMAIL_API_KEY)

export async function POST(request: Request) {
  const res = await request.json()
  try {
    const data = await resend.emails.send({
      from: `${process.env.NEXT_PUBLIC_EMAIL_FROM}`,
      to: [`${process.env.NEXT_PUBLIC_EMAIL_TO}`, `${res.email}`],
      subject: 'Contato Volo',
      react: EmailContato(res)
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
