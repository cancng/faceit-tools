import axios from "axios";
import { type PlayerData } from "../../../types/playerData";

export async function fetchPlayer(username: string) {
  try {
    const response = await axios.get<PlayerData>(
      // `${env.FACEIT_OPEN_URL}/players?nickname=${username}&game=csgo`,
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
