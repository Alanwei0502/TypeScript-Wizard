class Vehicle {
  private honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    // this.honk();
  }
}

const car = new Car();
// car.drive();

class Vehicle1 {
  constructor(public color: string) {}
}

class Car1 extends Vehicle1 {
  constructor(private wheels: number, color: string) {
    super(color);
  }
}

const car1 = new Car1(4, 'blue');

// car1.wheels;
car1.color; // 'blue'

export default {};
