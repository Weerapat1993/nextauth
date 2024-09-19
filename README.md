# MyApp - Next.js Boilerplate

This is a scalable and reusable Next.js boilerplate designed for enterprise-level applications. It includes authentication, admin functionalities, form handling, and global state management using Zustand.

## Features

- [x] Next.js with TypeScript
- [x] Authentication (NextAuth, Email, Google OAuth)
- [x] Zustand for state management
- [x] Form validation using React Hook Form and Zod
- [x] TailwindCSS for styling
- [x] Axios for API calls
- [ ] Rate limiting, captcha validation, and 2FA support

## Installation

1. Clone the repository.
2. Install the dependencies:
```bash
pnpm install
```
3. Copy the `.env.example` file to `.env` and update the environment variables.
```bash
cp example.env .env
```
4. Run prisma database migration
```bash
npx prisma migrate dev
```
5. Run the development server:
```bash
npm run dev
```