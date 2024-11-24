import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },
    ssr: true,

    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },

    modules: [
      "@nuxtjs/sitemap",
      "@nuxtjs/robots",
      "@nuxtjs/prismic",
      "@nuxtjs/tailwindcss",
      "@nuxt/image",
      "@nuxt/fonts",
    ],

    site: { 
        url: 'https://iammax.bessarion.fr', 
        name: 'I am Max - Frontend Developer', 
    }, 

    prismic: {
        endpoint: apiEndpoint || repositoryName,
    },

    tailwindcss: {
        cssPath: ['~/assets/css/main.css', { injectPosition: "last" }],
    },

    image: {
        format: ['webp']
    },

    fonts: {
        provider: 'google',
        families: [
            { name: 'Poppins', provider: 'google' },
            { name: 'Anton', provider: 'google' }
        ]
    },
    
});