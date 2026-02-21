import React from "react";
import ProblemCard from "../extras/ProblemCard";
// cart.reduce((acc, curr) => , acc default value)

export const CountOccurences = () => {
  const words = [
    "kiwi",
    "kiwi",
    "kiwi",
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple",
    "orange",
    "orange",
  ];

  // acc = 0
  // acc = { word: 1, }
  const count = words.reduce((acc: { [key: string]: number }, word) => {
    acc[word] = (acc[word] || 0) + 1;

    return acc;
  }, {});

  return (
    <ProblemCard
      title="Reduce 07 — Count occurrences"
      method="reduce"
      question="Use reduce() to count how many times each word appears."
      dataPreview={words}
    >
      apple: {count.apple} banana: {count.banana} orange: {count.orange} kiwi:{" "}
      {count.kiwi}
    </ProblemCard>
  );
};
