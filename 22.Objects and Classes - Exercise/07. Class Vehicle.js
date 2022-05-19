function vehicleClass(input) {
  class Vehicle {
    constructor(type, model, parts, fuel) {
      (this.type = type),
        (this.model = model),
        (this.fuel = fuel),
        (this.drive = function drive(drive) {
          return (this.fuel -= drive);
        });
      //   this.parts = {
      //       ...parts,
      // quality: parts.engine * parts.power
      //   }
      this.parts = {
        engine: parts.engine,
        power: parts.engine,
        quality: parts.engine * parts.power,
      };
    }
  }

  let parts = { engine: 6, power: 100 };
  let vehicle = new Vehicle("a", "b", parts, 200);
  vehicle.drive(100);
  console.log(vehicle.fuel);
  console.log(vehicle.parts.quality);
}
vehicleClass();
