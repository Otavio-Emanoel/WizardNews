import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

export function FeaturedContent() {
  const featuredArticles = [
    {
      title: "What Makes a School Sustainable?",
      description: "Explore the key practices and principles that define sustainable educational institutions.",
      href: "/what-is-sustainable-school",
      image: "/sustainable-school.png",
    },
    {
      title: "Environmental Sustainability in Action",
      description: "Discover practical ways schools can implement environmental sustainability programs.",
      href: "/environmental-sustainability",
      image: "/school-garden-work.png",
    },
    {
      title: "Why Sustainable Schools Matter",
      description: "Understanding the importance of sustainable practices in educational environments.",
      href: "/importance",
      image: "/children-environment-learning.png",
    },
  ]

  const brazilianSchools = [
    {
      name: "Escola Municipal de Mogi das Cruzes",
      location: "São Paulo",
      description: "Leading example of sustainable practices in municipal education",
    },
    {
      name: "Colégio Estadual Erich Walter Heine",
      location: "Rio de Janeiro",
      description: "Innovative approaches to environmental education and sustainability",
    },
    {
      name: "Creche Municipal Hassis",
      location: "Florianópolis",
      description: "Early childhood education with focus on environmental awareness",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">Featured Content</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.description}</p>
                  <Link href={article.href}>
                    <Button variant="outline" className="w-full group bg-transparent">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Brazilian Schools Showcase */}
        <div>
          <h2 className="font-heading font-bold text-3xl text-center mb-12">Sustainable Schools in Brazil</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {brazilianSchools.map((school, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-0">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">{school.name}</h3>
                      <p className="text-sm text-accent font-medium">{school.location}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{school.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
