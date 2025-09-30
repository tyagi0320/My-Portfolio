"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "I build projects with purpose and passion"
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      setTypingComplete(true)
    }
  }, [typedText])

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl mb-5 text-primary">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Harshit Tyagi</h1>
          <div className="h-12 mb-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground/80">
              {typedText}
              {!typingComplete && <span className="animate-pulse">|</span>}
            </h2>
          </div>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          A full-stack developer who enjoys turning ideas into clean, functional applications. 
          I especially love working on the frontend and making sure it talks effortlessly to the backend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <a className="flex" href="/Harshit_Tyagi_Resume.pdf" download={'Harshit_Tyagi_Resume.pdf'}><Download className="mr-2 h-4 w-4" /> Download Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

