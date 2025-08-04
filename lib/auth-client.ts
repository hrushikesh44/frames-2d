import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: process.env.BASE_URL || process.env.BASE_URL_2
})

export const { signIn, signUp, signOut, useSession, getSession, $fetch } = authClient;
