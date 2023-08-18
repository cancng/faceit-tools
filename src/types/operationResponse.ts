export interface OperationResponse {
  code: string;
  env: string;
  message: string;
  payload: (OperationPayload1 | OperationPayload2)[];
  time: number;
  version: string;
}

export interface OperationPayload1 {
  id: string;
  version: number;
  createdAt: string;
  lastModified: string;
  organizerId: string;
  entityId: null | string;
  entityType: null | string;
  queueId: null | string;
  userId: string;
  nickname: string;
  type: string;
  reason: string;
  banStart: string;
  banEnd: string;
  expired: boolean;
  createdBy: {
    userId: string;
    nickname: string;
  };
  updatedBy: {
    userId: string;
    nickname: string;
  };
}

export interface OperationPayload2 {
  nickname: string;
  type: string;
  reason: string;
  game: string;
  starts_at: string;
  ends_at: string;
  user_id: string;
}
