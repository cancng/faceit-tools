import axios from "axios";
import { type PlayerData } from "../../../types/playerData";
import { env } from "@/env.mjs";

export async function fetchPlayer(username: string) {
  try {
    const response = await axios.get<PlayerData>(
      `${env.FACEIT_OPEN_URL}/players?nickname=${username}&game=csgo`,
      {
        headers: {
          Authorization: "Bearer ff868eaf-14cb-4621-afaf-c2aca0d24412",
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
