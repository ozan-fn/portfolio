import NextAuth from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { type DefaultSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { AuthOptions } from 'next-auth';

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			id: string;
		} & DefaultSession['user'];
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		user: {};
	}
}

export const authOptions: AuthOptions = {
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.user = user;
			}
			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.user = { ...session.user, ...token.user };
			}
			return session;
		},
	},
	pages: {
		signIn: '/login',
	},
	providers: [
		CredentialsProvider({
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.password) {
					return null;
				}

				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				});
				if (!user) {
					return null;
				}

				if (!(await bcrypt.compare(credentials.password, user.password))) {
					return null;
				}

				return {
					id: user.id,
					name: user.name,
					email: user.email,
					picture: user.picture,
				};
			},
		}),
	],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
