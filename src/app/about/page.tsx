'use client'

import { Navigation } from '@/src/components/navigation'
import { Footer } from '@/src/components/footer'
import { CookieBanner } from '@/src/components/cookie-banner'
import { useState } from 'react'
import { Field, FieldGroup, FieldLabel } from '@/src/components/ui/field'
import { Input } from '@/src/components/ui/input'
import { Textarea } from '@/src/components/ui/textarea'
import { Button } from '@/src/components/ui/button'

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Where Games Meet Culture
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A creative exploration of board gaming through an Australian lens
            </p>
          </div>

          {/* Story Section */}
          <div className="space-y-8 mb-24">
            <div className="prose prose-lg max-w-none">
              <div className="p-8 lg:p-12 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aussie Games List exists at the intersection of imagination
                  and tradition. We explore original Australian tabletop games that don&apos;t
                  follow the mainstream — no big brands, no licensed franchises.
                  Each game we feature is inspired by Australia&apos;s
                  diverse landscapes, rich cultural heritage, and the spirit of
                  connection that defines communities across the country.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through these games, we explore themes of
                  cooperation, storytelling, and the unique Australian
                  experience. From the red deserts to the turquoise coasts, from
                  ancient traditions to contemporary creativity — tabletop gaming
                  as a genuine expression of Australian life.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Why Fictional Games?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  By imagining games that don&apos;t exist, we&apos;re free to
                  explore mechanics, themes, and stories without commercial
                  constraints. It&apos;s pure creativity—game design as art.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-accent/5 border border-accent/10">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Why Australia?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Australia&apos;s landscapes and cultures offer endless
                  inspiration. Our unique biodiversity, indigenous wisdom, and
                  modern multicultural identity create rich storytelling ground.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-center mb-8 leading-relaxed">
              Have thoughts about our games? Want to share your own ideas? We'd
              love to hear from you.
            </p>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
              <FieldGroup>
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    required
                    className="rounded-xl"
                  />
                </Field>

                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    required
                    className="rounded-xl"
                  />
                </Field>

                <Field>
                  <FieldLabel>Message</FieldLabel>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us what's on your mind..."
                    required
                    rows={6}
                    className="rounded-xl"
                  />
                </Field>
              </FieldGroup>

              <Button
                type="submit"
                className="w-full rounded-full"
                size="lg"
                disabled={submitted}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  )
}
