export type RaceState = {
  runningCars: Record<number, boolean>;
  animationParams: Record<number, { velocity: number; distance: number }>;
};
