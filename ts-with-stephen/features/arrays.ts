const carMakers: string[] = [];
const carMakers1 = ['ford', 'toyota', 'chevy'];

const dates: Date[] = [];
const dates1 = [new Date(), new Date()];

const carsByMake: string[][] = [];
const carsByMake1 = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers1[0]; // const car: string;
const myCar = carMakers1.pop();

// Prevent incompatible values
// carMakers1.push(100); // error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Help with 'map'
carMakers1.map((car): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
