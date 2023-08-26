import axios from "axios";
import { type OperationResponse } from "../../../types/operationResponse";

export async function fetchSheriffBans(userId: string) {
  const response = await axios.get<OperationResponse>(
    `https://api.faceit.com/sheriff/v1/bans/${userId}`,
  );

  return response.data;
}

// TODO: Pagination
export async function fetchQueueBans(userId: string, offset = 0, limit = 10) {
  const response = await axios.get<OperationResponse>(
    `https://api.faceit.com/queue/v1/ban`,
    {
      params: {
        userId: userId,
        organizerId: "faceit",
        offset: offset,
        limit: limit,
      },
    },
  );

  return response.data;
}
