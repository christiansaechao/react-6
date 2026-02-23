import React, { useState, useEffect } from "react";

// Requirements
// State: activeTabId
//  - Render a row of tab buttons from an array:
//  - { id, label, content }
// Clicking a tab shows its content
// Active tab button has a visual indicator (e.g., underline)
// 3 different tabs
interface Tabs {
  id: number;
  name: string;
  content: string;
}

export const Tabs = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [content, setContent] = useState<string>("");

  const tabs: Tabs[] = [
    { id: 0, name: "Home", content: "something" },
    { id: 1, name: "Support", content: "asdf" },
    { id: 2, name: "Login", content: "somethi345345ng" },
  ];

  useEffect(() => {
     setContent(tabs[0].content);
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTabId(tab.id);
            setContent(tab.content);
          }}
        >
          {tab.name}
        </button>
      ))}
      <div>{content}</div>
    </div>
  );
};
