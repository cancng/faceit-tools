import { type PlayerData } from "@/types/playerData";

function getPlayerId(player: PlayerData) {
  return player.payload.id;
}

export default getPlayerId;
