// let number = 5;
// number = "a";

let a: number = 5;
let b: string;
let c: boolean;
let d: any;
let e: number[];
let f: Array<number>;
let g: any[] = [1, "a", true];
let h: [string, number, boolean];

const creditPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {
  kredi = 0,
  havale = 1,
  kapidaodeme = 2,
  eft = 3,
}

let kredi = Payment.kredi;
let havale = Payment.havale;
let eft = Payment.eft;
