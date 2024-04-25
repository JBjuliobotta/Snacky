import { BrowserRouter } from "react-router-dom";
import Foot from "./components/Foot.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <header></header>
        <main></main>
        <footer>
          <Foot />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
