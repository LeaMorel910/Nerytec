// "use client"
// import type React from "react"
// import { useState, useEffect } from "react"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import { PageTransition } from "@/components/page-transition"
// import Link from "next/link"

// const inter = Inter({ subsets: ["latin"] })

// // Composant séparé pour la bannière pour éviter l'hydratation
// function PromotionalBanner() {
//   const [showBanner, setShowBanner] = useState(true)
//   const [isMinimized, setIsMinimized] = useState(false)
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)

//     const savedState = localStorage.getItem('nerytec-banner-state')
//     if (savedState) {
//       try {
//         const { show, minimized } = JSON.parse(savedState)
//         setShowBanner(show)
//         setIsMinimized(minimized)
//       } catch (error) {
//         console.error('Erreur lors du chargement de l\'état de la bannière:', error)
//       }
//     }
//   }, [])

//   const handleCloseBanner = () => {
//     setShowBanner(false)
//     setIsMinimized(false)
//     localStorage.setItem('nerytec-banner-state', JSON.stringify({ show: false, minimized: false }))
//   }

//   const handleMinimizeBanner = () => {
//     setIsMinimized(true)
//     localStorage.setItem('nerytec-banner-state', JSON.stringify({ show: true, minimized: true }))
//   }

//   const handleExpandBanner = () => {
//     setIsMinimized(false)
//     localStorage.setItem('nerytec-banner-state', JSON.stringify({ show: true, minimized: false }))
//   }

//   const handleReopenBanner = () => {
//     setShowBanner(true)
//     setIsMinimized(false)
//     localStorage.setItem('nerytec-banner-state', JSON.stringify({ show: true, minimized: false }))
//   }

//   // Ne rien rendre tant que le composant n'est pas monté
//   if (!mounted) {
//     return null
//   }

//   return (
//     <>
//       {/* Promotional Banner - Desktop */}
//       {showBanner && (
//         <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
//           <div className="bg-[#0078BE] hover:bg-[#006bb0] transition-colors duration-200 text-white px-6 py-3 rounded-t-lg shadow-2xl relative">
//             <button
//               onClick={handleCloseBanner}
//               className="absolute -top-2 -right-2 w-6 h-6 bg-white text-[#0078BE] rounded-full flex items-center justify-center text-xs font-bold hover:bg-gray-100 transition-transform duration-200 hover:scale-105"
//               aria-label="Fermer la bannière"
//             >
//               ×
//             </button>
//             <div className="flex items-center justify-center space-x-2">
//               <span className="text-sm font-bold whitespace-nowrap">
//                 🎉 Quand NERYTEC vous trouve un job, NERYTEC vous offre 500€ ou plus ! 🎉
//               </span>
//               <span className="text-xs whitespace-nowrap opacity-80">
//                 <Link
//                   href="/gift-cards"
//                   className="underline hover:text-blue-200 transition-colors duration-200 cursor-pointer"
//                   aria-label="En savoir plus sur les chèques cadeaux"
//                 >
//                   en chèque cadeau de votre choix
//                 </Link>
//               </span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Promotional Banner - Mobile */}
//       {showBanner && (
//         <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
//           <div className="bg-[#0078BE] hover:bg-[#006bb0] transition-colors duration-200 text-white shadow-2xl relative">
//             {!isMinimized ? (
//               <div className="px-3 py-3">
//                 <button
//                   onClick={handleMinimizeBanner}
//                   className="absolute top-1 right-1 w-6 h-6 bg-white/20 text-white rounded-full flex items-center justify-center text-xs font-bold hover:bg-white/30 transition-transform duration-200 hover:scale-105"
//                   aria-label="Minimiser la bannière"
//                 >
//                   −
//                 </button>
//                 <div className="flex flex-col items-center space-y-1 pr-8">
//                   <span className="text-xs font-bold text-center leading-tight">
//                     🎉 Quand NERYTEC vous trouve un job, NERYTEC vous offre 500€ ou plus ! 🎉
//                   </span>
//                   <span className="text-xs opacity-80 text-center">
//                     <Link
//                       href="/gift-cards"
//                       className="underline hover:text-blue-200 transition-colors duration-200 cursor-pointer active:text-blue-300"
//                       aria-label="En savoir plus sur les chèques cadeaux"
//                     >
//                       en chèque cadeau de votre choix
//                     </Link>
//                   </span>
//                 </div>
//               </div>
//             ) : (
//               <div className="px-3 py-2 flex items-center justify-between">
//                 <span className="text-xs font-bold">🎉 500€ offerts !</span>
//                 <button
//                   onClick={handleExpandBanner}
//                   className="w-6 h-6 bg-white/20 text-white rounded-full flex items-center justify-center text-xs font-bold hover:bg-white/30 transition-transform duration-200 hover:scale-105"
//                   aria-label="Développer la bannière"
//                 >
//                   +
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Bouton de réouverture - Desktop uniquement */}
//       {!showBanner && (
//         <button
//           onClick={handleReopenBanner}
//           className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-[#0078BE] hover:bg-[#006bb0] text-white rounded-full shadow-lg flex items-center justify-center text-lg font-bold hidden lg:block transition-transform duration-200 hover:scale-105"
//           aria-label="Réafficher la bannière promotionnelle"
//         >
//           🎉
//         </button>
//       )}
//     </>
//   )
// }

// export default function ClientLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <>
//       <PageTransition>{children}</PageTransition>
//       <PromotionalBanner />
//     </>
//   )
// }
