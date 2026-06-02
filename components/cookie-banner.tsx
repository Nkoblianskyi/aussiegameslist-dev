'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              Cookie Preferences
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your browsing experience and analyze our
              traffic. By clicking &quot;Accept&quot;, you consent to our use of
              cookies.{' '}
              <Link
                href="/cookies"
                className="text-primary hover:underline underline-offset-4"
              >
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleDecline}
              className="rounded-full"
            >
              Decline
            </Button>
            <Button onClick={handleAccept} className="rounded-full">
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
