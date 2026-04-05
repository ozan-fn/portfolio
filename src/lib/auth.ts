import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from './prisma';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql',
    }),
    advanced: {
        database: {
            generateId: () => crypto.randomUUID(),
        },
    },
    emailAndPassword: {
        enabled: true,
        disableSignUp: true,
    },
    plugins: [sveltekitCookies(getRequestEvent)],
});
