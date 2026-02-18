import ProblemCard from "../extras/ProblemCard";

export const EmptyState = () => {
  const items = ["Apple", "Banana", "Orange", "Grape", "Kiwi", "Lemon"];
  const searchTerm = "a";

  const filteredItems = items.filter((item) => item.toLowerCase().includes(searchTerm));
  return (
    <ProblemCard
      title="Filter 09 — Empty state handling"
      method="filter"
      question='Filter by searchTerm. If no results, show "No results found".'
      dataPreview={{ items, searchTerm }}
    >
      {filteredItems.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </ProblemCard>
  );
};
