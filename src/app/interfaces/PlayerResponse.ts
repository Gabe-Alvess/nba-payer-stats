export interface PlayerResponse {
  results: PlayerData[];
}

interface PlayerData {
  id: number;
  player_name: string;
  age: number;
  games: number;
  games_started: number;
  minutes_played: number;
  field_goals: number;
  field_attempts: number;
  field_percent: string;
  three_fg: number;
  three_attempts: number;
  three_percent: string;
  two_fg: number;
  two_attempts: number;
  two_percent: string;
  effect_fg_percent: string;
  ft: number;
  fta: number;
  ft_percent: string;
  ORB: number;
  DRB: number;
  TRB: number;
  AST: number;
  STL: number;
  BLK: number;
  TOV: number;
  PF: number;
  PTS: number;
  team: string;
  season: number;
}
