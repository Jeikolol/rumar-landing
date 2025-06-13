# Rumar Crédito Landing Page

A modern, responsive landing page for Rumar Crédito, featuring a gold-on-black theme, elegant typography, and a focus on financial services.

[![Vercel](https://img.shields.io/badge/-Vercel-black?logo=vercel&logoColor=white&style=for-the-badge)](https://vercel.com)

## Features

- ✨ Elegant gold-on-black design
- 📱 Fully responsive layout
- 🖼️ Custom logo and favicon
- 🧭 Smooth navigation with dropdown menus
- 📄 Informative sections: About Us, Loans, Contact
- 💡 Accessible and SEO-friendly

## Tech Stack

[![Astro](https://img.shields.io/badge/-Astro-1a1a1a?logo=astro&logoColor=F15A2C&style=for-the-badge)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com)
[![Figma](https://img.shields.io/badge/-Figma-A259FF?logo=figma&logoColor=white&style=for-the-badge)](https://figma.com)

## Getting Started

- Clone the repository:

```sh
git clone https://github.com/Jeikolol/rumar-landing.git
cd rumar-landing
```

- Install dependencies:

```sh
npm install
```

- Run the development server:

```sh
npm run dev
```

- Open in your browser:

```sh
http://localhost:4321
```

## Customization

- **Logo**: Replace `/public/logo.svg` and `favicon.ico` with your own branding.
- **Colors**: Adjust gold shades in `tailwind.config.js` if needed.
- **Content**: Edit sections in `components` and `pages` to update text and images

## 🚀 Folder Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── favicon.svg
│   └── logo.svg
├── src/
│   ├── components
│   │   ├── Header.astro
│   │   ├── Nosotros.astro
│   ├── layouts/
│   │    └── Layout.astro
│   ├── pages/
│   │    └── index.astro
│   └── tailwind.config.js
└── package.json
```

## Deployment

You can deploy this site to Vercel, Netlify, or any static hosting provider.

## License

MIT

## Credits

- Logo and design by Rumar Crédito
- Built with [![Astro](https://img.shields.io/badge/-Astro-1a1a1a?logo=astro&logoColor=F15A2C&style=for-the-badge)](https://astro.build) and [![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
