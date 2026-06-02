import { Navigation } from '@/src/components/navigation'
import { Footer } from '@/src/components/footer'
import { CookieBanner } from '@/src/components/cookie-banner'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Australia Game Blog. We respect your privacy and are
                committed to protecting your personal data. This privacy policy
                will inform you about how we handle your personal data when you
                visit our website.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We may collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Contact information (name, email address) when you submit
                    forms
                  </li>
                  <li>
                    Usage data (pages visited, time spent, browser type) through
                    analytics
                  </li>
                  <li>
                    Cookie data for site functionality and user preferences
                  </li>
                </ul>
              </div>
            </section>

            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We use your personal data to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and user experience</li>
                  <li>Send you updates if you&apos;ve opted in</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Data Storage and Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your
                personal data from unauthorized access, alteration, disclosure,
                or destruction. Your data is stored securely and only retained
                for as long as necessary to fulfill the purposes outlined in
                this policy.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Your Rights
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </section>

            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Third-Party Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites. We encourage you to read their privacy policies.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact Information
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>
                  If you have questions about this privacy policy, please contact us via the{' '}
                  <a href="/about" className="text-primary hover:underline">contact form</a> on our About page.
                </p>
              </div>
            </section>

            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this
                page and updating the &quot;Last updated&quot; date.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  )
}
