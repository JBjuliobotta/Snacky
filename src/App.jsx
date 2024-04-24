import { BrowserRouter } from "react-router-dom";
import Foot from "./components/Foot.jsx";
import ProductDetail from "./components/pages/ProductDetail.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <header></header>
        <main>
          <ProductDetail />
        </main>
        <footer>
          <Foot />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
