const sequence = (left: number, right: number): number[] => {
  return [...Array(right - left + 1)].map((_, i) => i + left);
};

const getFizzBuzzString = (i: number): string => {
  if (i % 3 === 0 && i % 5 === 0) {
    return "FizzBuzz";
  }
  if (i % 3 === 0) {
    return "Fizz";
  }
  if (i % 5 === 0) {
    return "Buzz";
  }
  return i.toString();
};

const map = <T, U>(elements: T[], callback: (element: T) => U): U[] => {
  const result = [];
  for (const element of elements) {
    result.push(callback(element));
  }
  return result;
};

const main = () => {
  for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
  }
};

const main2 = () => {
  const data = [1, -3, -2, -8, 0, -1];
  const result = map(data, (x) => x >= 0);
  console.log(result);
};

main();
main2();
