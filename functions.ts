function getAverage(a: number, b: number, c?: number): string {
  let total = a + b;
  let count = 2;
  if (typeof c !== "undefined") {
    total + c;
    count++;
  }
  const result = total / count;
  return "result :" + result;
}

getAverage(10, 20, 30);
