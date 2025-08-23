import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Users,
  DollarSign,
  Heart,
  GraduationCap,
  Lightbulb,
  Globe,
  TrendingUp,
  BookOpen,
  Home,
} from "lucide-react"

export default function ImportancePage() {
  const keyBenefits = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Environmental Preservation",
      description:
        "Sustainable schools actively contribute to environmental protection through reduced resource consumption and waste management.",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Conscious Citizen Formation",
      description: "Students develop environmental awareness and responsible habits that extend beyond the classroom.",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Economic Benefits",
      description:
        "Sustainable practices significantly reduce operational costs, freeing up resources for educational improvements.",
      color: "bg-yellow-500/10 text-yellow-600",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Engagement",
      description: "Schools become catalysts for broader community involvement in sustainability initiatives.",
      color: "bg-purple-500/10 text-purple-600",
    },
  ]

  const practicalExamples = [
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Energy Reduction",
      description: "LED lighting and smart systems reduce energy consumption",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Water Conservation",
      description: "Rainwater harvesting and efficient plumbing systems",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Waste Management",
      description: "Comprehensive recycling and composting programs",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Educational Materials",
      description: "Use of recyclable and sustainable learning resources",
    },
  ]

  const economicImpacts = [
    {
      title: "Solar Panel Installation",
      description: "Reduces electricity costs by up to 70%",
      impact: "Long-term savings",
    },
    {
      title: "Rainwater Harvesting",
      description: "Cuts water bills and ensures sustainable supply",
      impact: "Resource efficiency",
    },
    {
      title: "Energy-Efficient Systems",
      description: "Smart thermostats and LED lighting reduce operational costs",
      impact: "Immediate savings",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-card to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Educational Impact</Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
                The Importance of Sustainable Schools
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding why sustainable schools are fundamental for environmental preservation, citizen formation,
                and community development
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <Card className="p-8 mb-12">
              <CardContent className="pt-0">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl mb-4">Why Sustainable Schools Matter</h2>
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      A sustainable school is fundamental not only for the preservation of the environment, but also for
                      the formation of more conscious, responsible, and well-prepared citizens to face future
                      challenges.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      These institutions integrate ecological practices into daily school life, promoting an educational
                      environment that values respect for nature, the responsible use of resources, and active
                      citizenship.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Benefits */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-center mb-12">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {keyBenefits.map((benefit, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-0">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${benefit.color}`}
                        >
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Practical Examples */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-center mb-12">Practical Implementation</h2>
              <Card className="p-8">
                <CardContent className="pt-0">
                  <p className="text-lg text-foreground mb-6">
                    By adopting sustainable actions, schools become practical examples of how small actions can lead to
                    major transformations. This type of environment encourages students to reflect on their own actions
                    and develop healthier and more conscious habits.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {practicalExamples.map((example, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          {example.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{example.title}</h4>
                          <p className="text-xs text-muted-foreground">{example.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Economic Impact */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-center mb-12">Economic Impact</h2>
              <Card className="p-8 bg-gradient-to-r from-accent/5 to-primary/5">
                <CardContent className="pt-0">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-4">Cost Savings and Resource Optimization</h3>
                      <p className="text-foreground leading-relaxed mb-6">
                        Sustainable measures can significantly reduce the school's operational costs. The resources
                        saved can then be invested in other areas, such as educational materials, pedagogical projects,
                        and teacher training.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {economicImpacts.map((impact, index) => (
                      <div key={index} className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-sm mb-2">{impact.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{impact.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {impact.impact}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Role */}
            <Card className="p-8 mb-12">
              <CardContent className="pt-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl mb-4">Social Impact and Community Building</h2>
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      A sustainable school also plays a social role, as it encourages community participation in
                      collective actions and educational projects. This interaction strengthens the ties between school
                      and society.
                    </p>
                    <p className="text-muted-foreground">
                      This collaborative approach motivates everyone involved to contribute to a more just, balanced,
                      and sustainable future, creating a ripple effect that extends far beyond the school walls.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Future Vision */}
            <div className="text-center">
              <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Home className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4">Building a Sustainable Future</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Sustainable schools are not just educational institutions—they are catalysts for positive change,
                    preparing students to become responsible global citizens who will shape a more sustainable world.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/environmental-sustainability"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                      Explore Implementation
                    </a>
                    <a
                      href="/what-is-sustainable-school"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    >
                      Learn the Basics
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Responsible Team Section */}
            <section className="py-12">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Card className="p-6">
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-5 w-5 text-accent" />
                      <h2 className="font-heading font-bold text-2xl">Responsible for this topic</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Kawani Shinzato",
                        "Natiely Felipe",
                        "Vitória Namie",
                      ].map((name) => (
                        <Badge key={name} variant="secondary" className="text-sm py-1.5 px-3">
                          {name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
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
