import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

export default defineConfig({
    name: 'default',
    title: 'NERYTEC Studio',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

    basePath: '/studio',

    plugins: [
        deskTool({ structure: structure as any }),
        visionTool(),
    ],

    schema: {
        types: schema.types,
    },

    // Configuration pour le développement
    cors: {
        credentials: 'include',
        origin: ['http://localhost:3000', 'http://localhost:3001'],
    },
})
