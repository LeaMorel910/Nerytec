"use client"

import { useState } from "react"
import { Send, User, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import React from "react"

export function ContactForm() {
  const { ref, isVisible } = useScrollAnimation()
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [currentFormIndex, setCurrentFormIndex] = useState(0)

  const formRef = React.useRef<HTMLFormElement>(null)

  // Liste de vos différents comptes Getform
  const getformEndpoints = [
    "https://getform.io/f/bvrynglb", // Compte 1 (actuel)
    "https://getform.io/f/xxxxxxxx", // Compte 2 (à créer)
    "https://getform.io/f/yyyyyyyy", // Compte 3 (à créer)
    "https://getform.io/f/zzzzzzzz", // Compte 4 (à créer)
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    let success = false
    let attempts = 0
    const maxAttempts = getformEndpoints.length

    // Essayer chaque endpoint jusqu'à ce qu'un fonctionne
    while (!success && attempts < maxAttempts) {
      try {
        const currentEndpoint = getformEndpoints[currentFormIndex]
        console.log(`Tentative avec le compte ${currentFormIndex + 1}`)

        const res = await fetch(currentEndpoint, {
          method: "POST",
          body: formData,
        })

        if (res.ok) {
          success = true
          setStatus("success")
          form.reset()
          console.log(`Succès avec le compte ${currentFormIndex + 1}`)
        } else {
          // Si quota atteint (429) ou erreur, passer au suivant
          console.log(`Échec avec le compte ${currentFormIndex + 1}, passage au suivant`)
          setCurrentFormIndex((prev) => (prev + 1) % getformEndpoints.length)
          attempts++
        }
      } catch (error) {
        console.log(`Erreur avec le compte ${currentFormIndex + 1}:`, error)
        setCurrentFormIndex((prev) => (prev + 1) % getformEndpoints.length)
        attempts++
      }
    }

    if (!success) {
      setStatus("error")
      console.log("Tous les comptes ont échoué")
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div ref={ref} className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Envoyez-nous un message</h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            autoComplete="off"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  className="pl-10"
                  required
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                name="subject"
                placeholder="Sujet"
                className="pl-10"
                required
              />
            </div>
            <Textarea
              name="message"
              placeholder="Votre message"
              rows={6}
              required
            />
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-1">CV (PDF, DOC, DOCX)</label>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                required
                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            {/* Honeypot anti-spam */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#0078BE] hover:bg-[#006bb0] transition-colors duration-200"
              disabled={status === "sending"}
            >
              <Send className="w-5 h-5 mr-2" />
              {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
            </Button>

            {status === "success" && (
              <p className="text-green-600 text-center font-semibold mt-2">
                Merci, votre message a bien été envoyé !
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center font-semibold mt-2">
                Une erreur est survenue. Merci de réessayer.
              </p>
            )}

            {/* Indicateur de debug (à retirer en production) */}
            {/* <p className="text-xs text-gray-500 text-center">
              Compte actuel : {currentFormIndex + 1}/{getformEndpoints.length}
            </p> */}
          </form>
        </div>
      </div>
    </section>
  )
}