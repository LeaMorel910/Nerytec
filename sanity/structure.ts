import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenu NERYTEC')
    .items([
      // Section principale
      S.listItem()
        .title('🏠 Page d\'accueil')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
        ),

      // À propos / Découvrir NERYTEC (singleton)
      S.listItem()
        .title('📘 Découvrir NERYTEC')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
        ),

      // Jobs (singleton)
      S.listItem()
        .title('💼 Candidats / Jobs')
        .child(
          S.document()
            .schemaType('jobs')
            .documentId('jobs')
        ),

      // Recruit (singleton)
      S.listItem()
        .title('🏢 Recruteurs / Recruit')
        .child(
          S.document()
            .schemaType('recruit')
            .documentId('recruit')
        ),

      // Contact (singleton)
      S.listItem()
        .title('📞 Contact')
        .child(
          S.document()
            .schemaType('contact')
            .documentId('contact')
        ),

      // Footer (singleton)
      S.listItem()
        .title('🦶 Footer')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer')
        ),
    ])
