import Layouts from "./layout/Layouts";
import DashboardLayout from "./layout/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Oder from "./pages/Oder";
import Login from "./pages/auth/Login";
import Admindashboard from "./pages/adminpages/Admindashboard";
import Signup from "./pages/auth/Signup";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/Ooder" element={<Oder />} />
        </Route>

        {/* Fot Dashboard */}

        <Route element={<DashboardLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Admindashboard/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Route>


      </Routes>
    </>
  );
}

export default App;
