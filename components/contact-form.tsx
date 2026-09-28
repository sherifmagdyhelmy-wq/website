'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const WEB3FORMS_ACCESS_KEY = 'b89f4e65-94e7-467d-b4a1-1b0667e548f5'

type Status = 'idle' | 'sending' | 'success' | 'error'

const fieldClass =
  'w-full border border-ink/25 bg-ink/[0.04] px-4 py-3 text-base text-ink placeholder:text-ink/45 outline-none transition-colors duration-200 focus:border-ink focus:bg-ink/[0.07]'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (data.get('botcheck')) return

    setStatus('sending')
    setError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New enquiry from the NEW VISION website',
          from_name: 'NEW VISION Website',
          name: String(data.get('name') ?? '').trim(),
          email: String(data.get('email') ?? '').trim(),
          message: String(data.get('message') ?? '').trim(),
        }),
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Something went wrong. Please try again.')
      }

      form.reset()
      setStatus('success')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="flex animate-in fade-in slide-in-from-bottom-2 flex-col items-start gap-4 duration-500">
        <span className="flex size-12 items-center justify-center bg-ink text-brand">
          <Check className="size-6" aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-black tracking-tight">Message sent.</p>
          <p className="leading-relaxed text-ink/75">Thank you. Our team will get back to you shortly.</p>
        </div>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="font-mono text-xs uppercase tracking-[0.2em] underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          Send another message
        </button>
      </div>
    )
  }

  const sending = status === 'sending'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate={false}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70">Name</span>
          <input name="name" type="text" required autoComplete="name" maxLength={100} placeholder="Your name" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
            placeholder="you@company.com"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          maxLength={3000}
          placeholder="Tell us about your customers, branches and goals."
          className={cn(fieldClass, 'resize-none')}
        />
      </label>

      {status === 'error' && (
        <p role="alert" className="text-sm font-semibold text-ink">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="group mt-2 inline-flex items-center justify-center gap-2.5 bg-ink px-6 py-4 font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70 sm:self-start"
      >
        {sending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <ArrowUpRight
              className="size-4 text-brand transition-transform duration-300 group-hover:rotate-45"
              aria-hidden="true"
            />
          </>
        )}
      </button>
    </form>
  )
}
