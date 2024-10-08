import { Resend } from 'resend'
import type { H3Event } from 'h3'
import type { ContactEmail } from '~/types/ContactEmail'

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY)

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event)) as ContactEmail
    const { email, subject, message, phone, fullname } = body
    return await resend.emails.send({
      from: `Srijit's Website <site@srijit.co>`,
      to: ['mail@srijit.co'],
      subject: `${fullname} is trying to contact you from your website !`,
      html: `
      <p>Someone is trying to contact you from your website !</p>
      <p>Here's the message details :</p>
      <ul>
        <li>Name : ${fullname}</li>
        <li>Email : ${email}</li>
        <li>Number : ${phone}</li>
        <li>Subject : ${subject}</li>
        <li>Message : ${message}</li>
      </ul>
      `,
    })
  }
  catch (error) {
    return { error }
  }
})
