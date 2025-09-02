# Configuration Sanity pour NERYTEC

## 🚀 Installation et Configuration

### 1. Variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Sanity Studio (optionnel pour le CLI)
SANITY_PROJECT_ID=your_project_id_here
SANITY_DATASET=production
```

### 2. Créer un projet Sanity

1. Allez sur [sanity.io](https://sanity.io)
2. Créez un nouveau projet
3. Notez votre `projectId` et `dataset`
4. Mettez à jour votre `.env.local`

### 3. Lancer le Studio Sanity

```bash
# Lancer le Studio en mode développement
npm run studio

# Ou avec pnpm
pnpm studio
```

Le Studio sera accessible sur `http://localhost:3333`

### 4. Créer du contenu

1. Dans le Studio Sanity, créez un document de type "homepage"
2. Remplissez tous les champs selon vos besoins
3. Publiez le document

## 📝 Structure des données

### Hero Section
- `heroTitle` : Titre principal
- `heroSubtitle` : Sous-titre
- `heroDescription` : Description
- `heroButton1Text` : Texte du premier bouton
- `heroButton1Link` : Lien du premier bouton
- `heroButton2Text` : Texte du deuxième bouton
- `heroButton2Link` : Lien du deuxième bouton
- `heroTrustIndicators` : Indicateurs de confiance

### Services Section
- `servicesTitle` : Titre de la section
- `servicesSubtitle` : Sous-titre
- `services` : Liste des services avec titre et fonctionnalités
- `servicesButtonText` : Texte du bouton
- `servicesButtonLink` : Lien du bouton

### About Section
- `aboutTitle` : Titre de la section
- `aboutDescription` : Description
- `aboutValues` : Liste des valeurs
- `aboutButtonText` : Texte du bouton
- `aboutButtonLink` : Lien du bouton
- `aboutExperience` : Informations sur l'expérience

### Stats Section
- `stats` : Liste des statistiques avec nombre et label

### Testimonials Section
- `testimonialsTitle` : Titre de la section
- `testimonialsSubtitle` : Sous-titre
- `testimonials` : Liste des témoignages

### CTA Section
- `ctaTitle` : Titre de la section
- `ctaDescription` : Description
- `ctaButtonText` : Texte du bouton
- `ctaButtonLink` : Lien du bouton

## 🔄 Live Preview

Le Live Preview est activé via le composant `<SanityLive />` dans le layout. 
Cela permet de voir les modifications en temps réel lors de l'édition dans le Studio.

## 🚀 Déploiement

### Studio Sanity
```bash
# Build du Studio
npm run studio:build

# Déploiement
npm run studio:deploy
```

### Variables de production
Assurez-vous que vos variables d'environnement sont configurées sur votre plateforme de déploiement.

## 📚 Ressources

- [Documentation Sanity](https://www.sanity.io/docs)
- [Next.js + Sanity](https://github.com/sanity-io/next-sanity)
- [Studio Sanity](https://www.sanity.io/studio)

