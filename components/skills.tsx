"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Globe, BrainCircuit, SquarePlus, Infinity } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend")

  const skillCategories = [
    {
      id: "language",
      name: "Language",
      icon: <Code className="h-5 w-5" />,
      skills: [ "C++","JavaScript", "Python", "SQL", "Bash"],
    },
    {
      id: "webdev",
      name: "Web Dev",
      icon: <Globe className="h-5 w-5" />,
      skills: ["HTML/CSS", "React.js", "Node.js", "Flask", "Bootstrap", "Git/Github", "Figma"],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["MongoDB", "MySQL", "Firebase","PowerBI"],
    },
    {
      id: "ai-ml",
      name: "AI/ML",
      icon: <BrainCircuit className="h-5 w-5" />,
      skills: ["Pandas", "Numpy", "Scikit-Learn", "Tensorflow", "Matplotlib", "LangChain", "RAG"],
    },
    {
      id: "devops/cloud",
      name: "Devops/Cloud",
      icon: <Infinity className="h-5 w-5" />,
      skills: ["Linux", "Networking", "Terraform", "CI/CD", "Docker", "Kubernetes", "Prometheus", "Grafana", "AWS"],
    },
    {
      id: "other",
      name: "Other",
      icon: <SquarePlus className="h-5 w-5" />,
      skills: ["Problem Solving", "Collaboration", "Team Leadership", "Team Work"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>

          <Tabs defaultValue="language" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-6">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    {category.icon}
                    <span className="hidden md:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-colors"
                        >
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

