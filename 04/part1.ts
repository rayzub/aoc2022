import fs from "fs";

const rawAssignments = (() =>
  fs
    .readFileSync(`${__dirname}/assignments.txt`, { encoding: "utf8" })
    .split("\n"))();

const computeOverlappingAssignments = (assignments: string[]): number => {
  return assignments
    .map((assignmentBlock) =>
      assignmentBlock
        .split(",")
        .map((bounds) => bounds.split("-").map((bound) => parseInt(bound)))
    )
    .map(
      ([[boundA, boundB], [boundC, boundD]]) =>
        (boundA <= boundC && boundD <= boundB) ||
        (boundC <= boundA && boundB <= boundD)
    )
    .filter(Boolean)
    .length;
};

console.log(computeOverlappingAssignments(rawAssignments));
