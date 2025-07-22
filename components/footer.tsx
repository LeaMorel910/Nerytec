import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="/images/nerytec.jpeg"
                alt="NERYTEC Consulting Logo"
                width={100}
                height={50}
                className="h-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Cabinet de recrutement spécialisé dans les profils à connotation commerciale et managériale  pour les ESN et sociétés de conseil en ingénierie depuis plus de 20 ans.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-allouch-177b961a/"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Découvrir NERYTEC
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Opportunités
                </Link>
              </li>
              <li>
                <Link href="/recruit" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Recruteurs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:recrutement@nerytec.com"
                  className="text-gray-300 underline hover:text-blue-200 transition-colors"
                >
                  recrutement@nerytec.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <a
                  href="https://maps.app.goo.gl/Y7utm8igG9hB5Jf67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 underline hover:text-blue-200 transition-colors"
                >
                  34 boulevard des italiens 75009, Paris, France
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 NERYTEC Consulting. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/legal" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Mentions légales
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Protection des données
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
