import { useEffect } from "react";
import About from "../components/About";
import Easy from "../components/Easy";
import Finances from "../components/Finances";
import Hero from "../components/Hero";
import Simple from "../components/Simple";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Easy />
      <Simple />
      <Finances />
    </>
  );
}

export default Home;
