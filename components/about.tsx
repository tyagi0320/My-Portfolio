import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative max-w-sm mx-auto group">
              {/* Decorative Border Frame */}
              <div className="absolute inset-0 border-4 border-primary rounded-3xl transform translate-x-3 translate-y-3 z-0"></div>

              {/* Card */}
              <Card className="relative overflow-hidden rounded-3xl shadow-xl transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 z-10">
                <CardContent className="p-0">
                  <Image
                    src="/aboutimg.png?height=500&width=500"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="object-cover h-full w-full rounded-3xl"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                Hi! I'm Harshit — I craft intuitive front-end interfaces and seamlessly
                integrate them with powerful back-end systems.
              </p>
              <p>
                Having worked on several solo as well as team-based projects, I've found my
                favorite part of development — <strong className="text-primary">Collaboration</strong> and <strong className="text-primary">Problem-solving</strong>.
              </p>
              <p>
                Outside of coding, I’m usually into sports, self-growth books, and geo-politics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
