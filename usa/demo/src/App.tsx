import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";

import { Button } from "./components/Button";

/**
 * 1. Create Component
 * 2. Export Component
 * 3. Import Component where we're using it
 * 4. Use the component
 */

/**
 * 1. Create a User Card Component, display name and email in component
 * 2. Pass name and email as props
 * 3. Instantiate 3 instances of your User Card Component
 */

function App() {
  const users = [
    { id: 1, name: "Tony", email: "test@email.com" },
    { id: 2, name: "Claire", email: "test@email.com" },
    { id: 3, name: "Phil", email: "test@email.com" },
  ];

  return (
    <>
      <div className="text-red-500 w-full bg-orange-800 flex justify-between items-center gap-10">
        <Button buttonText="Button 1" />
        <Button buttonText="Button 2" />
      </div>
    </>
  );
}

export default App;
