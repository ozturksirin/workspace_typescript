// let number = 5;
// number = "a";
var a = 5;
var b;
var c;
var d;
var e;
var f;
var g = [1, "a", true];
var h;
var creditPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["kapidaodeme"] = 2] = "kapidaodeme";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
var kredi = Payment.kredi;
var havale = Payment.havale;
var eft = Payment.eft;