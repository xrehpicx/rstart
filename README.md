# rstack

A modern full-stack boilerplate project built with cutting-edge technologies:

- [Next.js](https://nextjs.org) - React framework for production
- [tRPC](https://trpc.io) - End-to-end typesafe APIs
- [Drizzle ORM](https://orm.drizzle.team) - TypeScript ORM for better database management
- [better-auth](https://better-auth.dev) - Modern authentication solution
- [Tailwind CSS v4](https://tailwindcss.com) - Next-generation utility-first CSS
- Opinionated configurations for [ESLint](https://eslint.org) & [Prettier](https://prettier.io) - Code quality and formatting

## Getting Started

First, install dependencies using pnpm:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack Features

### Next.js App Router
The project uses the latest Next.js features including the App Router for enhanced routing and server components.

### End-to-end Type Safety
With tRPC, enjoy full type safety from your backend to frontend without any manual type synchronization.

### Modern Database Management
Drizzle ORM provides a type-safe and performant way to interact with your database, with features like:
- Type-safe schema declarations
- Migrations management
- Query building

### Authentication
better-auth provides a modern authentication solution with:
- Secure authentication flows
- Multiple providers support
- Session management

### Modern Styling with Tailwind CSS v4
Latest version of Tailwind CSS offering:
- Enhanced performance
- Extended utility classes
- Improved developer experience
- Better customization options

### Code Quality and Formatting
Strongly opinionated configurations for consistent code style:
- Custom ESLint configuration with strict TypeScript rules
- Tailored Prettier settings for consistent formatting
- Pre-commit hooks for code quality enforcement
- Project-specific rules for better developer experience
- Integrated VS Code settings for seamless development

## Project Structure

```plaintext
rstack/
├── src/
│   ├── app/
│   │   ├── layout.tsx       // Main layout and metadata
│   │   ├── page.tsx         // Home page (example)
│   │   └── globals.css      // Global styles
│   ├── components/          // Reusable UI components
│   ├── lib/                 // Utility functions and configurations
│   ├── providers/           // Context providers (e.g., ThemeProvider)
│   └── server/              // Backend logic (tRPC routers, Drizzle schemas, auth config)
├── public/                  // Static assets (images, fonts, etc.)
├── .vscode/                // VS Code configuration and settings
├── .github/                // GitHub workflows and templates
├── package.json             // Project manifest and scripts
├── pnpm-lock.yaml           // Locked dependencies for pnpm
├── tsconfig.json            // TypeScript configuration
├── next.config.js           // Next.js configuration
└── tailwind.config.js       // Tailwind CSS configuration
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Drizzle Documentation](https://orm.drizzle.team/docs/overview)
- [better-auth Documentation](https://better-auth.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ESLint Configuration Guide](https://eslint.org/docs/latest/use/configure)
- [Prettier Options](https://prettier.io/docs/en/options.html)

## Deployment

Deploy your rstack project with [Vercel](https://vercel.com) for the best Next.js experience.
