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

// Map each halve, then map each string[][] to common value, parse priority, then reduce array for total priority
const findCommonItemsPriority = (ruckSackEntries: string[]): number => {
  const commonItemsPriority = ruckSackEntries
    .map((item) =>
      [item.slice(0, item.length / 2), item.slice(item.length / 2)].map(
        (compartments) => compartments.split("")
      )
    )
    .map(([comp1, comp2]) => comp1.filter((item) => comp2.includes(item)))
    .map(([a]) => getItemPriority(a))
    .reduce((a, b) => a + b);
  return commonItemsPriority;
};

console.log(findCommonItemsPriority(rawRuckSackEntries));
