"use client"

import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Shield, Briefcase, Scale, Users, BookCheck } from "lucide-react"

export function ServicesContent() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Shield,
      title: t("services.ip.title"),
      description: t("services.ip.description"),
      items: [t("services.ip.item1"), t("services.ip.item2"), t("services.ip.item3"), t("services.ip.item4")],
    },
    {
      icon: Briefcase,
      title: t("services.business.title"),
      description: t("services.business.description"),
      items: [
        t("services.business.item1"),
        t("services.business.item2"),
        t("services.business.item3"),
        t("services.business.item4"),
      ],
    },
    {
      icon: FileText,
      title: t("services.contracts.title"),
      description: t("services.contracts.description"),
      items: [
        t("services.contracts.item1"),
        t("services.contracts.item2"),
        t("services.contracts.item3"),
        t("services.contracts.item4"),
      ],
    },
    {
      icon: Scale,
      title: t("services.litigation.title"),
      description: t("services.litigation.description"),
      items: [
        t("services.litigation.item1"),
        t("services.litigation.item2"),
        t("services.litigation.item3"),
        t("services.litigation.item4"),
      ],
    },
    {
      icon: Users,
      title: t("services.compliance.title"),
      description: t("services.compliance.description"),
      items: [
        t("services.compliance.item1"),
        t("services.compliance.item2"),
        t("services.compliance.item3"),
        t("services.compliance.item4"),
      ],
    }
  ]

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 lg:mb-20 text-center opacity-0 animate-fade-in-up">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {t("services.title")}
            </h1>
            <div className="w-20 h-1 bg-foreground mx-auto mb-8"></div>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("services.subtitle")}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <service.icon className="h-12 w-12 mb-6 text-foreground" />
                <h2 className="font-serif text-2xl font-semibold mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-foreground mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center opacity-0 animate-fade-in-up animate-delay-500">
            <p className="text-lg text-foreground/80 mb-6">{t("services.cta")}</p>
            <Button asChild size="lg">
              <Link href="/contact">{t("services.ctaButton")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
