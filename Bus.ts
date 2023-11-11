import { Vehicle } from "./Vehicle";
import { Point } from "./Point";

export class Bus implements Vehicle {
  travelTo(point: Point): void {
    console.log(`Bus x: ${point.x} y: ${point.y} konumuna gidiyor.`);
  }
}
