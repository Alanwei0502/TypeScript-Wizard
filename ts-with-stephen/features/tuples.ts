const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type Color = string;
type Carbonated = boolean;
type Sugar = number;
type Drink = [Color, Carbonated, Sugar];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['green', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
