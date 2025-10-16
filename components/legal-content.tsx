"use client"

import { useLanguage } from "@/components/language-provider"

export function LegalContent() {
  const { t } = useLanguage()

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 opacity-0 animate-fade-in-up">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{t("legal.title")}</h1>
            <div className="w-20 h-1 bg-foreground mb-8"></div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none opacity-0 animate-fade-in-up animate-delay-200">
            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold mb-4">{t("legal.publisher.title")}</h2>
              <p className="text-foreground/80 leading-relaxed mb-2">
                <strong>{t("legal.publisher.name")}:</strong> Eleke Ernestine
              </p>
              <p className="text-foreground/80 leading-relaxed mb-2">
                <strong>{t("legal.publisher.email")}:</strong>{" "}
                {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com"}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                <strong>{t("legal.publisher.phone")}:</strong>{" "}
                {process.env.NEXT_PUBLIC_CONTACT_PHONE || "+237 XXX XXX XXX"}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold mb-4">{t("legal.hosting.title")}</h2>
              <p className="text-foreground/80 leading-relaxed">{t("legal.hosting.description")}</p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold mb-4">{t("legal.property.title")}</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">{t("legal.property.p1")}</p>
              <p className="text-foreground/80 leading-relaxed">{t("legal.property.p2")}</p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold mb-4">{t("legal.data.title")}</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">{t("legal.data.p1")}</p>
              <p className="text-foreground/80 leading-relaxed">{t("legal.data.p2")}</p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold mb-4">{t("legal.cookies.title")}</h2>
              <p className="text-foreground/80 leading-relaxed">{t("legal.cookies.description")}</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">{t("legal.liability.title")}</h2>
              <p className="text-foreground/80 leading-relaxed">{t("legal.liability.description")}</p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
