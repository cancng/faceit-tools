export interface PlayerData {
  result: string;
  payload: PlayerDataPayload;
}

export interface PlayerDataPayload {
  id: string;
  about: string;
  activated_at: Date;
  active_team_id: string;
  avatar: string;
  country: string;
  cover_image_url: string;
  created_at: Date;
  created_by: string;
  flag: string;
  friends: string[];
  games: Games;
  gender: string;
  guest_info: object;
  matching_sound: string;
  memberships: string[];
  nickname: string;
  phone_verified: boolean;
  registration_status: string;
  settings: Settings;
  socials: Socials;
  status: string;
  streaming: Streaming;
  tags: string[];
  updated_by: string;
  user_type: string;
  verified: boolean;
  version: number;
  platforms: Platforms;
}

export interface Games {
  csgo: Csgo;
}

export interface Csgo {
  game_id: string;
  game_name: string;
  faceit_elo: number;
  region: string;
  region_updated_at: Date;
  skill_level: number;
  skill_level_label: string;
  tags: string[];
  elo_refreshed_by_user_at: Date;
}

// export interface GuestInfo {}

export interface Platforms {
  steam: Steam;
}

export interface Steam {
  id: string;
  nickname: string;
  id64: string;
}

export interface Settings {
  language: string;
}

export interface Socials {
  twitter: IValue;
  youtube: IValue;
  facebook: IValue;
}

export type PartialSocials = Partial<Socials>;

export interface IValue {
  value: string;
}

export interface Streaming {
  twitch_id: string;
}
