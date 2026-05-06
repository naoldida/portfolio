"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Phone, Linkedin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { toast } from "sonner"
import Link from "next/link"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

type FormValues = z.infer<typeof formSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      // Create a unique access key at https://web3forms.com/ or use your own backend
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          ...data,
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Message sent successfully!", {
          description: "I'll get back to you as soon as possible.",
        })
        reset()
      } else {
        toast.error("Failed to send message.", {
          description: "Please try again later or contact me directly via email.",
        })
      }
    } catch (error) {
      toast.error("An error occurred.", {
        description: "Please check your internet connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Get In Touch
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I&apos;m currently looking for new opportunities and my inbox is
                always open. Whether you have a question, want to discuss a
                project, or just want to say hi, I&apos;ll do my best to get back to
                you!
              </p>

              <div className="space-y-4">
                <Link
                  href="mailto:naoldida@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-card border border-border group-hover:border-primary/50 transition-colors">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>naoldida@gmail.com</span>
                </Link>
                <Link
                  href="tel:0923589305"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-card border border-border group-hover:border-primary/50 transition-colors">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>0923589305</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/bayisa-dida-88360b3b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-card border border-border group-hover:border-primary/50 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </span>
                  <span>Bayisa Dida</span>
                </Link>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Field data-invalid={!!errors.name}>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    {...register("name")}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <FieldError>{errors.name.message}</FieldError>}
                </Field>

                <Field data-invalid={!!errors.email}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    {...register("email")}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <FieldError>{errors.email.message}</FieldError>}
                </Field>

                <Field data-invalid={!!errors.message}>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    {...register("message")}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <FieldError>{errors.message.message}</FieldError>}
                </Field>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
