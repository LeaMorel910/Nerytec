// sanity/schema.ts (ou sanity/schema/index.ts)
import { type SchemaTypeDefinition } from 'sanity'

const homepage = {
  name: 'homepage',
  title: '🏠 Page d\'accueil NERYTEC',
  type: 'document',
  initialValue: {
    titre_carte_candidat: 'Vous êtes candidat ?',
    description_carte_candidat: "Découvrez nos opportunités exclusives et bénéficiez d'un accompagnement personnalisé dans votre recherche d'emploi.",
    texte_bouton_candidat: 'Voir les opportunités',
    titre_carte_recruteur: 'Vous recrutez ?',
    description_carte_recruteur: "Confiez-nous vos recrutements et accédez à notre réseau de talents.",
    texte_bouton_recruteur: 'Nous contacter'
  },
  fields: [
    // Hero Section
    {
      name: 'heroTitle',
      title: '🚀 Titre principal Hero',
      type: 'string',
      description: 'Le gros titre en haut de votre page (ex: NERYTEC CONSULTING)',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'heroSubtitle',
      title: '📝 Sous-titre Hero',
      type: 'string',
      description: 'Le texte sous le titre principal (ex: Une expertise reconnue dans le secteur du conseil – ESN & SCT)'
    },
    {
      name: 'heroDescription',
      title: '💬 Description Hero',
      type: 'string',
      description: 'Description sous le sous-titre (ex: Cabinet de recrutement nouvelle génération)'
    },
    {
      name: 'heroButton1Text',
      title: '🔘 Texte bouton 1 Hero',
      type: 'string',
      description: 'Texte du premier bouton (ex: Je veux un job de rêve !)'
    },

    {
      name: 'heroButton2Text',
      title: '🔘 Texte bouton 2 Hero',
      type: 'string',
      description: 'Texte du deuxième bouton (ex: Je veux une pépite !)'
    },

    {
      name: 'heroTrustIndicators',
      title: '✅ Indicateurs de confiance Hero',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Texte',
              type: 'string',
              description: 'Ex: 500+ recrutement réussis'
            }
          ],
          preview: {
            select: {
              title: 'text'
            }
          }
        }
      ],
      description: 'Les indicateurs de confiance affichés sous les boutons'
    },

    // Services Section
    {
      name: 'servicesTitle',
      title: '💼 Titre section Services',
      type: 'string',
      description: 'Titre de la section services (ex: Nerytec Consulting)'
    },
    {
      name: 'servicesSubtitle',
      title: '📋 Sous-titre section Services',
      type: 'text',
      rows: 2,
      description: 'Description de la section services'
    },
    {
      name: 'services',
      title: '🛠️ Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Titre du service',
              type: 'string',
              description: 'Ex: Management/ Direction Commercial (H/F)'
            },
            {
              name: 'features',
              title: 'Fonctions',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Liste des fonctions (ex: Directeur commercial, Global Account Manager...)'
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'features'
            },
            prepare({ title, features }: { title: string, features: string[] }) {
              return {
                title: title,
                subtitle: features ? `${features.length} fonctions` : 'Aucune fonction'
              }
            }
          }
        }
      ],
      description: 'Les services proposés par NERYTEC'
    },
    {
      name: 'servicesButtonText',
      title: '🔘 Texte bouton Services',
      type: 'string',
      description: 'Texte du bouton de la section services'
    },


    // About Section
    {
      name: 'aboutTitle',
      title: '❓ Titre section About',
      type: 'string',
      description: 'Titre de la section about (ex: Pourquoi choisir NERYTEC ?)'
    },
    {
      name: 'aboutDescription',
      title: '📄 Description section About',
      type: 'text',
      rows: 3,
      description: 'Description de la section about'
    },
    {
      name: 'aboutValues',
      title: '💎 Valeurs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Titre de la valeur',
              type: 'string',
              description: 'Ex: Réactivité'
            },
            {
              name: 'description',
              title: 'Description de la valeur',
              type: 'text',
              rows: 2,
              description: 'Description de la valeur'
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description'
            }
          }
        }
      ],
      description: 'Les valeurs de NERYTEC'
    },
    {
      name: 'aboutButtonText',
      title: '🔘 Texte bouton About',
      type: 'string',
      description: 'Texte du bouton de la section about'
    },

    {
      name: 'aboutExperience',
      title: '📊 Expérience',
      type: 'object',
      fields: [
        {
          name: 'years',
          title: 'Années d\'expérience',
          type: 'string',
          description: 'Ex: 20+'
        },
        {
          name: 'description',
          title: 'Description expérience',
          type: 'string',
          description: 'Ex: Dans le recrutement spécialisé'
        },
        {
          name: 'esnPercentage',
          title: 'Pourcentage ESN',
          type: 'string',
          description: 'Ex: 100%'
        },
        {
          name: 'satisfactionPercentage',
          title: 'Pourcentage satisfaction',
          type: 'string',
          description: 'Ex: 96%'
        }
      ]
    },

    // Stats Section
    {
      name: 'statsTitle',
      title: '📊 Titre section Statistiques',
      type: 'string',
      description: 'Ex: Nos réalisations - Quelques Chiffres'
    },
    {
      name: 'stats',
      title: '📊 Statistiques',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Nombre',
              type: 'string',
              description: 'Ex: 500+'
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Ex: Placements réussis'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              description: 'Ex: Candidats placés avec succès'
            }
          ],
          preview: {
            select: {
              title: 'number',
              subtitle: 'label'
            }
          }
        }
      ],
      description: 'Les statistiques à afficher'
    },

    // Testimonials Section
    {
      name: 'testimonialsTitle',
      title: '💬 Titre section Témoignages',
      type: 'string',
      description: 'Titre de la section témoignages'
    },
    {
      name: 'testimonialsSubtitle',
      title: '📝 Sous-titre section Témoignages',
      type: 'text',
      rows: 2,
      description: 'Sous-titre de la section témoignages'
    },
    {
      name: 'testimonials',
      title: '💬 Témoignages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nom',
              type: 'string',
              description: 'Nom de la personne'
            },
            {
              name: 'role',
              title: 'Rôle',
              type: 'string',
              description: 'Rôle de la personne'
            },
            {
              name: 'company',
              title: 'Entreprise',
              type: 'string',
              description: 'Entreprise de la personne'
            },
            {
              name: 'content',
              title: 'Témoignage',
              type: 'text',
              rows: 3,
              description: 'Contenu du témoignage'
            },
            {
              name: 'rating',
              title: 'Note',
              type: 'number',
              description: 'Note sur 5 (ex: 5)',
              validation: (Rule: any) => Rule.min(1).max(5)
            }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'company',
              rating: 'rating'
            },
            prepare({ name, company, rating }: { name: string, company: string, rating: number }) {
              return {
                title: name,
                subtitle: `${company} - ${rating}/5`
              }
            }
          }
        }
      ],
      description: 'Les témoignages clients et candidats'
    },

    // CTA Section (titre/description + cartes Candidat/Recruteur)
    {
      name: 'ctaTitle',
      title: '🎯 Titre section CTA',
      type: 'string',
      description: 'Titre de la section CTA'
    },
    {
      name: 'ctaDescription',
      title: '📝 Description section CTA',
      type: 'text',
      rows: 3,
      description: 'Description de la section CTA'
    },

    // CTA Section (cartes Candidat/Recruteur)
    // Champs carte Candidat
    {
      name: 'titre_carte_candidat',
      title: '👤 Titre carte candidat',
      type: 'string',
      description: 'Titre de la carte Candidat'
    },
    {
      name: 'description_carte_candidat',
      title: '👤 Description carte candidat',
      type: 'text',
      rows: 3,
      description: 'Description de la carte Candidat'
    },
    {
      name: 'texte_bouton_candidat',
      title: '👤 Texte bouton candidat',
      type: 'string',
      description: 'Texte du bouton de la carte Candidat'
    },
    // Champs carte Recruteur
    {
      name: 'titre_carte_recruteur',
      title: '🏢 Titre carte recruteur',
      type: 'string',
      description: 'Titre de la carte Recruteur'
    },
    {
      name: 'description_carte_recruteur',
      title: '🏢 Description carte recruteur',
      type: 'text',
      rows: 3,
      description: 'Description de la carte Recruteur'
    },
    {
      name: 'texte_bouton_recruteur',
      title: '🏢 Texte bouton recruteur',
      type: 'string',
      description: 'Texte du bouton de la carte Recruteur'
    }
  ],
  preview: {
    select: {
      heroTitle: 'heroTitle'
    },
    prepare(value: Record<string, any>) {
      return {
        title: value.heroTitle || 'Page d\'accueil',
        subtitle: '🏠 Contenu principal du site'
      }
    }
  }
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage,
    {
      name: 'about',
      title: '📘 Découvrir NERYTEC',
      type: 'document',
      fields: [
        // Hero
        {
          name: 'heroTitle',
          title: '🏷️ Titre Hero',
          type: 'string',
          validation: (Rule: any) => Rule.required()
        },
        {
          name: 'heroSubtitle',
          title: '📝 Sous-titre Hero',
          type: 'string'
        },
        {
          name: 'heroPills',
          title: '🔖 Badges sous le Hero',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Ex: Expertise humaine, Approche personnalisée, Résultats prouvés'
        },

        // Timeline header
        {
          name: 'timelineTitle',
          title: '🕒 Titre section Parcours',
          type: 'string'
        },
        {
          name: 'timelineSubtitle',
          title: '🕒 Sous-titre section Parcours',
          type: 'string'
        },
        {
          name: 'timelineEvents',
          title: '📜 Événements du parcours',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'year', title: 'Année', type: 'string' },
                { name: 'title', title: 'Titre', type: 'string' },
                { name: 'description', title: 'Description', type: 'text', rows: 3 },
              ],
              preview: {
                select: { title: 'title', subtitle: 'year' }
              }
            }
          ]
        },

        // Values
        {
          name: 'valuesTitle',
          title: '💎 Titre section Pourquoi nous choisir',
          type: 'string'
        },
        {
          name: 'valuesDescription',
          title: '💬 Description section Pourquoi',
          type: 'text',
          rows: 3
        },
        {
          name: 'values',
          title: '💎 Valeurs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Titre', type: 'string' },
                { name: 'description', title: 'Description', type: 'text', rows: 3 },
              ],
              preview: {
                select: { title: 'title', subtitle: 'description' }
              }
            }
          ]
        },
      ],
      preview: {
        select: { heroTitle: 'heroTitle' },
        prepare(value: Record<string, any>) {
          return {
            title: value.heroTitle || 'Découvrir NERYTEC',
            subtitle: '📘 Page À propos'
          }
        }
      }
    },
    {
      name: 'jobs',
      title: '💼 Candidats / Jobs',
      type: 'document',
      fields: [
        // Hero
        {
          name: 'heroTitle',
          title: '🏷️ Titre Hero',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
          initialValue: 'Vous cherchez un nouveau job ?'
        },
        {
          name: 'heroPills',
          title: '🔖 Badges sous le Hero',
          type: 'array',
          of: [{ type: 'string' }],
          initialValue: [
            'Notre processus',
            'Nos opportunités exclusives',
            'Accompagnement individuel personnalisé',
            "Opportunités d'actionnariat et de prise de participation",
            'Nous écrire en toute discrétion'
          ]
        },
        {
          name: 'heroButtonLabel',
          title: '🔘 Texte du bouton Hero',
          type: 'string',
          initialValue: 'Nous écrire en toute discrétion'
        },


        // Processus
        {
          name: 'processTitle',
          title: '🧭 Titre section Processus',
          type: 'string',
          initialValue: 'Notre Processus'
        },
        {
          name: 'processSubtitle',
          title: '🧭 Sous-titre section Processus',
          type: 'string',
          initialValue: 'Comment nous vous accompagnons vers votre nouveau poste'
        },
        {
          name: 'processSteps',
          title: '🧩 Étapes du processus',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'step', title: 'Étape', type: 'number' },
                { name: 'title', title: 'Titre', type: 'string' },
                { name: 'description', title: 'Description', type: 'text', rows: 3 },
              ],
              preview: {
                select: { title: 'title', subtitle: 'step' }
              }
            }
          ],
          initialValue: [
            { step: 1, title: 'Entretien Conseil', description: 'Analyse de votre parcours, vos aspirations et profilage de vos besoins/attentes' },
            { step: 2, title: 'Recherche & Matching', description: 'Mapping, recherche multi-sources dans notre réseau de 20+ ans et notre base de données ESN/SCT' },
            { step: 3, title: 'Présentation & Suivi', description: 'Présentation au client, préparation aux entretiens, plan d\'action personnalisé' },
            { step: 4, title: 'Intégration', description: 'Suivi post-embauche, appels réguliers, déjeuners de suivi pour assurer votre réussite' }
          ]
        },

        // Opportunités
        {
          name: 'opportunitiesTitle',
          title: '🚀 Titre section Opportunités',
          type: 'string',
          initialValue: 'Nos Opportunités Exclusives'
        },
        {
          name: 'opportunitiesSubtitle',
          title: '🚀 Sous-titre section Opportunités',
          type: 'string',
          initialValue: 'Découvrez des opportunités uniques pour booster votre carrière'
        },
        {
          name: 'opportunities',
          title: '🎯 Opportunités',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'category', title: 'Catégorie', type: 'string' },
                { name: 'title', title: 'Intitulé', type: 'string' },
                { name: 'description', title: 'Description', type: 'text', rows: 3 },
              ],
              preview: {
                select: { title: 'title', subtitle: 'category' }
              }
            }
          ],
          initialValue: [
            { category: 'Management/Direction Commercial (H/F)', title: 'Directeur commercial', description: "Définissez et pilotez la stratégie commerciale, managez les équipes de vente et développez le chiffre d'affaires de manière durable." },
            { category: 'Management/Direction Commercial (H/F)', title: 'Global Account Manager', description: 'Gérez des comptes stratégiques internationaux, développez des partenariats durables et maximisez la valeur client.' },
            { category: 'Management/Direction Commercial (H/F)', title: 'Branch Manager', description: 'Dirigez une agence locale, animez les équipes commerciales et assurez le développement du territoire.' },
            { category: 'Management/Direction Commercial (H/F)', title: 'Account Executive', description: 'Développez et gérez un portefeuille clients, identifiez de nouvelles opportunités et atteignez les objectifs de vente.' },
            { category: 'Management/Direction Commercial (H/F)', title: 'Business manager', description: 'Pilotez le développement commercial, gérez des portefeuilles clients stratégiques et accompagnez la croissance.' },
            { category: 'Direction Générale (H/F)', title: 'Directeur Général', description: 'Prenez la direction générale d\'une structure ambitieuse, définissez la stratégie globale et pilotez la performance.' },
            { category: 'Direction Générale (H/F)', title: 'Directeur des opérations', description: 'Optimisez les processus opérationnels, coordonnez les équipes et garantissez l\'excellence opérationnelle.' },
            { category: 'Direction Générale (H/F)', title: 'Directeur Administratif et financier', description: 'Pilotez la gestion financière, supervisez les aspects administratifs et sécurisez la performance économique.' },
            { category: 'Direction Générale (H/F)', title: 'Directeur des engagements', description: 'Supervisez les contrats clients, gérez les risques contractuels et assurez la rentabilité des projets.' },
            { category: 'Direction Générale (H/F)', title: 'Directeur de projet', description: 'Pilotez des projets stratégiques, coordonnez les parties prenantes et assurez la réussite des objectifs.' },
            { category: 'Direction Générale (H/F)', title: 'Bid Manager', description: 'Gérez les réponses aux appels d\'offres, élaborez des propositions gagnantes et optimisez les chances de succès.' },
            { category: 'Direction Générale (H/F)', title: 'Practice Manager', description: 'Développez l\'expertise métier, animez les équipes techniques et portez l\'innovation dans votre domaine.' },
            { category: 'Direction Générale (H/F)', title: 'Directeur du delivery', description: 'Supervisez la livraison des projets, coordonnez les équipes et garantissez la satisfaction client.' },
            { category: 'Ressources Humaines (H/F)', title: 'Directeur des Ressources Humaines', description: 'Définissez la politique RH, pilotez les projets stratégiques et accompagnez la transformation de l\'entreprise.' },
            { category: 'Ressources Humaines (H/F)', title: 'Responsable des Ressources Humaines', description: 'Gérez les ressources humaines, accompagnez les collaborateurs et veillez au respect des obligations sociales.' },
            { category: 'Ressources Humaines (H/F)', title: 'Chargé de recrutement', description: 'Élaborez et pilotez la stratégie de recrutement, attirez les meilleurs talents et accompagnez la croissance.' },
            { category: 'Ressources Humaines (H/F)', title: 'Resource manager', description: 'Optimisez l\'allocation des ressources, gérez les compétences et assurez l\'adéquation besoins/talents.' }
          ]
        },

        // CTAs secondaires
        {
          name: 'secondaryCtas',
          title: '🧲 Blocs d\'accroche',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Titre', type: 'string' },
                { name: 'description', title: 'Description', type: 'text', rows: 3 },
                { name: 'buttonText', title: 'Texte du bouton', type: 'string' },
                { name: 'link', title: 'Lien', type: 'url' },
              ],
              preview: { select: { title: 'title' } }
            }
          ],
          initialValue: [
            { title: 'Actionnariat & Participation', description: 'Vous êtes un dirigeant et souhaitez prendre une participation avec des partenaires financiers ? Écrivez-nous en toute confidentialité', buttonText: 'Nous écrire en toute confidentialité' },
            { title: 'Accompagnement & Coaching', description: 'Boostez votre carrière avec l\'appui d\'un professionnel en réussite dans ces métiers', buttonText: 'Envoyer votre CV' }
          ]
        },

        // FAQ
        {
          name: 'faqTitle',
          title: '❓ Titre section FAQ',
          type: 'string',
          initialValue: 'Questions Fréquentes'
        },
        {
          name: 'faqSubtitle',
          title: '❓ Sous-titre section FAQ',
          type: 'string',
          initialValue: 'Tout ce que vous devez savoir sur notre processus'
        },
        {
          name: 'faqs',
          title: '❓ FAQ',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'question', title: 'Question', type: 'string' },
                { name: 'answer', title: 'Réponse', type: 'text', rows: 5 },
              ],
              preview: { select: { title: 'question' } }
            }
          ],
          initialValue: [
            { question: 'Combien de temps dure votre processus ?', answer: "En moyenne, notre processus dure entre 2 à 4 semaines, de l'entretien initial à la signature du contrat." },
            { question: 'Quels types de postes proposez-vous ?', answer: "Nous sommes spécialisés dans les fonctions suivantes : - Avant-vente et Delivery - Sales et fonctions managériales - Postes de direction - Postes d'entrepreneurs. Nous avons accompagné avec succès des groupes et des dirigeants dans des enjeux financiers très importants. Nous sommes également en mesure de répondre à des besoins sur des fonctions de direction technique." },
            { question: 'Travaillez-vous avec des freelances ?', answer: "À ce jour, le marché français n'est pas demandeur de managers dirigeants sales en mode freelance, en tout cas pas à un niveau industriel. Contrairement au marché des experts techniques ou experts métier qui voit sa population freelance s'accroître." },
            { question: 'Quelles sont vos zones géographiques ?', answer: 'France : Aix-en-Provence, Bordeaux, Brest, Clermont-Ferrand, Lille, Lyon, Marseille, Montpellier, Nantes, Paris, Pau, Rennes, Rouen, Sophia Antipolis, Strasbourg, Toulouse, Cherbourg. International : Pays Européens : Allemagne, Belgique, Espagne, Italie, Royaume-Uni (UK), Suède, Suisse, Canada, Colombie, Émirats Arabes Unis, Singapour' },
            { question: 'Comment garantissez-vous la confidentialité ?', answer: 'Nous avons signé une charte d\'engagement de confidentialité avec tous nos partenaires.' },
            { question: 'Quels sont vos critères de sélection ?', answer: "L'Expérience en ESN/SCT - l'Expérience en milieu industriel sur des fonctions de consultants de managers ou des fonctions Sales. Nos clients nous demandent que les candidats soient de Formation Ecole de commerce - Ecole d'ingénieur." }
          ]
        },

        // Statistiques
        {
          name: 'stats',
          title: '📊 Statistiques',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'number', title: 'Nombre', type: 'string' },
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'description', title: 'Description', type: 'string' },
              ],
              preview: { select: { title: 'number', subtitle: 'label' } }
            }
          ],
          initialValue: [
            { number: '20+', label: "Années d'expertise", description: '' },
            { number: '500+', label: 'Placements réussis', description: '' },
            { number: '96%', label: 'Taux de satisfaction', description: '' }
          ]
        },

        // CTA final
        {
          name: 'finalCtaTitle',
          title: '🎯 Titre CTA final',
          type: 'string',
          initialValue: 'Discutons de votre projet'
        },
        {
          name: 'finalCtaNote',
          title: '🎉 Note / Badge',
          type: 'string',
          initialValue: "🎉 Rappel : 500€ offerts quand nous vous trouvons votre job de rêve ! En chèque cadeau de votre choix - conditions fournies sur demande"
        }
      ],
      preview: {
        select: { heroTitle: 'heroTitle' },
        prepare(value: Record<string, any>) {
          return {
            title: value.heroTitle || 'Page Jobs',
            subtitle: '💼 Page candidats'
          }
        }
      }
    },
    {
      name: 'recruit',
      title: '🏢 Recruteurs / Recruit',
      type: 'document',
      fields: [
        // Hero
        {
          name: 'heroTitle',
          title: '🏷️ Titre Hero',
          type: 'string',
          initialValue: 'Vous recrutez'
        },
        {
          name: 'heroSubtitle',
          title: '📝 Sous-titre Hero',
          type: 'text',
          rows: 2,
          initialValue: 'Confiez-nous vos recrutements et accédez à notre réseau de talents qualifiés'
        },
        {
          name: 'heroPills',
          title: '🔖 Badges sous le Hero',
          type: 'array',
          of: [{ type: 'string' }],
          initialValue: [
            'Réseau qualifié',
            'Matching prédictif',
            'Accompagnement sur-mesure'
          ]
        },

        // Processus
        {
          name: 'processTitle',
          title: '🧭 Titre section Processus',
          type: 'string',
          initialValue: 'Notre processus'
        },
        {
          name: 'processSubtitle',
          title: '🧭 Sous-titre section Processus',
          type: 'string',
          initialValue: 'Une méthode éprouvée pour vos recrutements'
        },
        {
          name: 'processSteps',
          title: '🧩 Étapes du processus',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'step', title: 'Numéro étape', type: 'string' },
                { name: 'title', title: 'Titre', type: 'string' },
                { name: 'description', title: 'Description', type: 'text', rows: 3 },
              ],
              preview: {
                select: { title: 'title', subtitle: 'step' }
              }
            }
          ],
          initialValue: [
            { step: '01', title: 'Analyse du besoin', description: 'Nous analysons en détail votre besoin et définissons le profil recherché' },
            { step: '02', title: 'Sourcing ciblé', description: 'Recherche active dans notre réseau et approche directe des meilleurs profils' },
            { step: '03', title: 'Présélection', description: 'Entretiens approfondis et évaluation des compétences techniques et humaines' },
            { step: '04', title: 'Présentation', description: 'Présentation des candidats présélectionnés avec rapport détaillé' }
          ]
        },

        // Services
        {
          name: 'servicesTitle',
          title: '💼 Titre section Services',
          type: 'string',
          initialValue: 'Nos services'
        },
        {
          name: 'servicesSubtitle',
          title: '💼 Sous-titre section Services',
          type: 'string',
          initialValue: 'Une offre complète pour vos recrutements'
        },
        {
          name: 'services',
          title: '🛠️ Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Titre', type: 'string' },
                { name: 'description', title: 'Description', type: 'text', rows: 2 },
                { name: 'features', title: 'Fonctionnalités', type: 'array', of: [{ type: 'string' }] },
              ],
              preview: {
                select: { title: 'title', subtitle: 'description' }
              }
            }
          ],
          initialValue: [
            {
              title: 'Recrutement sur mesure',
              description: 'Approche personnalisée selon vos besoins spécifiques',
              features: ['Analyse détaillée du poste', 'Profil candidat précis', 'Sourcing ciblé']
            },
            {
              title: 'Délais maîtrisés',
              description: 'Engagement sur les délais de présentation des candidats',
              features: ['Première présentation sous 15 jours', 'Suivi régulier', 'Reporting transparent']
            },
            {
              title: 'Suivi personnalisé',
              description: 'Accompagnement dédié durant toute la mission de recrutement',
              features: ['Connaissance approfondie de votre secteur', 'Suivi post-intégration', 'Accompagnement continu']
            }
          ]
        },

        // CTA
        {
          name: 'ctaTitle',
          title: '🎯 Titre CTA',
          type: 'string',
          initialValue: 'Prêt à démarrer votre recrutement ?'
        },
        {
          name: 'ctaSubtitle',
          title: '🎯 Sous-titre CTA',
          type: 'text',
          rows: 2,
          initialValue: 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins en recrutement'
        },
        {
          name: 'emailCardTitle',
          title: '📧 Titre carte Email',
          type: 'string',
          initialValue: 'Écrivez-nous'
        },
        {
          name: 'emailCardText',
          title: '📧 Texte carte Email',
          type: 'string',
          initialValue: 'recrutement@nerytec.com'
        },
        {
          name: 'contactCardTitle',
          title: '📞 Titre carte Contact',
          type: 'string',
          initialValue: 'Contactez-nous'
        },
        {
          name: 'contactCardText',
          title: '📞 Texte carte Contact',
          type: 'string',
          initialValue: 'Accéder au formulaire'
        }
      ],
      preview: {
        select: { heroTitle: 'heroTitle' },
        prepare(value: Record<string, any>) {
          return {
            title: value.heroTitle || 'Page Recruit',
            subtitle: '🏢 Page recruteurs'
          }
        }
      }
    },
    {
      name: 'contact',
      title: '📞 Contact',
      type: 'document',
      fields: [
        // Hero
        {
          name: 'heroSubtitle',
          title: '📝 Sous-titre Hero',
          type: 'text',
          rows: 3,
          initialValue: 'Vous recherchez un job ou vous vous posez des questions quant aux choix à faire pour construire votre carrière ? Notre équipe est à votre disposition pour répondre à toutes vos questions'
        },

        // Contact Features
        {
          name: 'contactFeatures',
          title: '✨ Fonctionnalités de contact',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Titre', type: 'string' },
                { name: 'description', type: 'string' },
              ],
              preview: {
                select: { title: 'title', subtitle: 'description' }
              }
            }
          ],
          initialValue: [
            { title: 'Réponse rapide', description: 'recrutement@nerytec.com' },
            { title: 'Écoute attentive', description: '0800 123 456' }
          ]
        },

        // Contact Info
        {
          name: 'contactInfo',
          title: '📞 Informations de contact',
          type: 'object',
          fields: [
            {
              name: 'address',
              title: '📍 Adresse',
              type: 'string',
              initialValue: '34 boulevard des italiens 75009'
            },
            {
              name: 'email',
              title: '📧 Email',
              type: 'string',
              initialValue: 'recrutement@nerytec.com'
            },
            {
              name: 'responseTime',
              title: '⏰ Délai de réponse',
              type: 'string',
              initialValue: 'Réponse sous 24h'
            },
            {
              name: 'hours',
              title: '🕐 Horaires',
              type: 'string',
              initialValue: '8h00 - 20h00'
            },
            {
              name: 'days',
              title: '📅 Jours',
              type: 'string',
              initialValue: 'Lundi au Vendredi'
            }
          ]
        },

        // Form Button
        {
          name: 'formButtonText',
          title: '🔘 Texte du bouton d\'envoi',
          type: 'string',
          initialValue: 'Envoyer le message'
        }
      ],
      preview: {
        select: { address: 'contactInfo.address' },
        prepare(value: Record<string, any>) {
          return {
            title: 'Page Contact',
            subtitle: `📞 ${value.address || 'Informations de contact'}`
          }
        }
      }
    },
    {
      name: 'footer',
      title: '🦶 Footer',
      type: 'document',
      fields: [
        // Description entreprise
        {
          name: 'companyDescription',
          title: '📄 Description entreprise',
          type: 'text',
          rows: 3,
          initialValue: 'Cabinet de recrutement spécialisé dans les profils à connotation commerciale et managériale pour les ESN et sociétés de conseil en ingénierie depuis plus de 20 ans.'
        },

        // Navigation
        {
          name: 'navigation',
          title: '🧭 Navigation',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'href', title: 'Lien', type: 'string' },
              ],
              preview: {
                select: { title: 'label', subtitle: 'href' }
              }
            }
          ],
          initialValue: [
            { label: 'Accueil', href: '/' },
            { label: 'Découvrir NERYTEC', href: '/about' },
            { label: 'Opportunités', href: '/jobs' },
            { label: 'Recruteurs', href: '/recruit' },
            { label: 'Contact', href: '/contact' }
          ]
        },

        // Contact
        {
          name: 'contact',
          title: '📞 Contact',
          type: 'object',
          fields: [
            {
              name: 'email',
              title: '📧 Email',
              type: 'string',
              initialValue: 'recrutement@nerytec.com'
            },
            {
              name: 'address',
              title: '📍 Adresse',
              type: 'string',
              initialValue: '34 boulevard des italiens 75009, Paris, France'
            },
            {
              name: 'linkedinUrl',
              title: '🔗 LinkedIn URL',
              type: 'url',
              initialValue: 'https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-allouch-177b961a/'
            }
          ]
        },

        // Copyright
        {
          name: 'copyright',
          title: '© Copyright',
          type: 'string',
          initialValue: '© 2024 NERYTEC Consulting. Tous droits réservés.'
        },

        // Liens légaux
        {
          name: 'legalLinks',
          title: '⚖️ Liens légaux',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'href', title: 'Lien', type: 'string' },
              ],
              preview: {
                select: { title: 'label', subtitle: 'href' }
              }
            }
          ],
          initialValue: [
            { label: 'Mentions légales', href: '/legal' },
            { label: 'Protection des données', href: '/privacy' }
          ]
        }
      ],
      preview: {
        select: { companyDescription: 'companyDescription' },
        prepare(value: Record<string, any>) {
          return {
            title: 'Footer',
            subtitle: `🦶 ${value.companyDescription?.substring(0, 50) || 'Configuration du footer'}...`
          }
        }
      }
    }
  ],
}
