import { Navigation } from '@/src/components/navigation'
import { Footer } from '@/src/components/footer'
import { CookieBanner } from '@/src/components/cookie-banner'

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                What Are Cookies?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your device when
                you visit a website. They help the website remember your
                preferences and improve your browsing experience.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                How We Use Cookies
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Essential Cookies:</strong> Required for the website
                    to function properly
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how
                    visitors use our website
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings
                    and preferences
                  </li>
                </ul>
              </div>
            </section>

            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Types of Cookies We Use
              </h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-muted/30">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Session Cookies
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These are temporary cookies that expire when you close your
                    browser. They help us maintain your session while you
                    navigate the website.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-muted/30">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Persistent Cookies
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These cookies remain on your device for a set period or until
                    you delete them. They help us recognize you when you return
                    to our website.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-muted/30">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Third-Party Cookies
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Some cookies are placed by third-party services that appear
                    on our pages, such as analytics providers.
                  </p>
                </div>
              </div>
            </section>

            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Managing Cookies
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>You can control and manage cookies in several ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Use our cookie banner to accept or decline non-essential
                    cookies
                  </li>
                  <li>
                    Adjust your browser settings to block or delete cookies
                  </li>
                  <li>
                    Use browser plugins to manage cookie preferences
                  </li>
                </ul>
                <p className="mt-4">
                  Please note that blocking certain cookies may affect the
                  functionality of our website.
                </p>
              </div>
            </section>

            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Cookie Duration
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our cookies have varying lifespans depending on their purpose.
                Essential cookies typically last for the duration of your
                session, while preference and analytics cookies may persist for
                up to 12 months.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Updates to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this cookie policy periodically to reflect changes
                in technology or legal requirements. Please check this page
                regularly for the latest information.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-card/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>
                  If you have questions about our use of cookies, please contact:
                </p>
                <div className="text-sm bg-muted/30 p-4 rounded-xl mt-4">
                  <p className="font-medium">K.C. NTOMATA LIMITED</p>
                  <p>Stylianou Lena, 24 Christiana Court, Flat/Office 202</p>
                  <p>Strovolos, 2019 Nicosia, Cyprus</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  )
}
