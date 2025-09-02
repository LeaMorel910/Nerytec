import { sanityFetch } from "@/sanity/lib/live"

export type FooterData = {
    companyDescription?: string
    navigation?: { label: string; href: string }[]
    contact?: {
        email?: string
        address?: string
        linkedinUrl?: string
    }
    copyright?: string
    legalLinks?: { label: string; href: string }[]
}

export async function getFooterData(): Promise<FooterData> {
    const query = `coalesce(
    *[_type == "footer" && _id == "footer"][0],
    *[_type == "footer"] | order(_updatedAt desc)[0]
  ){
    companyDescription,
    navigation[]{label,href},
    contact{
      email,
      address,
      linkedinUrl
    },
    copyright,
    legalLinks[]{label,href}
  }`

    const result = await sanityFetch({ query, tags: ['footer'] })
    const data = (result as any)?.data as FooterData | null

    // Valeurs par défaut si aucune donnée n'est trouvée
    const defaultData: FooterData = {
        companyDescription: 'Cabinet de recrutement spécialisé dans les profils à connotation commerciale et managériale pour les ESN et sociétés de conseil en ingénierie depuis plus de 20 ans.',
        navigation: [
            { label: 'Accueil', href: '/' },
            { label: 'Découvrir NERYTEC', href: '/about' },
            { label: 'Opportunités', href: '/jobs' },
            { label: 'Recruteurs', href: '/recruit' },
            { label: 'Contact', href: '/contact' }
        ],
        contact: {
            email: 'recrutement@nerytec.com',
            address: '34 boulevard des italiens 75009, Paris, France',
            linkedinUrl: 'https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-allouch-177b961a/'
        },
        copyright: '© 2024 NERYTEC Consulting. Tous droits réservés.',
        legalLinks: [
            { label: 'Mentions légales', href: '/legal' },
            { label: 'Protection des données', href: '/privacy' }
        ]
    }

    return data || defaultData
}
