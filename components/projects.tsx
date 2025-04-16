"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useInView } from "framer-motion"
import { ExternalLink, Github, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl: string;
    githubUrl: string;
    category: string;
    year: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] =useState<Project | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio App",
      description:
        "A personal portfolio website displaying my projects and skills ",
      image: "/portfolio.png",
      tags: ["Next.js", "Tailwind-CSS","framer-motion"],
      demoUrl: "#",
      githubUrl: "#",
      category: "frontend",
      year: "2025",
    },
    {
      id: 2,
      title: "eBilling System",
      description:"A full-featured, desktop-based inventory and billing system built using Python and MySQL",
      image: "/eBilling.png",
      tags: ["Python", "tkinter", "MySQL", "FPDF"],
      demoUrl: "https://youtu.be/aam0XWC6-s0",  
      githubUrl:  "https://github.com/tyagi0320/eBilling-System",
      category: "fullstack",
      year: "2025",
    },
    {
      id: 3,
      title: "NeuroWell",
      description: "An AI-driven mental wellness platform designed to analyze stress levels using Deep Learning (ANN)",
      image: "/NeuroWell.png",
      tags: ["React.js", "Flask", "ANN"],
      demoUrl: "https://youtu.be/p68xmEoFS84",
      githubUrl: "https://github.com/tyagi0320/NeuroWell",
      category: "fullstack",
      year: "2025",
    },
    {
      id: 4,
      title: "WeatherApp",
      description: "A real time weather forecasting web-application",
      image: "/weather.png",
      tags: ["React.js", "Node.js","Bootstrap 5"],
      demoUrl: "https://youtu.be/NdPLatP4YL8",
      githubUrl: "https://github.com/tyagi0320/WeatherApp",
      category: "fullstack",
      year: "2024",
    },
    {
      id: 5,
      title: "Image Steganography",
      description: "A Python based application to hide/retrieve secret messages within images.",
      image: "/Steganography.png",
      tags: ["Python", "tkinter", "LSB-Encoding", "Encryption"],
      demoUrl: "https://youtu.be/GKoLxVFJ41c",
      githubUrl: "https://github.com/tyagi0320/Image-Steganography",
      category: "fullstack",
      year: "2024",
    },
    {
      id: 6,
      title: "E-Market",
      description: "A C++(OOPS) based grocery management store.",
      image: "/E-market.png",
      tags: ["C++", "OOPS", "Algorithms"],
      demoUrl: "https://youtu.be/YiynCq_oqmc",
      githubUrl: "https://github.com/tyagi0320/E-Market",
      category: "backend",
      year: "2023",
    },
  ]

  const filters = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="text-primary">Projects</span>
            </h2>

            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="relative" ref={containerRef}>
            {/* DNA Backbone */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 transform -translate-x-1/2 z-0"></div>

            {/* DNA Projects Helix */}
            <div className="relative z-10">
              {filteredProjects.map((project, index) => (
                <ProjectNode
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-foreground/80">{selectedProject.description}</p>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Button asChild size="sm">
                  <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> Source Code
                  </a>
                </Button>
              </div>
              <DialogClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

function ProjectNode({project, index, onSelect}: { project: Project, index: number, onSelect: () => void }) {
  const isEven = index % 2 === 0
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const connectionPoints = [
    { top: "25%", left: isEven ? "auto" : "50%", right: isEven ? "50%" : "auto" },
    { top: "50%", left: isEven ? "auto" : "50%", right: isEven ? "50%" : "auto" },
    { top: "75%", left: isEven ? "auto" : "50%", right: isEven ? "50%" : "auto" },
  ]

  return (
    <div className="relative mb-32 md:mb-40 last:mb-0">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`relative z-10 flex ${isEven ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"} max-w-full md:max-w-[45%]`}
      >
        <div className={`bg-card rounded-xl overflow-hidden border shadow-md hover:shadow-lg transition-shadow w-full`}>
          {/* Year Badge */}
          <div
            className={`absolute top-4 ${isEven ? "right-4" : "left-4"} bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium z-20`}
          >
            {project.year}
          </div>

          <div className="relative aspect-video">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button onClick={onSelect}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          className={`absolute top-1/2 ${isEven ? "right-0 translate-x-full" : "left-0 -translate-x-full"} h-0.5 w-[calc(50vw-50%-1rem)] md:w-[calc(5%+1rem)] bg-primary/50 transform -translate-y-1/2 hidden md:block`}
        ></div>
      </motion.div>

      {connectionPoints.map((point, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
          className="absolute left-1/2 w-8 h-2 bg-primary/30 rounded-full transform -translate-x-1/2 hidden md:block"
          style={{
            top: point.top,
            width: i % 2 === 0 ? "3rem" : "2rem",
            transform: `translateX(${i % 2 === 0 ? "-60%" : "-40%"})`,
            opacity: 0.5 + i * 0.2,
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
      />
    </div>
  )
}

