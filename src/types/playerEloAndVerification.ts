export interface EloAndVerificationData {
  code: string;
  env: string;
  message: string;
  payload: EloAndVerificationPayload[];
  time: number;
  version: string;
}

export interface EloAndVerificationPayload {
  position: number;
  user: EloAndVerificationUserPayload;
  elo: number;
  skillLevel: number;
  verificationLevel: number;
  globalPosition: number;
}

export interface EloAndVerificationUserPayload {
  id: string;
  nickname: string;
  country: string;
}
