export interface PlayerData {
  player_id: string;
  nickname: string;
  avatar: string;
  country: string;
  cover_image: string;
  platforms: {
    steam: string;
  };
  games: {
    csgo: {
      region: string;
      game_player_id: string;
      skill_level: number;
      faceit_elo: number;
      game_player_name: string;
      skill_level_label: string;
      regions: Record<string, unknown>;
      game_profile_id: string;
    };
  };
  settings: {
    language: string;
  };
  friends_ids: string[];
  new_steam_id: string;
  steam_id_64: string;
  steam_nickname: string;
  memberships: string[];
  faceit_url: string;
  membership_type: string;
  cover_featured_image: string;
  infractions: Record<string, unknown>;
  verified: boolean;
  activated_at: string;
}
