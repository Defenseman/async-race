// const brands = [
//   'Tesla',
//   'Ford',
//   'Chevrolet',
//   'BMW',
//   'Audi',
//   'Toyota',
//   'Honda',
//   'Nissan',
//   'Mercedes',
//   'Kia',
// ];

// const models = [
//   'Model S',
//   'Mustang',
//   'Camaro',
//   'X5',
//   'A4',
//   'Corolla',
//   'Civic',
//   'Altima',
//   'C-Class',
//   'Sportage',
// ];

const CARS_TO_GENERATE = 1000;
const HEX_COLOR_MAX = 16777215;
const HEX_RADIX = 16;

export const generateRandomCar = () => {
  const name = `Car # ${Math.floor(Math.random() * CARS_TO_GENERATE)}`;
  // const brand = brands[Math.floor(Math.random() * brands.length)];
  // const model = models[Math.floor(Math.random() * models.length)];
  // const name = `${brand} ${model}`;
  const color = `
    #${Math.floor(Math.random() * HEX_COLOR_MAX).toString(HEX_RADIX)}
    `;
  return { name, color };
};
