import { BrowserRouter, Route } from "react-router";
import Home from "./pages/Home";
import { Routes } from "react-router";
import Layout from "./components/Layout";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<p>Contact</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
