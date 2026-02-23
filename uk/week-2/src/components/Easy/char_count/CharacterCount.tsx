import React, { useState } from "react";

// Requirements
// State: text
// Show:
//  - vcharacters used (text.length)
//  - vcharacters remaining (limit = 120)
// If over the limit:
//  - show an error message
//  - disable the “Submit” button

export const CharacterCount = () => {
  const [string, setString] = useState<string>("");
  const [limitPassed, setLimitPassed] = useState<boolean>(false);
  const limit = 20;
  const textLength = string.length;

  React.useEffect(() => {
    if (string.length >= limit) {
      setLimitPassed(true);
    } else {
      setLimitPassed(false);
    }
    console.log("Mounting Component");
  }, [string]);

  return (
    <div className="flex flex-col justify-center items-center bg-slate-300">
      CharacterCount: {string.length}
      <textarea
        className="text-black"
        value={string}
        onChange={(e) => setString(e.target.value)}
        placeholder="type here"
      />
      <button
        disabled={string.length >= limit}
        type="submit"
        onClick={() => alert("being clicked")}
      >
        Submit
      </button>
      {limitPassed && <div> over the limit</div>}
    </div>
  );
};
