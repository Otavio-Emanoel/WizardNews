import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Leaf,
  GraduationCap,
  Recycle,
  Users,
  BarChart3,
  Globe,
  Lightbulb,
  Car,
  Building,
  Palette,
  FlaskConical,
  Heart,
} from "lucide-react"

export default function EnvironmentalSustainabilityPage() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction to Environmental Sustainability",
      icon: <Globe className="h-6 w-6" />,
      content: [
        "Definition of sustainability",
        "Importance of sustainability in modern society",
        "Overview of environmental challenges",
      ],
    },
    {
      id: "role",
      title: "The Role of Schools in Promoting Sustainability",
      icon: <GraduationCap className="h-6 w-6" />,
      content: [
        "Educating future generations",
        "Creating sustainable school environments",
        "Involving students in green initiatives",
      ],
    },
    {
      id: "practices",
      title: "Sustainable Practices in Schools",
      icon: <Leaf className="h-6 w-6" />,
      content: [
        "Reducing energy consumption",
        "Recycling and waste management",
        "Sustainable transportation (bike, walk, carpool)",
        "Green school buildings and infrastructure",
      ],
    },
    {
      id: "activities",
      title: "Classroom Activities and Projects",
      icon: <Lightbulb className="h-6 w-6" />,
      content: [
        "Environmental awareness campaigns",
        "School garden projects",
        "Art and writing contests about sustainability",
        "Science fair with eco-friendly innovations",
      ],
    },
    {
      id: "community",
      title: "Community Involvement",
      icon: <Users className="h-6 w-6" />,
      content: [
        "Partnering with local environmental organizations",
        "Organizing clean-up events",
        "Promoting sustainability at home and in the community",
      ],
    },
    {
      id: "measuring",
      title: "Measuring Impact",
      icon: <BarChart3 className="h-6 w-6" />,
      content: [
        "Monitoring energy and water usage",
        "Tracking recycling rates",
        "Evaluating student engagement and behavior changes",
      ],
    },
  ]

  const practiceDetails = [
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Energy Efficiency",
      description: "LED lighting, smart thermostats, and solar panels reduce energy consumption significantly.",
    },
    {
      icon: <Recycle className="h-5 w-5" />,
      title: "Waste Reduction",
      description: "Comprehensive recycling programs and composting systems minimize school waste.",
    },
    {
      icon: <Car className="h-5 w-5" />,
      title: "Green Transportation",
      description: "Encouraging walking, biking, and carpooling reduces carbon emissions.",
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: "Sustainable Infrastructure",
      description: "Green building materials and designs create healthier learning environments.",
    },
  ]

  const activities = [
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Creative Projects",
      description: "Art and writing contests that inspire environmental awareness and creativity.",
    },
    {
      icon: <FlaskConical className="h-5 w-5" />,
      title: "Science Innovations",
      description: "Science fairs showcasing eco-friendly innovations and sustainable solutions.",
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: "School Gardens",
      description: "Hands-on learning through organic gardening and food production.",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Awareness Campaigns",
      description: "Student-led initiatives to promote environmental consciousness.",
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
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Environmental Education</Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
                Environmental Sustainability in Schools
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive guide to implementing environmental sustainability practices in educational institutions
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 mb-12">
              <CardContent className="pt-0">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl mb-4">
                      Introduction to Environmental Sustainability
                    </h2>
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      Environmental sustainability refers to the responsible interaction with the environment to avoid
                      depletion or degradation of natural resources and allow for long-term environmental quality.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      In modern society, sustainability has become crucial as we face climate change, resource scarcity,
                      and environmental degradation. Schools play a vital role in addressing these challenges by
                      educating future generations and implementing sustainable practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Sections Overview */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-center mb-12">Key Areas of Focus</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.map((section, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-0">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {section.icon}
                        </div>
                        <h3 className="font-heading font-semibold text-lg">{section.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sustainable Practices Detail */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-center mb-12">Sustainable Practices in Detail</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {practiceDetails.map((practice, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="pt-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 text-accent">
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

            {/* Classroom Activities */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-center mb-12">Engaging Classroom Activities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {activities.map((activity, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                          {activity.icon}
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-2">{activity.title}</h3>
                          <p className="text-muted-foreground">{activity.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Community Impact */}
            <Card className="p-8 mb-12 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="pt-0">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl mb-4">Community Involvement</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Successful environmental sustainability in schools requires active community participation. Schools
                    can partner with local organizations, organize clean-up events, and promote sustainable practices
                    that extend beyond the classroom into homes and neighborhoods.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-primary hover:bg-primary/90">Learn About Community Programs</Button>
                    <Button variant="outline">View Success Stories</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Measuring Impact */}
            <Card className="p-8">
              <CardContent className="pt-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl mb-4">Measuring Impact and Success</h2>
                    <p className="text-foreground leading-relaxed mb-4">
                      To ensure the effectiveness of sustainability initiatives, schools must implement comprehensive
                      monitoring systems. This includes tracking energy and water usage, measuring recycling rates, and
                      evaluating changes in student behavior and engagement.
                    </p>
                    <p className="text-muted-foreground">
                      Regular assessment helps schools identify areas for improvement, celebrate successes, and
                      demonstrate the tangible benefits of their sustainability efforts to the broader community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                        "Maria Clara Oliveira",
                        "Guilherme Machado",
                        "Allan Nascimento",
                        "Giovana Kumbrevivius",
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

            {/* Conclusion CTA */}
            <div className="mt-16 text-center">
              <h3 className="font-heading font-bold text-2xl mb-4">Ready to Make a Difference?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Environmental sustainability in schools is not just about protecting the planet—it's about creating a
                better future through education, innovation, and community engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/importance"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Why It Matters
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
