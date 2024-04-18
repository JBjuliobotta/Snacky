import {BrowserRouter} from "react-router-dom";
import Foot from "./components/Foot.jsx";
import Error404 from "./components/pages/Error404.jsx"
function App() {

    return (
        <>
            <BrowserRouter>
                <header></header>
                <main>
                    <Error404/>
                </main>
                <footer>
                    <Foot/>
                </footer>

            </BrowserRouter>
        </>
    )
}

export default App
