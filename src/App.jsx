import NavBar from "./components/NavBar.jsx";
import Foot from "./components/Foot.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Administration from "./components/pages/Administration.jsx";
import CreateProducts from "./components/sections/CreateProducts.jsx";
import EditProduct from "./components/sections/EditProduct.jsx";
import UserContext from "./components/context/UserContext.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Error404 from "./components/pages/Error404.jsx";
import AboutUs from "./components/pages/AboutUs.jsx";
import Contact from "./components/pages/Contact.jsx";
import ProductDetail from "./components/pages/ProductDetail.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const SaveAuth=(auth)=>{
    sessionStorage.setItem("auth", JSON.stringify(auth));
  };
  const GetAuth=()=>{
    return JSON.parse(sessionStorage.getItem("auth"));
  };
  const RemoveAuth=()=>{
    sessionStorage.removeItem("auth");
  };

  useEffect(()=>{
    const session=GetAuth();
    if (session){
      setCurrentUser(session)
    }
    return ()=>{
      setCurrentUser(undefined);
    }

  },[])

  useEffect(()=>{
    if (currentUser!==undefined){
      axios.defaults.headers.common["Authorization"]=`Bearer ${currentUser.token}`;
    }else {
      delete axios.defaults.headers.common["Authorization"];
    }
  },[currentUser])

  return (
    <>
      <UserContext.Provider value={{ currentUser, setCurrentUser, SaveAuth, GetAuth, RemoveAuth }}>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <main>
            {<Routes>
              <Route path="/" element={<Home />} />

              {currentUser !== undefined && currentUser.role === "Admin" && (
                <Route path="/administration" element={<Administration />} />
              )}

              <Route path="/create-products" element={<CreateProducts />} />
              <Route path="/edit/:id" element={<EditProduct />} />
              <Route path="/*" element={<Error404/>}/>
              <Route path="/about-us" element={<AboutUs/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>}
            <ProductDetail/>
          </main>
          <footer>
            <Foot />
          </footer>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
