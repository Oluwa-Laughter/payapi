import { BrowserRouter, Route } from "react-router";
import Home from "./pages/Home";
import { Routes } from "react-router";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<p>Pricing</p>} />
          <Route path="/about" element={<p>About</p>} />
          <Route path="/contact" element={<p>Contact</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
