import Link from "next/link"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0078BE] mb-4">
                        Politique de Confidentialité
                    </h1>
                    <p className="text-gray-600">
                        Protection des données personnelles - NERYTEC CONSULTING
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Responsable de traitement */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Responsable de traitement</h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <p><strong>Société :</strong> NERYTEC CONSULTING</p>
                            <p><strong>Adresse :</strong> 34 Boulevard des Italiens, 75009 Paris</p>
                            <p><strong>Email :</strong> recrutement@nerytec.com</p>
                            <p><strong>SIREN :</strong> 503 258 626</p>
                        </div>
                    </section>

                    {/* Données collectées */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Données collectées</h2>
                        <div className="prose prose-gray max-w-none">
                            <p>Dans le cadre de nos services de recrutement, nous collectons les données suivantes :</p>

                            <div className="bg-blue-50 rounded-lg p-6 my-4">
                                <h3 className="font-semibold text-gray-800 mb-3">Via le formulaire de contact :</h3>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Nom et prénom</li>
                                    <li>Adresse email</li>
                                    <li>Numéro de téléphone</li>
                                    <li>Message/demande</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-lg p-6 my-4">
                                <h3 className="font-semibold text-gray-800 mb-3">CV et candidatures :</h3>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Curriculum vitae</li>
                                    <li>Coordonnées complètes</li>
                                    <li>Formations et expériences professionnelles</li>
                                    <li>Compétences et qualifications</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Finalités */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Finalités du traitement</h2>
                        <div className="prose prose-gray max-w-none">
                            <p>Vos données sont utilisées pour :</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Traiter vos demandes de contact</li>
                                <li>Gérer les candidatures et processus de recrutement</li>
                                <li>Mettre en relation candidats et employeurs</li>
                                <li>Constituer une base de données de candidats</li>
                                <li>Respecter nos obligations légales</li>
                                <li>Améliorer nos services</li>
                            </ul>
                        </div>
                    </section>

                    {/* Base légale */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Base légale</h2>
                        <div className="prose prose-gray max-w-none">
                            <p>Le traitement de vos données repose sur :</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Votre consentement</strong> pour l'envoi de CV et candidatures</li>
                                <li><strong>L'intérêt légitime</strong> pour constituer une base de données candidats</li>
                                <li><strong>L'exécution d'un contrat</strong> dans le cadre de nos services</li>
                                <li><strong>Le respect d'obligations légales</strong></li>
                            </ul>
                        </div>
                    </section>

                    {/* Conservation */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Durée de conservation</h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <ul className="space-y-2">
                                <li><strong>Candidatures :</strong> 2 ans après le dernier contact</li>
                                <li><strong>CV non retenus :</strong> 2 ans maximum</li>
                                <li><strong>Données de contact :</strong> 3 ans après la dernière interaction</li>
                                <li><strong>Obligations légales :</strong> Durée légale applicable</li>
                            </ul>
                        </div>
                    </section>

                    {/* Destinataires */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Destinataires des données</h2>
                        <div className="prose prose-gray max-w-none">
                            <p>Vos données peuvent être transmises à :</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Nos clients employeurs (avec votre accord)</li>
                                <li>Nos prestataires techniques (hébergement, traitement des formulaires)</li>
                                <li>Autorités compétentes (si obligation légale)</li>
                            </ul>
                            <p className="mt-4">
                                <strong>Aucune donnée n'est vendue ou louée à des tiers.</strong>
                            </p>
                        </div>
                    </section>

                    {/* Outils utilisés */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Outils et prestataires</h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <ul className="space-y-2">
                                <li><strong>Formulaires :</strong> GetForm (collecte et transmission des données de contact par email)</li>
                                <li><strong>Hébergement :</strong> IONOS SE (Allemagne)</li>
                                <li><strong>Emails :</strong> Prestataires conformes RGPD</li>
                            </ul>
                        </div>
                    </section>

                    {/* Transferts de données */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transferts de données</h2>
                        <div className="prose prose-gray max-w-none">
                            <p>
                                Vos données sont hébergées en Allemagne (IONOS SE) au sein de l'Union européenne.
                                GetForm peut traiter temporairement vos données pour la transmission des
                                formulaires - nous vérifions que leurs traitements respectent le RGPD.
                            </p>
                            <p>
                                Aucun transfert de données n'est effectué vers des pays tiers en dehors de l'Union européenne.
                            </p>
                        </div>
                    </section>

                    {/* Droits */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vos droits</h2>
                        <div className="prose prose-gray max-w-none">
                            <p>Conformément au RGPD, vous disposez des droits suivants :</p>

                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">Droits d'accès et rectification</h3>
                                    <p className="text-sm">Consulter et corriger vos données personnelles</p>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">Droit d'effacement</h3>
                                    <p className="text-sm">Demander la suppression de vos données</p>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">Droit à la portabilité</h3>
                                    <p className="text-sm">Récupérer vos données dans un format lisible</p>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">Droit d'opposition</h3>
                                    <p className="text-sm">Vous opposer au traitement de vos données</p>
                                </div>
                            </div>

                            <p>
                                <strong>Pour exercer vos droits :</strong> Contactez-nous à l'adresse
                                <a href="mailto:recrutement@nerytec.com" className="text-[#0078BE] hover:underline"> recrutement@nerytec.com</a>
                            </p>
                        </div>
                    </section>

                    {/* Sécurité */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sécurité des données</h2>
                        <div className="prose prose-gray max-w-none">
                            <p>
                                Nous mettons en place des mesures techniques et organisationnelles appropriées
                                pour protéger vos données contre tout accès, modification, divulgation ou
                                destruction non autorisés.
                            </p>
                            <ul className="list-disc pl-6 space-y-1 mt-4">
                                <li>Chiffrement des données en transit (HTTPS)</li>
                                <li>Accès limité aux données personnelles</li>
                                <li>Sauvegardes sécurisées</li>
                                <li>Mise à jour régulière des systèmes</li>
                                <li>Contrôles d'accès stricts</li>
                            </ul>
                        </div>
                    </section>

                    {/* Cookies */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
                        <div className="prose prose-gray max-w-none">
                            <p>
                                Notre site n'utilise que des cookies techniques strictement nécessaires
                                au fonctionnement du site. Aucun cookie de tracking, publicitaire ou
                                analytique n'est utilisé.
                            </p>
                            <p>
                                Les cookies techniques incluent les cookies de session et les cookies
                                nécessaires au bon fonctionnement des formulaires de contact.
                            </p>
                        </div>
                    </section>

                    {/* Contact DPO */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact et réclamations</h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <p><strong>Pour toute question :</strong> recrutement@nerytec.com</p>
                            <p><strong>Réclamation CNIL :</strong>
                                <a href="https://www.cnil.fr/fr/plaintes" className="text-[#0078BE] hover:underline ml-1">
                                    https://www.cnil.fr/fr/plaintes
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Mise à jour */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mise à jour</h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <p><strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}</p>
                            <p>
                                Cette politique peut être modifiée. Nous vous informerons de tout changement significatif.
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