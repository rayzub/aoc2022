import fs from "fs";

const calorieList = (() =>
  fs.readFileSync(`${__dirname}/calories.txt`, { encoding: "utf8" }))();

const largestElfCals = (calorieList: string): number => {
  const individualElfsCalories = calorieList
    .split("\n\n")
    .map((calorieBlock) =>
      calorieBlock
        .split("\n")
        .map((arbitraryCalorie) => parseInt(arbitraryCalorie))
        .reduce((calA, calB) => calA + calB)
    )
    .sort((a, b) => a - b)[0];

  return individualElfsCalories;
};

console.log(largestElfCals(calorieList));
