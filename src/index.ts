import { createInterface } from "readline";

const main = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("文字列を入力してください:", (line) => {
    const num = Number(line);
    console.log(num + 1000);
    rl.close();
  });
};

type FooBar = {
  foo: string;
  bar: number;
};

type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};

const obj: FooBarBaz = {
  foo: "foo",
  bar: 1,
  baz: true,
};

const obj2: FooBar = obj;
