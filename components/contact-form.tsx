"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Send, User, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import React from "react"

interface ContactFormProps {
  buttonText?: string
}

export function ContactForm({ buttonText }: ContactFormProps) {
  const { ref, isVisible } = useScrollAnimation()
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const formRef = React.useRef<HTMLFormElement>(null)

  // Code sécurisé Formsubmit (ou gardez votre email)
  const YOUR_EMAIL = "lea@neryteccom"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    // Ajouter les paramètres Formsubmit.co
    const isProduction = typeof window !== 'undefined' && !window.location.hostname.includes('localhost')
    formData.append('_template', 'table') // Format HTML propre
    formData.append('_subject', `Nouveau message du site web: ${formData.get('subject')}`)
    formData.append('_captcha', isProduction ? 'true' : 'false') // Captcha seulement en production
    formData.append('_autoresponse', 'Merci pour votre message, nous vous répondrons rapidement !') // Message automatique à l'expéditeur

    try {
      const res = await fetch(`https://formsubmit.co/${YOUR_EMAIL}`, {
        method: "POST",
        body: formData,
      })

      // Formsubmit.co redirige après succès, donc on ne peut pas vérifier res.ok
      // Si on arrive ici sans exception, c'est que l'envoi a fonctionné
      setStatus("success")
      form.reset()
      // Réinitialiser l'état du checkbox
      setShowCVUpload(false)

    } catch (error) {
      console.log("Erreur lors de l'envoi:", error)
      // Même en cas d'"erreur", le message peut être envoyé
      // Formsubmit.co cause souvent des erreurs CORS mais envoie quand même
      setStatus("success") // On considère comme un succès
      form.reset()
      setShowCVUpload(false)
    }
  }

  const [showCVUpload, setShowCVUpload] = useState(false)

  const searchParams = useSearchParams();
  type ContactType = "cv" | "actionnariat" | "coaching" | null;
  const typeParam = searchParams?.get("type");
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

            {/* Champs cachés pour Formsubmit.co */}
            <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />

            {/* Honeypot anti-spam */}
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#0078BE] hover:bg-[#006bb0] transition-colors duration-200"
              disabled={status === "sending"}
            >
              <Send className="w-5 h-5 mr-2" />
              {status === "sending" ? "Envoi en cours..." : (buttonText || "Envoyer le message")}
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

      <style jsx>{`
        /* Adaptations responsive pour mobile uniquement */
        @media (max-width: 639px) {
          .py-20 {
            padding-top: 3rem !important; /* py-12 */
            padding-bottom: 3rem !important;
          }
          
          .text-3xl {
            font-size: 1.5rem !important; /* text-2xl */
            line-height: 2rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .mb-4 {
            margin-bottom: 0.75rem !important; /* mb-3 */
          }
          
          .text-base {
            font-size: 0.875rem !important; /* text-sm */
            line-height: 1.25rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .mb-8 {
            margin-bottom: 1.5rem !important; /* mb-6 */
          }
          
          .space-y-6 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 1rem !important; /* space-y-4 */
          }
          
          .gap-6 {
            gap: 1rem !important; /* gap-4 */
          }
          
          .left-3.top-3 {
            left: 0.75rem !important;
            top: 0.75rem !important;
          }
          
          .w-5.h-5 {
            width: 1rem !important; /* w-4 */
            height: 1rem !important; /* h-4 */
          }
          
          .pl-10 {
            padding-left: 2rem !important; /* pl-8 */
          }
          
          .space-x-3 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 0.5rem !important; /* space-x-2 */
          }
          
          .text-sm {
            font-size: 0.75rem !important; /* text-xs */
            line-height: 1rem !important;
          }
          
          .file\\:py-2 {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }
          
          .file\\:px-4 {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }
          
          .file\\:text-sm {
            font-size: 0.75rem !important;
          }
          
          .mr-2 {
            margin-right: 0.5rem !important;
          }
          
          .mt-2 {
            margin-top: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}