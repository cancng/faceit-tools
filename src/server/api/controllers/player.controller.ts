import axios from "axios";
import { type PlayerData } from "../../../types/playerData";
import { env } from "@/env.mjs";

export async function fetchPlayer(username: string) {
  try {
    const response = await axios.get<PlayerData>(
      `${env.FACEIT_OPEN_URL}/players?nickname=${username}&game=csgo`,
      {
        headers: {
          Authorization: `Bearer ${env.FACEIT_API_KEY}`,
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
