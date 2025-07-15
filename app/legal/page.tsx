import Link from "next/link"

export default function LegalPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0078BE] mb-4">
                        Mentions Légales
                    </h1>
                    <p className="text-gray-600">
                        Informations légales relatives au site NERYTEC CONSULTING
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Éditeur du site */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Éditeur du site</h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <p><strong>Dénomination sociale :</strong> NERYTEC CONSULTING</p>
                            <p><strong>Forme juridique :</strong> Société à responsabilité limitée (SARL)</p>
                            <p><strong>Activité :</strong> Conseil pour les affaires et autres conseils de gestion</p>
                            <p><strong>SIREN :</strong> 503 258 626</p>
                            <p><strong>SIRET :</strong> 503 258 626 00012</p>
                            <p><strong>Code NAF/APE :</strong> 70.22Z</p>
                            <p><strong>Date de création :</strong> 2 avril 2008</p>
                            <p><strong>Siège social :</strong> 34 Boulevard des Italiens, 75009 Paris</p>
                            <p><strong>Immatriculation RNE :</strong> 26 mars 2008</p>
                        </div>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <p><strong>Email :</strong> recrutement@nerytec.com</p>
                            <p><strong>Adresse :</strong> 34 Boulevard des Italiens, 75009 Paris</p>
                        </div>
                    </section>

                    {/* Hébergement */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hébergement</h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                            <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                            <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-[#0078BE] hover:underline">https://vercel.com</a></p>
                        </div>
                    </section>

                    {/* Propriété intellectuelle */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Propriété intellectuelle</h2>
                        <div className="prose prose-gray max-w-none">
                            <p>
                                Le contenu du site NERYTEC CONSULTING (textes, images, graphismes, logo, icônes, sons, logiciels)
                                est la propriété exclusive de NERYTEC CONSULTING, à l'exception des marques, logos ou contenus
                                appartenant à d'autres sociétés partenaires ou tiers.
                            </p>
                            <p>
                                Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
                                même partielle, de ces différents éléments est strictement interdite sans l'accord exprès
                                par écrit de NERYTEC CONSULTING.
                            </p>
                        </div>
                    </section>

                    {/* Logos et marques */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Logos et marques tierces</h2>
                        <div className="prose prose-gray max-w-none">
                            <p>
                                Les logos et marques Amazon, Fnac, Decathlon, Ikea, Zalando, et Darty sont la propriété
                                exclusive de leurs détenteurs respectifs. Leur utilisation sur ce site est uniquement
                                à des fins d'information sur les récompenses disponibles dans le cadre de nos services
                                de recrutement.
                            </p>
                            <p>
                                NERYTEC CONSULTING est un cabinet de recrutement indépendant et n'est affilié à aucune
                                de ces marques.
                            </p>
                        </div>
                    </section>

                    {/* Responsabilité */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation de responsabilité</h2>
                        <div className="prose prose-gray max-w-none">
                            <p>
                                NERYTEC CONSULTING s'efforce de fournir des informations exactes et à jour.
                                Cependant, des erreurs ou omissions peuvent survenir. L'utilisateur devra donc
                                s'assurer de l'exactitude des informations et signaler toute erreur.
                            </p>
                            <p>
                                NERYTEC CONSULTING ne peut être tenue responsable des dommages directs et indirects
                                causés au matériel de l'utilisateur lors de l'accès au site.
                            </p>
                        </div>
                    </section>

                    {/* Droit applicable */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Droit applicable</h2>
                        <div className="prose prose-gray max-w-none">
                            <p>
                                Le présent site et les présentes mentions légales sont régis par le droit français.
                                En cas de litige, les tribunaux français seront seuls compétents.
                            </p>
                        </div>
                    </section>

                    {/* Mise à jour */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mise à jour</h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <p><strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}</p>
                            <p>
                                NERYTEC CONSULTING se réserve le droit de modifier les présentes mentions légales
                                à tout moment.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 bg-[#0078BE] hover:bg-[#006bb0] text-white rounded-lg font-semibold transition-colors duration-200 shadow-md"
                    >
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        </div>
    )
}