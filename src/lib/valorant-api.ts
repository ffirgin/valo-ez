import { Agent } from "@/types/Agents.type";
import { Maps } from "@/types/Maps.type";
import { Weapon } from "@/types/Weapons.type";

const BASE_URL = "https://valorant-api.com/v1";

// Riot's static game data only changes on patch days, so a day-long cache
// avoids re-fetching the same payload on every page request.
const REVALIDATE_SECONDS = 60 * 60 * 24;

type ApiResponse<T> = {
  status: number;
  data: T;
};

async function fetchValorantApi<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`Valorant API request to ${path} failed with status ${res.status}`);
  }

  const json: ApiResponse<T> = await res.json();
  return json.data;
}

export const getAgents = () => fetchValorantApi<Agent[]>("/agents");
export const getAgent = (uuid: string) => fetchValorantApi<Agent>(`/agents/${uuid}`);

export const getMaps = () => fetchValorantApi<Maps[]>("/maps");
export const getMap = (uuid: string) => fetchValorantApi<Maps>(`/maps/${uuid}`);

export const getWeapons = () => fetchValorantApi<Weapon[]>("/weapons");
export const getWeapon = (uuid: string) => fetchValorantApi<Weapon>(`/weapons/${uuid}`);
