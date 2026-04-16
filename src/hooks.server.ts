import { auth } from "$lib/auth";
import { redirect, type Handle } from "@sveltejs/kit";
import { svelteKitHandler } from "better-auth/svelte-kit";
import { building } from "$app/environment";
import prisma from "$lib/prisma";

export const handle: Handle = async ({ event, resolve }) => {
  // 0. Kerjakan Redirect Shortlink jika rute tidak ditemukan (404-ish)
  if (!event.route.id) {
    const slug = event.url.pathname.slice(1); // ambil path setelah /
    if (slug) {
      const shortLink = await prisma.shortLink.findUnique({
        where: { alias: slug },
      });

      if (shortLink) {
        throw redirect(301, shortLink.url);
      }
    }
  }

  // 1. Cek sesi menggunakan Better Auth API
  const session = await auth.api.getSession({
    headers: event.request.headers,
  });

  const isProtectedRoute = event.route.id?.startsWith("/(protected)/");
  const isAuthPage = event.url.pathname.startsWith("/login");

  // SKENARIO 1: Akses rute proteksi tapi belum login
  if (isProtectedRoute && !session) {
    const fromUrl = event.url.pathname + event.url.search;
    throw redirect(307, `/login?redirectTo=${encodeURIComponent(fromUrl)}`);
  }

  // SKENARIO 2: Sudah login tapi maksa akses halaman login/register
  if (isAuthPage && session) {
    throw redirect(303, "/dashboard");
  }

  // Masukkan data user ke locals agar bisa diakses di +page.server.ts manapun
  if (session) {
    event.locals.session = session.session;
    event.locals.user = session.user;
  }

  // Selalu jalankan svelteKitHandler agar library bekerja normal
  return svelteKitHandler({ event, resolve, auth, building });
};
