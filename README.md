# Diego Zegarra's Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme with electric blue accents
- ✨ Smooth animations and transitions
- 🌌 Animated starry background
- 📱 Fully responsive design
- 📧 Contact form with EmailJS integration
- 🚀 Optimized for performance
- 🔍 SEO-friendly

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI
- EmailJS
- Shadcn UI

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your EmailJS credentials:

   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   └── sections/    # Page sections
├── lib/             # Utility functions
├── types/           # TypeScript type definitions
├── constants/       # Constants and data
└── styles/          # Global styles
```

## Customization

1. Update the content in `src/constants/portfolio.ts`
2. Modify the theme colors in `tailwind.config.ts`
3. Add your own projects and experience
4. Customize the animations in the components

## Deployment

The site can be deployed to Vercel with zero configuration:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## License

MIT License - feel free to use this template for your own portfolio!
