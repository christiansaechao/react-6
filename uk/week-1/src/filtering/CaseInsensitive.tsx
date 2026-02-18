import ProblemCard from "../extras/ProblemCard";

export const CaseInsensitive = () => {
  const names = ["Ava", "liam", "Noah", "MIA", "Zoe"];

  const hasA = names.filter(name => name.toLowerCase().includes('a'))
  return (
    <ProblemCard
      title="Filter 05 — Case-insensitive filtering"
      method="filter"
      question='Render only names that include the letter "a" (case-insensitive).'
      dataPreview={names}
    >
      {hasA.map((name) => 
        <div>{name}</div>
      )}
    </ProblemCard>
  );
};
