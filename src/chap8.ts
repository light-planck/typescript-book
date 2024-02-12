import path from "path";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../uhyo.txt");

const errorAfter1ms = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1));
  throw new Error("Timeout!");
};

const data = await Promise.race([readFile(dataFile, "utf-8"), errorAfter1ms()]);

const count = data
  .split("\n")
  .reduce((acc, line) => acc + (line.match(/uhyo/g) || []).length, 0);
console.log(count);
