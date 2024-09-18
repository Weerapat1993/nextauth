import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from '@/utils/auth';
import { findUserByEmail } from '@/services/user';

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const user = await findUserByEmail(credentials?.email || '');

        if (!user) {
          throw new Error('No user found');
        }

        const isValidPassword = await verifyPassword(credentials?.password || '', user.password);

        if (!isValidPassword) {
          throw new Error('Invalid password');
        }

        return user;
      },
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
});
