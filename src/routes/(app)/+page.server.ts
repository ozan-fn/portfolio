import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
  // Set cache 5 menit (300 detik) di sisi server/browser
  setHeaders({
    "Cache-Control": "public, max-age=300",
  });

  const wakatimeToken = Buffer.from(env.WAKATIME_API_KEY || "").toString("base64");
  const headers = { Authorization: `Basic ${wakatimeToken}` };

  const fetchStats = async () => {
    try {
      const res = await fetch("https://wakatime.com/api/v1/users/current/stats/last_7_days", { headers });
      if (!res.ok) return null;
      return await res.json();
    } catch (error) {
      return null;
    }
  };

  const fetchAllTime = async () => {
    try {
      const res = await fetch("https://wakatime.com/api/v1/users/current/all_time_since_today", { headers });
      if (!res.ok) return null;
      return await res.json();
    } catch (error) {
      return null;
    }
  };

  // Gunakan Promise.all agar fetch berjalan paralel (lebih cepat)
  const [wakaStats, allTime] = await Promise.all([fetchStats(), fetchAllTime()]);

  return { wakaStats, allTime };
};
