interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic: Vehicle = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle(oldCivic);

interface IPerson {
  name: string;
  age: number;
  introduce(): string;
}

let alan: IPerson = {
  name: 'Alan',
  age: 29,
  introduce() {
    return `Hi, my name is ${this.name}. Nice to meet you!`;
  },
};

interface Reportable {
  summary(): string;
}

const toyota = {
  name: 'toyota',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printToyota = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

printToyota(toyota);

export default {};
