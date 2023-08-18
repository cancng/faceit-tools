import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { fetchPlayer } from "../controllers/player.controller";
import {
  fetchQueueBans,
  fetchSheriffBans,
} from "../controllers/ban.controller";

export const openFaceitRouter = createTRPCRouter({
  getBans: publicProcedure
    .input(
      z.object({
        username: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const playerData = await fetchPlayer(input.username);

      const playerId = playerData.player_id;

      const sheriffBansData = await fetchSheriffBans(playerId);
      const queueBansData = await fetchQueueBans(playerId);

      return {
        result: {
          sheriffBans: sheriffBansData.payload,
          queueBans: queueBansData.payload,
        },
      };
    }),
});
