import fs from "fs";

const calorieList = (() =>
  fs.readFileSync(`${__dirname}/calories.txt`, { encoding: "utf8" }))();

const topThreeLargestElfCals = (calorieList: string): number => {
  const [firstElf, secondElf, thirdElf] = calorieList
    .split("\n\n")
    .map((calorieBlock) =>
      calorieBlock
        .split("\n")
        .map((arbitraryCalorie) => parseInt(arbitraryCalorie))
        .reduce((a,b) => a+b)
    )
    .sort((a,b) => b - a);

  return firstElf + secondElf + thirdElf;
};

console.log(topThreeLargestElfCals(calorieList));
