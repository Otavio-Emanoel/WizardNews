import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Zap, Droplets, Recycle, DollarSign, Users } from "lucide-react"

export default function WhatIsSustainableSchoolPage() {
  const sustainablePractices = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Energy Reduction",
      description: "Implementing energy-efficient systems and renewable energy sources",
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Water Conservation",
      description: "Reducing water consumption through efficient systems and rainwater harvesting",
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "Waste Management",
      description: "Avoiding waste through recycling programs and sustainable materials",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Reduction",
      description: "Generating economic savings through sustainable alternatives",
    },
  ]

  const brazilianExamples = [
    {
      name: "Escola Municipal de Mogi das Cruzes",
      location: "São Paulo",
      description:
        "Municipal school implementing comprehensive sustainability practices including energy efficiency and waste reduction programs.",
    },
    {
      name: "Colégio Estadual Erich Walter Heine",
      location: "Rio de Janeiro",
      description: "State school focusing on renewable energy integration and environmental education curriculum.",
    },
    {
      name: "Creche Municipal Hassis",
      location: "Florianópolis",
      description:
        "Municipal daycare center pioneering early childhood environmental awareness and sustainable practices.",
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
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Educational Sustainability</Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
                What is a Sustainable School?
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding the principles and practices that make educational institutions environmentally
                responsible and economically viable
              </p>
            </div>
          </div>
        </section>

        {/* Definition Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 mb-12">
              <CardContent className="pt-0">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl mb-4">Definition</h2>
                    <p className="text-lg text-foreground leading-relaxed">
                      A sustainable school is an educational institution that adopts practices to reduce energy and
                      water consumption, avoid waste, use renewable energy sources, reduce costs, and generate
                      sustainable economic alternatives. These schools serve as living examples of environmental
                      responsibility while providing quality education.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Practices */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-center mb-12">Key Sustainable Practices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {sustainablePractices.map((practice, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                          {practice.icon}
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-2">{practice.title}</h3>
                          <p className="text-muted-foreground">{practice.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Brazilian Examples */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-center mb-12">
                Examples of Sustainable Schools in Brazil
              </h2>
              <div className="space-y-6">
                {brazilianExamples.map((school, index) => (
                  <Card key={index} className="p-6">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="font-heading text-xl mb-2">{school.name}</CardTitle>
                          <Badge variant="outline" className="text-accent border-accent">
                            {school.location}
                          </Badge>
                        </div>
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-accent" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{school.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="pt-0">
                  <h3 className="font-heading font-bold text-2xl mb-4">Ready to Learn More?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Explore how schools can implement environmental sustainability practices and understand the
                    importance of sustainable education for future generations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/environmental-sustainability"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                      Environmental Sustainability
                    </a>
                    <a
                      href="/importance"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    >
                      Why It Matters
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Responsáveis pelo tema */}
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
                        "Karla Tawata",
                        "Laura Coutinho",
                        "Maria Eduarda Dias Ribeiro",
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
