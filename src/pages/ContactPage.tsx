import { useState, type SubmitEvent } from 'react'
import Header from '@/layouts/Header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Alert from '@/components/ui/Alert'

export const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <Header title="Contact" description="Get in touch with us" />

      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader><CardTitle>Send us a message</CardTitle></CardHeader>
          <CardContent>
            {submitted && <Alert variant="success" className="mb-4">Thank you for your message! We'll get back to you soon.</Alert>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
              <Input label="Email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required />

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message..." rows={5} required
                  className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500" />
              </div>

              <Button type="submit" isLoading={isLoading} className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default ContactPage
