import axios from "axios";
import { env } from "../../../env.mjs";
import { type GeneralResponse } from "../../../types/generalResponse";
import {
  type PlayerData,
  type PlayerDataPayload,
} from "../../../types/playerData";
import { type EloAndVerificationData } from "../../../types/playerEloAndVerification";
import { type PlayerStatsData } from "../../../types/playerStats";

export async function fetchPlayer(
  username: string
): Promise<PlayerDataPayload | undefined> {
  try {
    const response = await axios.get<PlayerData>(
      `https://api.faceit.com/users/v1/nicknames/${username}`,
      {
        headers: {
          // Authorization: `Bearer ${env.FACEIT_API_KEY}`,
          Authorization: `Bearer ${process.env.FACEIT_API_KEY2}`,
        },
      }
    );

    return response.data.payload;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const responseError = error.response?.data?.errors[0]?.message;
      if (responseError) {
        throw new Error(responseError);
      }
    }
  }
}

export async function fetchPlayerStats(
  playerId: string
): Promise<PlayerStatsData | undefined> {
  try {
    const response = await axios.get<PlayerStatsData>(
      `${env.FACEIT_OPEN_URL}/players/${playerId}/stats/csgo`,
      {
        headers: {
          Authorization: `Bearer ${process.env.FACEIT_API_KEY}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const responseError = error.response?.data?.errors[0]?.message;
      if (responseError) {
        throw new Error(responseError);
      }
    }
  }
}

export async function fetchRanking(
  playerId: string,
  region: string,
  country?: string
) {
  try {
    const response = await axios.get<GeneralResponse>(
      `https://api.faceit.com/ranking/v1/globalranking/csgo/${region}/${playerId}`,
      {
        params: {
          ...(country && { country }),
        },
        headers: {
          Authorization: `Bearer ${process.env.FACEIT_API_KEY2}`,
        },
      }
    );

    return response.data.payload;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const responseError = error.response?.data?.errors[0]?.message;
      if (responseError) {
        throw new Error(responseError);
      }
    }
  }
}

export async function fetchEloAndVerificationLevel(
  region: string,
  position: number
) {
  try {
    const response = await axios.get<EloAndVerificationData>(
      `https://api.faceit.com/ranking/v1/globalranking/csgo/${region}`,
      {
        params: {
          position: position - 1,
          limit: 1,
        },
        headers: {
          Authorization: `Bearer ${process.env.FACEIT_API_KEY2}`,
        },
      }
    );

    return response.data.payload[0];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const responseError = error.response?.data?.errors[0]?.message;
      if (responseError) {
        throw new Error(responseError);
      }
    }
  }
}
