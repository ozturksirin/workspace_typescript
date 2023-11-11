import { Vehicle } from "./Vehicle";
import { Point } from "./Point";

export class Taxi implements Vehicle {
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
