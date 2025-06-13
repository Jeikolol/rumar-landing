// @ts-check
import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel'
import tailwindIntegration from '@astrojs/tailwind'
import dotenv from 'dotenv'
dotenv.config()

// https://astro.build/config
export default defineConfig({
	integrations: [tailwindIntegration()],
	output: 'server', // Change to 'static' if you're using static deployment
	adapter: vercel(), // Use 'vercel/static' for static sites,
})
