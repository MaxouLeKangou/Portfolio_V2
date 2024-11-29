import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
import compression from 'vite-plugin-compression';

const siteUrl = 'https://portfolio.bessarion.fr';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        plugins: [
            compression({algorithm: 'gzip'}),
        ],
        build: {
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            },
        },
    },

    app: {
        head: {
          htmlAttrs: {
            lang: 'en',
          },
          title: 'I am Max - Frontend Developer',
          meta: [
            { name: 'robots', content: 'index, follow' },
            { name: 'description', content: 'Maxime, Frontend Developer specializing in scalable web and mobile apps. Expert in Nuxt.js, TailwindCSS, and multimedia technologies, Maxime delivers seamless user experiences and creative solutions. Explore innovative projects and let\'s collaborate!' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ],
        }
    },

    future: {
        compatibilityVersion: 4,
    },
    ssr: true,

    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },

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

    runtimeConfig: {
        public: {
            siteUrl: siteUrl,
        },
    },

    site: { 
        url: siteUrl, 
        name: 'I am Max - Frontend Developer', 
    },

    robots: {
        groups: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/secret'
            },
        ],
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
            { name: 'Poppins', provider: 'google', weights: [300, 400, 500, 600, 700, 800, 900] },
            { name: 'Anton', provider: 'google' }
        ],
    },
    
});