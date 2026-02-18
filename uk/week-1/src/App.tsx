import "./App.css";
// import { Button } from "./components/Button";

/**
 * 1. Create your component
 * 2. Export
 * 3. Import it where you want to use it
 * 4. use it in the return
 */

/**
 * User Card Component
 * 1. FirstName, LastName, Age | Props passed down
 */

import { CountItems, CartTotal, GroupUsers } from "./reducing";

function App() {
  const isComplete = true;

  return (
    <div className="text-black bg-slate-300">
      {isComplete ? <CountItems /> : <CartTotal />}
    </div>
  );
}

export default App;
