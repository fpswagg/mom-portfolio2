"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Portrait */}
            <div className="order-2 lg:order-1 opacity-0 animate-fade-in-up">
              <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden">
                <img
                  src="/image.png"
                  alt="Eleke Ernestine"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
              <div className="space-y-4 opacity-0 animate-fade-in-up animate-delay-200">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Eleke Ernestine
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground font-light">{t("hero.title")}</p>
              </div>

              <p className="text-base lg:text-lg text-foreground/80 leading-relaxed opacity-0 animate-fade-in-up animate-delay-300">
                {t("hero.intro")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animate-delay-400">
                <Button asChild size="lg" className="group">
                  <Link href="/services">
                    {t("hero.cta")}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">{t("hero.contact")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
