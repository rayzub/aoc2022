import fs from "fs";

const rawAssignments = (() =>
  fs
    .readFileSync(`${__dirname}/assignments.txt`, { encoding: "utf8" })
    .split("\n"))();

const computeLooseOverlappingAssignments = (assignments: string[]): number => {
  return (
    assignments
      .map((assignmentBlock) =>
        assignmentBlock
          .split(",")
          .map((bounds) => bounds.split("-").map((bound) => parseInt(bound)))
      )
      .map(
        ([[boundA, boundB], [boundC, boundD]]) =>
          !(boundB < boundC || boundD < boundA)
      )
      .filter(Boolean)
      .length
  );
};

console.log(computeLooseOverlappingAssignments(rawAssignments));
