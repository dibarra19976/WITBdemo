import { NavBarDemo } from "./components/NavBarDemo";
import { Home } from "./components/views/Home";
function App() {
  return (
    <>
      <NavBarDemo />
      {/* here would go react router */}
      <Home />
    </>
  );
}

export default App;
