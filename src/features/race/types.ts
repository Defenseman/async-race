export type RaceState = {
  runningCar: Record<number, boolean>;
  animationParams: Record<number, { velocity: number; distance: number }>;
  shouldReset: Record<number, boolean>;
};
