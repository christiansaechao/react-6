import React, { useState } from "react";

// Requirements
// State: activeTabId
//  - Render a row of tab buttons from an array:
//  - { id, label, content }
// Clicking a tab shows its content
// Active tab button has a visual indicator (e.g., underline)
// 3 tabs: home, about, contact

// const [variableName, setVariableName] = useState();

const tabItems = [
  {
    id: 1,
    label: "home",
    content: "The home page",
  },
  {
    id: 2,
    label: "about",
    content: "The about page",
  },
  {
    id: 3,
    label: "contact",
    content: "The contact page",
  },
];

export const Tabs = () => {
  const [activeTabContent, setActiveTabContent] = useState("No Active Tab");

  return (
    <div>
      {tabItems.map((tab) => (
        <button onClick={() => setActiveTabContent(tab.content)}>
          {tab.label}
        </button>
      ))}
      {activeTabContent}
    </div>
  );
};
