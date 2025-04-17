# rstart

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

For tRPC client support, wrap your app in the `<TRPCProvider>` inside your `ThemeProvider` in `src/app/layout.tsx`.

## Tech Stack Features

### Next.js App Router

The project uses the latest Next.js features including the App Router for enhanced routing and server components.

### End-to-end Type Safety

With tRPC, enjoy full type safety from your backend to frontend without any manual type synchronization.

#### Example tRPC Procedure

```ts
// src/server/trpc/router.ts
import { router, publicProcedure } from '@/server/trpc/router';

export const appRouter = router({
    hello: publicProcedure.query(() => 'Hello world'),
});
export type AppRouter = typeof appRouter;
```

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
│   │   ├── api/
│   │   │   └── trpc/
│   │   │       └── [...trpc]/route.ts // Next.js tRPC handler
│   │   ├── page.tsx         // Home page (example)
│   │   └── globals.css      // Global styles
│   ├── components/          // Reusable UI components
│   ├── lib/                 // Utility functions and configurations
│   ├── providers/           // Context providers (ThemeProvider, TRPC Provider)
│   │   ├── theme-provider.tsx
│   │   └── trpc-provider.tsx // tRPC React provider
│   └── server/              // Backend logic
│       ├── db/              // Drizzle ORM (schema, pool, auth adapters)
│       └── trpc/            // tRPC router definitions
├── public/                  // Static assets (images, fonts, etc.)
├── .vscode/                // VS Code configuration and settings
├── .github/                // GitHub workflows and templates
├── package.json             // Project manifest and scripts
├── pnpm-lock.yaml           // Locked dependencies for pnpm
├── tsconfig.json            // TypeScript configuration
├── next.config.js           // Next.js configuration
└── tailwind.config.js       // Tailwind CSS configuration
```

## Environment Variables (T3-Style)

This project uses a T3-style environment variable validation system powered by [zod](https://zod.dev/).

- **Validation:** All required environment variables are validated at runtime.
- **Separation:** Server-only and client-exposed (NEXT*PUBLIC*\*) variables are validated separately.
- **Usage:** Import and use the `env` object from `@/lib/env` for type-safe, validated access to your environment variables.

### Adding Environment Variables

1. **Server Variables:**
    - Add your variable to the `serverSchema` in `src/lib/env.ts`.
    - Example: `DATABASE_URL: z.string().url()`
2. **Client Variables:**
    - Add your variable to the `clientSchema` in `src/lib/env.ts` (must start with `NEXT_PUBLIC_`).
    - Example: `NEXT_PUBLIC_API_URL: z.string().url()`

### Using Environment Variables

```ts
import { env } from '@/lib/env';

console.log(env.DATABASE_URL); // server
console.log(env.NEXT_PUBLIC_API_URL); // client
```

If validation fails, the app will throw an error and print details to the console.

## Database: Drizzle ORM & PostgreSQL

This project is set up with [Drizzle ORM](https://orm.drizzle.team/) and PostgreSQL for type-safe, modern database access.

- **Configuration:**
    - Connection and ORM setup: `src/server/db/index.ts`
    - Schema definitions: `src/server/db/schema.ts`
    - Drizzle config: `drizzle.config.ts` (project root)
- **Environment:** Requires a `DATABASE_URL` in your environment variables (see env docs above).
- **Example Table:**
    - `hello` table with `id` (serial primary key) and `greeting` (text, not null)

### Usage Example

```ts
import { db } from '@/server/db';
import { hello } from '@/server/db/schema';

// Query all greetings
const greetings = await db.select().from(hello);
```

You can define more tables in `src/server/db/schema.ts` using Drizzle's schema builder.

## Migration Workflow Example

```bash
# Edit your schema in src/server/db/schema.ts
pnpm db:generate   # generates migration files in ./drizzle
pnpm db:push       # applies migrations to your database
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

**tRPC endpoint**: `/api/trpc` — try it in your browser or via `curl "/api/trpc/hello"`
