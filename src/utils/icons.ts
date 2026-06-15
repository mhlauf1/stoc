import {
  TrendingUp,
  Handshake,
  Rocket,
  BarChart3,
  Briefcase,
  BriefcaseMedical,
  Music,
  Package as Box,
  ShoppingCart,
  Tv2,
  type LucideIcon,
} from "lucide-react";

// Maps a Sanity `iconKey` string to its Lucide component. Sanity stores the
// key; the front end resolves it here. Keys must match ICON_OPTIONS in
// src/sanity/schemaTypes/constants.ts.
export const iconMap: Record<string, LucideIcon> = {
  trendingUp: TrendingUp,
  handshake: Handshake,
  rocket: Rocket,
  barChart3: BarChart3,
  briefcase: Briefcase,
  briefcaseMedical: BriefcaseMedical,
  music: Music,
  box: Box,
  shoppingCart: ShoppingCart,
  tv2: Tv2,
};

// Falls back to TrendingUp so a missing/renamed key never crashes a page.
export const resolveIcon = (key?: string): LucideIcon =>
  (key && iconMap[key]) || TrendingUp;
