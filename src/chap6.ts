export {};

type Some<T> = { tag: "some"; value: T };
type None = { tag: "none" };

type Option<T> = Some<T> | None;

const isSome = <T>(obj: Option<T>): obj is Some<T> => obj.tag === "some";

const printOption = <T>(obj: Option<T>) => {
  if (isSome(obj)) {
    console.log(obj.value);
  }
};

const mapOption = <T, U>(
  obj: Option<T>,
  callback: (param: T) => U
): Option<U> => {
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: callback(obj.value),
      };
    case "none":
      return {
        tag: "none",
      };
  }
};

const doubleOption = (obj: Option<number>): Option<number> => {
  return mapOption(obj, (x) => x * 2);
};

const num: Option<number> = { tag: "some", value: 10 };
const nothing: Option<number> = { tag: "none" };

printOption(num);
printOption(nothing);

console.log(doubleOption(num));
console.log(doubleOption(nothing));
