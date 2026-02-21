import ProblemCard from "../extras/ProblemCard";

export const CapitalizeWords = () => {
  const animals = ["dog", "cat", "bird"];

  return (
    <ProblemCard
      title="Map 03 — Capitalize words"
      method="map"
      question="Render each word with the first letter capitalized."
      dataPreview={animals}
    >
      <div>
        {animals.map((animal) => {
          return (
            <div key={animal}>
              <p className="capitalize">Animal: {animal}</p>
            </div>
          );
        })}
      </div>
    </ProblemCard>
  );
};
