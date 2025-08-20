import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Code, Heart, Users, Lightbulb } from "lucide-react"

export default function DevelopersPage() {
  const developers = [
    {
      name: "Otavio Emanoel de Lima",
      role: "Developer & Project Manager",
      bio: "Full-stack developer with a passion for coding and technology. Experienced in building scalable web applications and leading development teams.",
      skills: ["NextJS", "Node.js", "Flutter", "TypeScript", "Java", "Linux", "Git"],
      avatar: "/otavio.jpeg",
      social: {
        github: "https://github.com/Otavio-Emanoel",
        linkedin: "https://www.linkedin.com/in/otavio-emanoel-de-lima-1a694336a/",
        email: "otavioemanoel8a@gmail.com",
      },
    },
    {
      name: "Nicolas de Oliveira Compioni",
      role: "UI/UX Designer",
      bio: "Environmental advocate with expertise in creating intuitive, accessible designs that promote sustainability awareness and education.",
      skills: ["UI/UX Design", "Accessibility", "Environmental Design"],
      avatar: "/nicolas1.jpeg",
      social: {
        github: "#",
        linkedin: "#",
        email: "nicolas@wizardnews.com",
      },
    },
    {
      name: "Nicolas Leon",
      role: "Content Strategist & Research Specialist",
      bio: "Education researcher focused on sustainable school practices. Brings deep knowledge of environmental education and policy development.",
      skills: ["Content Strategy", "Educational Research", "Sustainability Policy", "Data Analysis"],
      avatar: "/male-researcher-portrait.png",
      social: {
        github: "#",
        linkedin: "#",
        email: "nicolasleon@wizardnews.com",
      },
    },
    {
      name: "Emanuel J. Nardes",
      role: "Frontend Developer",
      bio: "Frontend developer with a knack for creating engaging user experiences. Passionate about using technology to drive social change.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
      avatar: "/lucas.jpeg",
      social: {
        github: "#",
        linkedin: "#",
        email: "lucas@wizardnews.com",
      },
    },
  ]

  const projectStats = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Lines of Code",
      value: "15,000+",
      description: "Clean, maintainable code",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Schools Reached",
      value: "500+",
      description: "Educational institutions impacted",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Hours Dedicated",
      value: "1,200+",
      description: "Passionate development time",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Features Built",
      value: "25+",
      description: "Sustainability-focused tools",
    },
  ]

  const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Node.js", "Figma", "Git"]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-card to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Meet the Team</Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">Our Developers</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the passionate team behind Wizard News, dedicated to promoting sustainable education and
                environmental awareness through innovative technology
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 mb-16">
              <CardContent className="pt-0">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl mb-4">Our Mission</h2>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    We believe that technology can be a powerful force for environmental change. Our team is committed
                    to creating digital platforms that educate, inspire, and empower schools to adopt sustainable
                    practices.
                  </p>
                  <p className="text-muted-foreground">
                    Through Wizard News, we aim to bridge the gap between environmental awareness and practical
                    implementation in educational settings, fostering a generation of environmentally conscious
                    citizens.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Members */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-center mb-12">Meet Our Team</h2>
              <div className="space-y-8">
                {developers.map((developer, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-0">
                      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                        <div className="flex-shrink-0">
                          <img
                            src={developer.avatar || "/placeholder.svg"}
                            alt={developer.name}
                            className="w-24 h-24 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                            <div>
                              <h3 className="font-heading font-bold text-xl mb-1">{developer.name}</h3>
                              <p className="text-accent font-medium mb-2">{developer.role}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" asChild>
                                <a href={developer.social.github} aria-label="GitHub">
                                  <Github className="h-4 w-4" />
                                </a>
                              </Button>
                              <Button variant="outline" size="sm" asChild>
                                <a href={developer.social.linkedin} aria-label="LinkedIn">
                                  <Linkedin className="h-4 w-4" />
                                </a>
                              </Button>
                              <Button variant="outline" size="sm" asChild>
                                <a href={`mailto:${developer.social.email}`} aria-label="Email">
                                  <Mail className="h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4">{developer.bio}</p>
                          <div className="flex flex-wrap gap-2">
                            {developer.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Project Statistics */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-center mb-12">Project Impact</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectStats.map((stat, index) => (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="pt-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <h3 className="font-semibold mb-2">{stat.title}</h3>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <Card className="p-8 mb-16">
              <CardContent className="pt-0">
                <div className="text-center">
                  <h2 className="font-heading font-bold text-2xl mb-6">Technologies We Use</h2>
                  <p className="text-muted-foreground mb-6">
                    We leverage modern, sustainable technologies to build efficient and scalable solutions
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="pt-0">
                <div className="text-center">
                  <h2 className="font-heading font-bold text-2xl mb-4">Get In Touch</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Have questions about sustainable schools or want to collaborate on environmental education
                    initiatives? We'd love to hear from you!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-primary hover:bg-primary/90">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Us
                    </Button>
                    <Button variant="outline" >
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
