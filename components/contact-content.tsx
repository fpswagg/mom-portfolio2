"use client"

import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Facebook, Linkedin } from "lucide-react"

export function ContactContent() {
  const { t } = useLanguage()

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com"
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+237 XXX XXX XXX"
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || "#"
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"

  const contactMethods = [
    {
      icon: Mail,
      title: t("contact.email"),
      value: contactEmail,
      href: `mailto:${contactEmail}`,
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      value: contactPhone,
      href: `tel:${contactPhone.replace(/\s/g, "")}`,
    },
    {
      icon: Facebook,
      title: "Facebook",
      value: t("contact.facebook"),
      href: facebookUrl,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: t("contact.linkedin"),
      href: linkedinUrl,
    },
  ]

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 lg:mb-20 text-center opacity-0 animate-fade-in-up">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {t("contact.title")}
            </h1>
            <div className="w-20 h-1 bg-foreground mx-auto mb-8"></div>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <a
                  href={method.href}
                  target={method.icon === Facebook || method.icon === Linkedin ? "_blank" : undefined}
                  rel={method.icon === Facebook || method.icon === Linkedin ? "noopener noreferrer" : undefined}
                  className="block group"
                >
                  <method.icon className="h-10 w-10 mb-4 text-foreground group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">{method.value}</p>
                </a>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <Card className="p-8 lg:p-12 bg-muted opacity-0 animate-fade-in-up animate-delay-400">
            <h2 className="font-serif text-2xl font-semibold mb-4 text-center">{t("contact.availability.title")}</h2>
            <p className="text-center text-foreground/80 leading-relaxed mb-6">
              {t("contact.availability.description")}
            </p>
            <p className="text-center text-sm text-muted-foreground">{t("contact.availability.response")}</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
