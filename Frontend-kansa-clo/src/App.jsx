import Layouts from "./layout/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Oder from "./pages/Oder"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts/>}>
          <Route index element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Collection" element={<Collection/>}/>
          <Route path="/Oder" element={<Oder/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App
