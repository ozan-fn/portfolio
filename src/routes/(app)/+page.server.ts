import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";

export const load: PageServerLoad = async ({ fetch }) => {
  // Pastikan WAKATIME_API_KEY sudah di-set di file .env
  const wakatimeToken = Buffer.from(env.WAKATIME_API_KEY || "").toString("base64");

  const headers = {
    Authorization: `Basic ${wakatimeToken}`,
  };

  // Fetch Stats (Berdasarkan rentang 7 hari terakhir)
  const fetchStats = async () => {
    try {
      const res = await fetch("https://wakatime.com/api/v1/users/current/stats/last_7_days", { headers });
      if (!res.ok) return null;
      return await res.json();
    } catch (error) {
      return null;
    }
  };

  // Fetch All Time Total
  const fetchAllTime = async () => {
    try {
      const res = await fetch("https://wakatime.com/api/v1/users/current/all_time_since_today", { headers });
      if (!res.ok) return null;
      return await res.json();
    } catch (error) {
      return null;
    }
  };

  return {
    wakaStats: await fetchStats(),
    allTime: await fetchAllTime(),
  };
};
