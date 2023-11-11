interface Point {
  x: number;
  y: number;
}
interface Vehicle {
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  constructor(private _location?: Point, private _color?: string) {}

  travelTo(point: Point): void {
    console.log(
      `taksi x: ${this._location} y:${this._location} dan y: ${this._location} konumuna gidiyor`
    );
  }
  get Location() {
    return this.Location;
  }

  set Location(value: Point) {
    if (value.x < 0 || value.y < 0) {
      throw new Error("Koordinat bilgileri negatif olamaz");
    }
    this._location = value;
  }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });
let currentLocation = taxi_1.Location;

taxi_1.Location = { x: 2, y: 5 };
