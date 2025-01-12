import { useEffect } from "react";
import PriceHeader from "../components/PriceHeader";
import PricePlan from "../components/PricePlan";

function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PriceHeader />
      <PricePlan />
    </>
  );
}

export default Pricing;
