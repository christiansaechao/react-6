import React from "react";
import ProblemCard from "../extras/ProblemCard";

/**
 * Is my searchTerm in my current item
 */

export const EmptyState = () => {
  const items = ["Apple", "Banana", "Orange", "Kiwi", "Pinecone", "Lemons"];
  const searchTerm = "o";

  return (
    <ProblemCard
      title="Filter 09 — Empty state handling"
      method="filter"
      question='Filter by searchTerm. If no results, show "No results found".'
      dataPreview={{ items, searchTerm }}
    >
      {items
        .filter((item) => item.toLowerCase().includes(searchTerm))
        .map((item) => {
          return <div>{item}</div>;
        })}
    </ProblemCard>
  );
};
