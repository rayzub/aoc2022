import fs from "fs";

const rawRuckSackEntries = (() =>
  fs
    .readFileSync(`${__dirname}/rucksack_items.txt`, { encoding: "utf8" })
    .split("\n"))();

const getItemPriority = (item: string): number => {
  return (
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(item) + 1
  );
};

const findCommonBadgePriority = (ruckSackEntries: string[]): number => {
  const groupedRucksackEntries: string[][][] = [];
  for (let i = 0; i < ruckSackEntries.length; i++) {
    groupedRucksackEntries.push(
      [ruckSackEntries[i++], ruckSackEntries[i++], ruckSackEntries[i]].map(
        (entry) => entry.split("")
      )
    );
  }

  const totalBadgePriority = groupedRucksackEntries
    .map(([comp1, comp2, comp3]) =>
      comp1.filter((a) => comp2.includes(a) && comp3.includes(a))
    )
    .map(([a]) => getItemPriority(a))
    .reduce((a, b) => a + b);

  return totalBadgePriority;
};

console.log(findCommonBadgePriority(rawRuckSackEntries));
