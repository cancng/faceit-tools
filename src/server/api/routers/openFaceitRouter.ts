import { z } from "zod";
import {
  fetchQueueBans,
  fetchSheriffBans,
} from "../controllers/ban.controller";
import { fetchPlayer } from "../controllers/player.controller";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const openFaceitRouter = createTRPCRouter({
  getPlayer: publicProcedure
    .input(z.object({ username: z.string() }))
    .mutation(async ({ input }) => {
      const playerData = await fetchPlayer(input.username);
      if (!playerData) {
        throw new Error("Player data not found.");
      }
      return {
        result: playerData,
      };
    }),
  getBans: publicProcedure
    .input(
      z.object({
        username: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const playerData = await fetchPlayer(input.username);
      if (!playerData) {
        throw new Error("Player data not found.");
      }

      const playerId = playerData.id;

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
