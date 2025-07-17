"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
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
  const [showCVUpload, setShowCVUpload] = useState(false)

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

  const searchParams = useSearchParams();
  type ContactType = "cv" | "actionnariat" | "coaching" | null;
  const typeParam = searchParams.get("type");
  const type: ContactType =
    typeParam === "actionnariat" || typeParam === "coaching" || typeParam === "cv" ? typeParam : null;

  const typeConfigMap: Record<string, {
    title: string;
    intro?: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
  }> = {
    cv: {
      title: "Envoyez-nous un message",
      intro: undefined,
      subjectPlaceholder: "Candidature / Envoi de CV",
      messagePlaceholder: "Votre message",
    },
    actionnariat: {
      title: "Actionnariat & Participation",
      intro: "Vous êtes un dirigeant et souhaitez prendre une participation avec des partenaires financiers ? Écrivez-nous en toute confidentialité.",
      subjectPlaceholder: "Actionnariat / Prise de participation",
      messagePlaceholder: "Expliquez-nous votre projet ou votre besoin...",
    },
    coaching: {
      title: "Accompagnement & Coaching",
      intro: "Boostez votre carrière avec l'appui d'un professionnel en réussite dans ces métiers.",
      subjectPlaceholder: "Demande d'accompagnement / coaching",
      messagePlaceholder: "Décrivez votre besoin ou votre objectif...",
    },
    default: {
      title: "Envoyez-nous un message",
      intro: undefined,
      subjectPlaceholder: "Votre sujet",
      messagePlaceholder: "Votre message",
    }
  };

  const typeConfig = type ? typeConfigMap[type] : typeConfigMap.default;

  return (
    <section id="contact-form" className="py-20 bg-gray-50">
      <div ref={ref} className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">{typeConfig.title}</h2>
          {typeConfig.intro && (
            <p className="text-center text-gray-700 mb-8 text-base">{typeConfig.intro}</p>
          )}
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
                placeholder={typeConfig.subjectPlaceholder}
                className="pl-10"
                required
              />
            </div>
            <Textarea
              name="message"
              placeholder={typeConfig.messagePlaceholder}
              rows={6}
              required
            />
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="cv-checkbox"
                checked={showCVUpload}
                onChange={(e) => setShowCVUpload(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="cv-checkbox" className="text-sm font-medium text-gray-700">
                Joindre un CV (optionnel)
              </label>
            </div>
            {showCVUpload && (
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-1">CV (PDF, DOC, DOCX)</label>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
            )}
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
          </form>
        </div>
      </div>
    </section>
  )
}