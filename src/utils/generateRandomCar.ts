const CARS_TO_GENERATE = 1000;
const HEX_COLOR_MAX = 16777215;
const HEX_RADIX = 16;

export const generateRandomCar = () => {
  const name = `Car # ${Math.floor(Math.random() * CARS_TO_GENERATE)}`;
  const color = `
    #${Math.floor(Math.random() * HEX_COLOR_MAX).toString(HEX_RADIX)}
    `;
  return { name, color };
};
