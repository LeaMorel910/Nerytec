'use client'

import { useEffect, useState } from 'react'
import { client } from '../sanity/lib/client'

interface HomepageData {
    heroTitle?: string
    heroSubtitle?: string
    expertiseTitle?: string
    expertiseSubtitle?: string
    expertiseDescription?: string
    keyPoints?: Array<{ point: string }>
    testimonials?: Array<{ content: string; author?: string }>
    candidateSection?: string
    recruiterSection?: string
}

export function SanityHomepage() {
    const [data, setData] = useState<HomepageData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const query = `*[_type == "homepage"][0] {
          heroTitle,
          heroSubtitle,
          expertiseTitle,
          expertiseSubtitle,
          expertiseDescription,
          keyPoints[]{
            point
          },
          testimonials[]{
            content,
            author
          },
          candidateSection,
          recruiterSection
        }`

                const result = await client.fetch(query)
                setData(result)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Erreur lors du chargement')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                <h3 className="font-semibold">Erreur de chargement</h3>
                <p>{error}</p>
                <p className="text-sm mt-2">
                    Vérifiez que votre Studio Sanity est configuré et que vous avez créé du contenu.
                </p>
            </div>
        )
    }

    if (!data) {
        return (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800">
                <h3 className="font-semibold">Aucun contenu trouvé</h3>
                <p>
                    Aucune donnée n'a été trouvée dans Sanity.
                    Allez dans votre Studio Sanity pour créer du contenu.
                </p>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            {/* Hero Section */}
            {data.heroTitle && (
                <section className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {data.heroTitle}
                    </h1>
                    {data.heroSubtitle && (
                        <p className="text-xl text-gray-600">{data.heroSubtitle}</p>
                    )}
                </section>
            )}

            {/* Expertise Section */}
            {data.expertiseTitle && (
                <section className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        {data.expertiseTitle}
                    </h2>
                    {data.expertiseSubtitle && (
                        <p className="text-lg text-gray-700 mb-3">{data.expertiseSubtitle}</p>
                    )}
                    {data.expertiseDescription && (
                        <p className="text-gray-600">{data.expertiseDescription}</p>
                    )}
                </section>
            )}

            {/* Key Points */}
            {data.keyPoints && data.keyPoints.length > 0 && (
                <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Points clés</h3>
                    <ul className="space-y-2">
                        {data.keyPoints.map((point, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-green-500 mr-2">✅</span>
                                {point.point}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Testimonials */}
            {data.testimonials && data.testimonials.length > 0 && (
                <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Témoignages</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        {data.testimonials.map((testimonial, index) => (
                            <blockquote key={index} className="bg-white p-4 rounded-lg border">
                                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                                {testimonial.author && (
                                    <footer className="mt-2 text-sm text-gray-500">
                                        — {testimonial.author}
                                    </footer>
                                )}
                            </blockquote>
                        ))}
                    </div>
                </section>
            )}

            {/* CTA Sections */}
            <div className="grid gap-6 md:grid-cols-2">
                {data.candidateSection && (
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">
                            👤 Pour les candidats
                        </h3>
                        <p className="text-blue-800">{data.candidateSection}</p>
                    </div>
                )}

                {data.recruiterSection && (
                    <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-green-900 mb-2">
                            🏢 Pour les recruteurs
                        </h3>
                        <p className="text-green-800">{data.recruiterSection}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
