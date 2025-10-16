"use client"

import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"
import { Scale, Award, Users, BookOpen } from "lucide-react"

export function AboutContent() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Scale,
      title: t("about.values.integrity.title"),
      description: t("about.values.integrity.description"),
    },
    {
      icon: Award,
      title: t("about.values.excellence.title"),
      description: t("about.values.excellence.description"),
    },
    {
      icon: Users,
      title: t("about.values.client.title"),
      description: t("about.values.client.description"),
    },
    {
      icon: BookOpen,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description"),
    },
  ]

  const education = [
    {
      degree: t("about.education.degree1"),
      year: "1991",
    },
    {
      degree: t("about.education.degree2"),
      year: "1988",
    },
    {
      degree: t("about.education.degree3"),
      period: t("about.education.period3"),
    },
    {
      degree: t("about.education.degree4"),
      period: t("about.education.period4"),
    },
  ]

  const experiences = [
    {
      company: t("about.experience.current.company"),
      period: t("about.experience.current.period"),
      tasks: [],
      isCurrent: true,
    },
    {
      company: t("about.experience.cazenave.company"),
      period: "2000 - 2020",
      tasks: [
        t("about.experience.cazenave.task1"),
        t("about.experience.cazenave.task2"),
        t("about.experience.cazenave.task3"),
        t("about.experience.cazenave.task4"),
        t("about.experience.cazenave.task5"),
        t("about.experience.cazenave.task6"),
        t("about.experience.cazenave.task7"),
        t("about.experience.cazenave.task8"),
        t("about.experience.cazenave.task9"),
      ],
    },
    {
      company: t("about.experience.vetopharm.company"),
      period: "1994 - 1998",
      tasks: [
        t("about.experience.vetopharm.task1"),
        t("about.experience.vetopharm.task2"),
        t("about.experience.vetopharm.task3"),
        t("about.experience.vetopharm.task4"),
        t("about.experience.vetopharm.task5"),
        t("about.experience.vetopharm.task6"),
        t("about.experience.vetopharm.task7"),
        t("about.experience.vetopharm.task8"),
      ],
    },
  ]

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 lg:mb-20 opacity-0 animate-fade-in-up">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {t("about.title")}
            </h1>
            <div className="w-20 h-1 bg-foreground mb-8"></div>
          </div>

          {/* Background */}
          <div className="space-y-6 mb-16 lg:mb-20 opacity-0 animate-fade-in-up animate-delay-200">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">{t("about.background.title")}</h2>
            <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">{t("about.background.p1")}</p>
            <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">{t("about.background.p2")}</p>
            <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">{t("about.background.p3")}</p>
          </div>

          {/* Education */}
          <div className="mb-16 lg:mb-20 opacity-0 animate-fade-in-up animate-delay-250">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-8">{t("about.education.title")}</h2>
            <div className="space-y-4">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="border border-border bg-card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative overflow-hidden group hover:border-foreground/20 transition-all duration-300"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-foreground group-hover:w-1.5 transition-all duration-300"></div>

                  <div className="flex-1 pl-4">
                    <h3 className="font-medium text-base lg:text-lg leading-relaxed">{item.degree}</h3>
                  </div>

                  <div className="pl-4 sm:pl-0 sm:text-right">
                    <span className="text-muted-foreground text-sm lg:text-base whitespace-nowrap">
                      {item.year || item.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-16 lg:mb-20 opacity-0 animate-fade-in-up animate-delay-300">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-8">{t("about.experience.title")}</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border border-border bg-card p-6 lg:p-8 relative overflow-hidden group hover:border-foreground/20 transition-all duration-300"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-foreground group-hover:w-1.5 transition-all duration-300"></div>

                  <div className="pl-4">
                    {/* Company and period header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <h3 className="font-semibold text-lg lg:text-xl leading-relaxed flex-1">{exp.company}</h3>
                      <span className="text-muted-foreground text-sm lg:text-base whitespace-nowrap">{exp.period}</span>
                    </div>

                    {/* Current position badge */}
                    {exp.isCurrent && (
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-foreground/10 border border-foreground/20 text-foreground text-xs font-medium rounded">
                          {t("about.experience.currentBadge")}
                        </span>
                      </div>
                    )}

                    {/* Tasks list */}
                    {exp.tasks.length > 0 && (
                      <div className="mt-4">
                        <p className="text-muted-foreground text-sm mb-3">{t("about.experience.tasksLabel")}</p>
                        <ul className="space-y-2">
                          {exp.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start gap-3">
                              <span className="text-foreground mt-1 text-sm">▸</span>
                              <span className="text-foreground/80 text-sm lg:text-base leading-relaxed">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-16 lg:mb-20 opacity-0 animate-fade-in-up animate-delay-400">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-6">{t("about.expertise.title")}</h2>
            <ul className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-foreground mt-1">•</span>
                  <span className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                    {t(`about.expertise.item${i}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Values */}
          <div className="opacity-0 animate-fade-in-up animate-delay-500">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-8">{t("about.values.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <value.icon className="h-10 w-10 mb-4 text-foreground" />
                  <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
