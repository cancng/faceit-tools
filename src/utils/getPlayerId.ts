import { type PlayerData } from "../types/playerData";

function getPlayerId(player: PlayerData) {
  return player.player_id;
}

export default getPlayerId;
