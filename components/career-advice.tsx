"use client"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import React from "react"
import { motion, AnimatePresence, easeOut } from "framer-motion"
import Link from "next/link"

export function Offres() {
  const { ref, isVisible } = useScrollAnimation()
  const [selectedCategory, setSelectedCategory] = React.useState('management')

  const categories = [
    {
      id: 'management',
      label: 'Management/Direction Commercial (H/F)',
      jobs: [
        {
          title: 'Directeur commercial',
          description: "Définissez et pilotez la stratégie commerciale, managez les équipes de vente et développez le chiffre d'affaires de manière durable."
        },
        {
          title: 'Global Account Manager',
          description: "Gérez des comptes stratégiques internationaux, développez des partenariats durables et maximisez la valeur client."
        },
        {
          title: 'Branch Manager',
          description: "Dirigez une agence locale, animez les équipes commerciales et assurez le développement du territoire."
        },
        {
          title: 'Account Executive',
          description: "Développez et gérez un portefeuille clients, identifiez de nouvelles opportunités et atteignez les objectifs de vente."
        },
        {
          title: 'Business manager',
          description: "Pilotez le développement commercial, gérez des portefeuilles clients stratégiques et accompagnez la croissance."
        }
      ]
    },
    {
      id: 'general',
      label: 'Direction Générale (H/F)',
      jobs: [
        {
          title: 'Directeur Général',
          description: "Prenez la direction générale d'une structure ambitieuse, définissez la stratégie globale et pilotez la performance."
        },
        {
          title: 'Directeur des opérations',
          description: "Optimisez les processus opérationnels, coordonnez les équipes et garantissez l'excellence opérationnelle."
        },
        {
          title: 'Directeur Administratif et financier',
          description: "Pilotez la gestion financière, supervisez les aspects administratifs et sécurisez la performance économique."
        }
      ]
    },
    {
      id: 'technique',
      label: 'Direction Technique – opérationnelle (H/F)',
      jobs: [
        {
          title: 'Directeur des engagements',
          description: "Supervisez les contrats clients, gérez les risques contractuels et assurez la rentabilité des projets."
        },
        {
          title: 'Directeur de projet',
          description: "Pilotez des projets stratégiques, coordonnez les parties prenantes et assurez la réussite des objectifs."
        },
        {
          title: 'Bid Manager',
          description: "Gérez les réponses aux appels d'offres, élaborez des propositions gagnantes et optimisez les chances de succès."
        },
        {
          title: 'Practice Manager',
          description: "Développez l'expertise métier, animez les équipes techniques et portez l'innovation dans votre domaine."
        },
        {
          title: 'Directeur du delivery',
          description: "Supervisez la livraison des projets, coordonnez les équipes et garantissez la satisfaction client."
        }
      ]
    },
    {
      id: 'rh',
      label: 'Ressources Humaines (H/F)',
      jobs: [
        {
          title: 'Directeur des Ressources Humaines',
          description: "Définissez la politique RH, pilotez les projets stratégiques et accompagnez la transformation de l'entreprise."
        },
        {
          title: 'Responsable des Ressources Humaines',
          description: "Gérez les ressources humaines, accompagnez les collaborateurs et veillez au respect des obligations sociales."
        },
        {
          title: 'Chargé de recrutement',
          description: "Élaborez et pilotez la stratégie de recrutement, attirez les meilleurs talents et accompagnez la croissance."
        },
        {
          title: 'Resource manager',
          description: "Optimisez l'allocation des ressources, gérez les compétences et assurez l'adéquation besoins/talents."
        }
      ]
    }
  ]

  const currentCategory = categories.find(cat => cat.id === selectedCategory)
  const offres = currentCategory ? currentCategory.jobs : []

  // Animations très simples et propres
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.08
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: easeOut
      }
    }
  }

  const Option1 = () => (
    <motion.div
      key={selectedCategory}
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {offres.map((offre, index) => (
        <motion.div
          key={`${selectedCategory}-${index}`}
          variants={itemVariants}
          className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
        >
          <div className="flex-1 flex flex-col justify-between">
            <div className="p-8">
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3" style={{ fontSize: '20px', lineHeight: '28px' }}>
                  {offre.title}
                </h3>
                <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              </div>
              <p className="text-gray-900 leading-relaxed text-left">
                {offre.description}
              </p>
            </div>
          </div>
          <div className="h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.div>
      ))}
    </motion.div>
  )

  return (
    <section id="contact-form" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nos Opportunités Exclusives
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez des opportunités uniques pour booster votre carrière
          </p>

          {/* Sélecteur de catégories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(option => (
              <button
                key={option.id}
                onClick={() => setSelectedCategory(option.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === option.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <Option1 />
        {/* Bloc de boutons d'action */}
        <div className="mt-16 flex flex-col md:flex-row gap-6 items-stretch justify-center">
          {/* Bouton 1 */}
          <Link
            href="/contact?type=cv#contact-form"
            className="flex-1 group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col items-center justify-center px-8 py-6 text-center cursor-pointer hover:bg-blue-50"
          >
            <span className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">Envoyer votre CV</span>
          </Link>
          {/* Bouton 2 */}
          <Link
            href="/contact?type=actionnariat#contact-form"
            className="flex-1 group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col items-center justify-center px-8 py-6 text-center cursor-pointer hover:bg-blue-50"
          >
            <span className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">Actionnariat & Participation</span>
            <span className="text-gray-600 text-sm mt-2">Vous êtes un dirigeant et souhaitez prendre une participation avec des partenaires financiers ? Écrivez-nous en toute confidentialité</span>
          </Link>
          {/* Bouton 3 */}
          <Link
            href="/contact?type=coaching#contact-form"
            className="flex-1 group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col items-center justify-center px-8 py-6 text-center cursor-pointer hover:bg-blue-50"
          >
            <span className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">Accompagnement & Coaching</span>
            <span className="text-gray-600 text-sm mt-2">Boostez votre carrière avec l'appui d'un professionnel en réussite dans ces métiers</span>
          </Link>
        </div>
      </div>
    </section>
  )
}