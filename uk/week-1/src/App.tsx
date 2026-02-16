import "./App.css";
import { Button } from "./components/Button";

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

function App() {
  return (
    <>
      <Button text="button 1" variant="outline" />
      <Button text="button 2" variant="transparent" />
    </>
  );
}

export default App;
