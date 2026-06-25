// ChipProps

export type ChipColor = "slate" | "emerald" | "yellow" | "red" | "blue";
// rgy - level colors, blue - person color(manager, hr, etc), grey - normal chips

export type ChipProps = {
  label: string;
  color: ChipColor;
};