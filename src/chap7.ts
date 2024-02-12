import path from "path"
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../uhyo.txt");

const lines = readFileSync(dataFile, "utf-8").split("\n");
const count = lines.reduce(
  (acc, line) => acc + (line.match(/uhyo/g) || []).length,
  0
);
console.log(count);
