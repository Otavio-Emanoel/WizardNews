import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, School, Users, Lightbulb } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-card to-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary mb-6">
            Building Sustainable Schools
            <span className="block text-accent">for Tomorrow</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how schools around the world are implementing environmental sustainability practices to create
            better learning environments and prepare students for a greener future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Sustainable Practices
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Environmental Impact</h3>
              <p className="text-muted-foreground text-sm">Reducing carbon footprint through sustainable practices</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <School className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Educational Excellence</h3>
              <p className="text-muted-foreground text-sm">Creating inspiring learning environments for students</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Community Engagement</h3>
              <p className="text-muted-foreground text-sm">
                Involving families and communities in sustainability efforts
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">Implementing cutting-edge sustainable technologies</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
