"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import Link from "next/link"
import { LinkedinIcon, GithubIcon } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setIsSubmitted(true)
        e.currentTarget.reset()
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        console.error("Failed to send message")
      }
    } catch (err) {
      console.error("An error occurred:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-foreground/70 mb-8">
                Feel free to reach out to me for any questions or opportunities.
              </p>

              <div className="space-y-6">
                <ContactInfo icon={<Mail />} label="Email" value="tharshit03@gmail.com" />
                <ContactInfo icon={<Phone />} label="Phone" value="+91 8860701316" />
                <ContactInfo icon={<MapPin />} label="Location" value="Delhi-NCR" />
                <ContactInfo
                  icon={<GithubIcon />}
                  label="GitHub"
                  value={
                    <Link
                      href="https://github.com/tyagi0320"
                      className="font-medium text-blue-600 hover:underline"
                      target="_blank"
                    >
                      github.com/tyagi0320
                    </Link>
                  }
                />
                <ContactInfo
                  icon={<LinkedinIcon />}
                  label="LinkedIn"
                  value={
                    <Link
                      href="https://www.linkedin.com/in/harshit-tyagi-412a0a31b"
                      className="font-medium text-blue-600 hover:underline"
                      target="_blank"
                    >
                      linkedin.com/in/harshit-tyagi-412a0a31b
                    </Link>
                  }
                />
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input name="name" placeholder="Your Name" required />
                  <Input name="email" type="email" placeholder="Your Email" required />
                  <Input name="subject" placeholder="Subject" required />
                  <Textarea name="message" placeholder="Your Message" rows={5} required />
                  <Button type="submit" className="w-full" disabled={isSubmitting || isSubmitted}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      "Message Sent!"
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode | string
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm text-foreground/60">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  )
}
