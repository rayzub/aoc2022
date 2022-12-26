import fs from "fs";

const rawEncryptedStrategies = (() =>
  fs.readFileSync(`${__dirname}/strategies.txt`, { encoding: "utf8" }))();

// Map possible outcomes -> needed action -> points;
const possiblePairOutcomes: {
  [key: string]: { [key: string]: number };
} = {
  A: { X: 3, Y: 4, Z: 8 },
  B: { X: 1, Y: 5, Z: 9 },
  C: { X: 2, Y: 6, Z: 7 },
};

const computePairsOutcome = (strategies: string): number => {
  const totalScoreOutcome = strategies
    .split("\n")
    .map((pair) => pair.split(" "))
    .map((round) => possiblePairOutcomes[round[0]][round[1]])
    .reduce((a, b) => a + b, 0);
  return totalScoreOutcome;
};

console.log(computePairsOutcome(rawEncryptedStrategies));
