"use client"
import { Phone, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

type RecruitCTAProps = {
  title?: string
  subtitle?: string
  emailCardTitle?: string
  emailCardText?: string
  contactCardTitle?: string
  contactCardText?: string
}

export function RecruitCTA({
  title,
  subtitle,
  emailCardTitle,
  emailCardText,
  contactCardTitle,
  contactCardText
}: RecruitCTAProps) {
  const { ref, isVisible } = useScrollAnimation()

  const handleEmailClick = () => {
    window.location.href = 'mailto:recrutement@nerytec.com'
  }

  return (
    <section className="py-16 md:py-20 bg-[#0078BE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title ?? "Prêt à démarrer votre recrutement ?"}
          </h2>
          <p className="text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto">
            {subtitle ?? "Contactez-nous dès aujourd'hui pour discuter de vos besoins en recrutement"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Email Card */}
            <Card
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group h-full"
              onClick={handleEmailClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleEmailClick()}
            >
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <Mail className="w-8 h-8 text-blue-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{emailCardTitle ?? "Écrivez-nous"}</h3>
                <p className="text-blue-100 text-sm">{emailCardText ?? "recrutement@nerytec.com"}</p>
              </CardContent>
            </Card>
            {/* Contact Form Card */}
            <Link href="/contact" className="block h-full">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <Phone className="w-8 h-8 text-blue-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2">{contactCardTitle ?? "Contactez-nous"}</h3>
                  <p className="text-blue-100 text-sm">{contactCardText ?? "Accéder au formulaire"}</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Adaptations responsive pour mobile uniquement */
        @media (max-width: 639px) {
          .py-16 {
            padding-top: 3rem !important; /* py-12 */
            padding-bottom: 3rem !important;
          }
          
          .text-3xl {
            font-size: 1.5rem !important; /* text-2xl */
            line-height: 2rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .mb-6 {
            margin-bottom: 1rem !important; /* mb-4 */
          }
          
          .text-xl {
            font-size: 1rem !important; /* text-base */
            line-height: 1.5rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .mb-8 {
            margin-bottom: 1.5rem !important; /* mb-6 */
          }
          
          .gap-6 {
            gap: 1rem !important; /* gap-4 */
          }
          
          .p-6 {
            padding: 1rem !important; /* p-4 */
          }
          
          .w-8.h-8 {
            width: 1.5rem !important; /* w-6 */
            height: 1.5rem !important; /* h-6 */
          }
          
          .mb-4 {
            margin-bottom: 0.75rem !important; /* mb-3 */
          }
          
          .text-lg {
            font-size: 1rem !important; /* text-base */
            line-height: 1.5rem !important;
          }
          
          .mb-2 {
            margin-bottom: 0.5rem !important;
          }
          
          .text-sm {
            font-size: 0.75rem !important; /* text-xs */
            line-height: 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}