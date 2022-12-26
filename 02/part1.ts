import fs from "fs";

const rawEncryptedStrategies = (() =>
  fs.readFileSync(`${__dirname}/strategies.txt`, { encoding: "utf8" }))();

// Map possible outcomes -> points won;
const possiblePairOutcomes: { [key: string]: number } = {
  "A X": 4,
  "B X": 1,
  "C X": 7,
  "A Y": 8,
  "B Y": 5,
  "C Y": 2,
  "A Z": 3,
  "B Z": 9,
  "C Z": 6,
};

const computePairsOutcome = (strategies: string): number => {
  const choicePairs = strategies
    .split("\n")
    .map((pair) => possiblePairOutcomes[pair])
    .reduce((a, b) => a + b, 0);
  return choicePairs;
};

console.log(computePairsOutcome(rawEncryptedStrategies));
