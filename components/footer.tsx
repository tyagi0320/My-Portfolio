import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
         
          <p className="text-center text-foreground/60">© {currentYear} Harshit Tyagi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

