import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Leaf,
  Recycle,
  Droplets,
  Zap,
  BookOpen,
  Film,
  Lightbulb,
  Megaphone,
  Globe,
} from "lucide-react"

export default function EducationAndSustainableCulturePage() {
  const team = [
    "Allan Nascimento",
    "Maria Clara Oliveira",
    "Guilherme Machado",
    "Giovana Kumbrevivius",
  ]

  const initiatives = [
    {
      title: "Sustainability Club",
      icon: <Megaphone className="h-5 w-5" />,
      image: "/children-environment-learning.png",
      description:
        "A student-led club to plan actions, share ideas, and promote environmental awareness inside and outside school.",
      highlights: [
        "Leadership and teamwork development",
        "Campaigns and hands-on activities",
        "Community engagement",
      ],
    },
    {
      title: "English Projects on Sustainability",
      icon: <BookOpen className="h-5 w-5" />,
      image: "/sustainable-school.png",
      description:
        "Project-based learning in English covering recycling, energy and water conservation, and wildlife protection.",
      highlights: [
        "Language practice with real-world topics",
        "Presentations, posters, and debates",
        "Interdisciplinary approach",
      ],
    },
    {
      title: "Talks & Documentaries",
      icon: <Film className="h-5 w-5" />,
      image: "/school-garden-work.png",
      description:
        "Invite experts and NGOs for talks, and screen documentaries to inspire and inform students and staff.",
      highlights: [
        "Up-to-date information from specialists",
        "Critical thinking and reflection",
        "Culture of care for the planet",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-card to-background py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Culture & Education</Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
                Education and Sustainable Culture
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Building conscious, responsible habits through education and meaningful school experiences.
              </p>
            </div>
            <div className="relative mx-auto max-w-4xl">
              <Image
                src="/children-environment-learning.png"
                alt="Students learning about the environment in a classroom"
                width={1280}
                height={720}
                className="rounded-lg border border-border shadow-sm"
                priority
              />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 mb-12">
              <CardContent className="pt-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl mb-4">Why Education Matters</h2>
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      Sustainability is more than just recycling; it is about creating conscious and responsible habits
                      in our daily lives. Education plays a key role in helping students and teachers become more aware
                      of their actions and their impact on the environment.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      By focusing on education and a sustainable culture, Wizard can help form students who are more
                      conscious, responsible, and engaged. Small actions within the school can lead to meaningful
                      changes in the world.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Initiatives */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-center mb-12">Key Initiatives</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {initiatives.map((item, i) => (
                  <Card key={i} className="p-0 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-0">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <span className="text-primary">{item.icon}</span>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="mb-4">
                        <Image
                          src={item.image}
                          alt={`${item.title} illustration`}
                          width={640}
                          height={360}
                          className="rounded-md border border-border"
                        />
                      </div>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.highlights.map((h, idx) => (
                          <li key={idx} className="text-sm text-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Practical Habits */}
            <Card className="p-8 mb-16 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="pt-0">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h2 className="font-heading font-bold text-2xl mb-4">Practical Habits to Encourage</h2>
                    <ul className="space-y-3 text-foreground">
                      <li className="flex items-start">
                        <Recycle className="h-5 w-5 text-accent mt-0.5 mr-2" />
                        Separate waste and promote recycling campaigns.
                      </li>
                      <li className="flex items-start">
                        <Zap className="h-5 w-5 text-accent mt-0.5 mr-2" />
                        Save energy: turn off lights and unplug devices when not in use.
                      </li>
                      <li className="flex items-start">
                        <Droplets className="h-5 w-5 text-accent mt-0.5 mr-2" />
                        Reduce water consumption and fix leaks quickly.
                      </li>
                      <li className="flex items-start">
                        <Leaf className="h-5 w-5 text-accent mt-0.5 mr-2" />
                        Encourage green areas and school gardens for hands-on learning.
                      </li>
                      <li className="flex items-start">
                        <Lightbulb className="h-5 w-5 text-accent mt-0.5 mr-2" />
                        Share ideas in assemblies or the sustainability club for continuous improvement.
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <Image
                      src="/school-garden-work.png"
                      alt="Students working in a school garden"
                      width={800}
                      height={500}
                      className="rounded-lg border border-border"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Responsible Team */}
            <section className="py-12">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Card className="p-6">
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-5 w-5 text-accent" />
                      <h2 className="font-heading font-bold text-2xl">Responsible for this topic</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {team.map((name) => (
                        <Badge key={name} variant="secondary" className="text-sm py-1.5 px-3">
                          {name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA */}
            <div className="mt-8 text-center">
              <h3 className="font-heading font-bold text-2xl mb-4">Ready to cultivate a sustainable culture?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Start small: organize a club meeting, choose a project, and invite your community to join the change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/environmental-sustainability"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Explore Environmental Sustainability
                </a>
                <a
                  href="/what-is-sustainable-school"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Learn the Basics
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Wizard News. Promoting sustainable education for a better tomorrow.
          </p>
        </div>
      </footer>
    </div>
  )
}
