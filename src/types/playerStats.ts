export interface PlayerStatsData {
  player_id: string;
  game_id: string;
  lifetime: Lifetime;
  segments: Segment[];
}

export interface Lifetime {
  "Recent Results": string[];
  "Average K/D Ratio": string;
  Wins: string;
  "Total Headshots %": string;
  "Win Rate %": string;
  Matches: string;
  "Average Headshots %": string;
  "K/D Ratio": string;
  "Longest Win Streak": string;
  "Current Win Streak": string;
}

export interface Segment {
  img_small: string;
  img_regular: string;
  stats: Stats;
  type: string;
  mode: string;
  label: string;
}

export interface Stats {
  "Average Penta Kills": string;
  "Average K/D Ratio": string;
  "Average K/R Ratio": string;
  "Average Kills": string;
  Kills: string;
  Assists: string;
  "K/D Ratio": string;
  "Total Headshots %": string;
  Wins: string;
  "Quadro Kills": string;
  "Average Headshots %": string;
  Rounds: string;
  "Average Deaths": string;
  "Average MVPs": string;
  "Average Quadro Kills": string;
  "Triple Kills": string;
  "Headshots per Match": string;
  MVPs: string;
  "Penta Kills": string;
  Matches: string;
  "Average Triple Kills": string;
  "Win Rate %": string;
  Headshots: string;
  "K/R Ratio": string;
  "Average Assists": string;
  Deaths: string;
}
