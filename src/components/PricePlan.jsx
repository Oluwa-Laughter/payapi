const pricePlanData = [
  {
    title: "Free",
    description:
      "Build and test using our core set of products with up to 100 API requests ",
    price: "$0.00",
  },
  {
    title: "Basic",
    description:
      "Launch your project with unlimited requests and no contractual minimums",
    price: "$249.00",
  },
  {
    title: "Premium",
    description:
      "Get tailored solutions, volume pricing, and dedicated support for your team. ",
    price: "$499.00",
  },
];

const featuresData = [
  "Transactions",
  "Auth",
  "Identity",
  "Investments",
  "Assests",
  "Liabilities",
  "Income",
];

function Features() {
  return (
    <div className="flex flex-col items-start lg:items-start space-y-3 ">
      {featuresData.map((feature, index) => (
        <div className="flex items-center space-x-5 " key={index}>
          <img src="/assets/shared/desktop/icon-check.svg" alt="" />
          <p className="text-sanJuanBlue font-sans text-lg tracking-tight">
            {feature}
          </p>
        </div>
      ))}
    </div>
  );
}

function PricePlan() {
  return (
    <section className="container mx-auto lg:py-24 px-8 lg:px-0 py-12 ">
      <div className="grid grid-rows-1 md:grid-cols-3 gap-8">
        {pricePlanData.map((plan, index) => (
          <div
            className="flex flex-col space-y-8 items-center lg:items-start"
            key={index}
          >
            <h3 className="font-serif text-3xl text-darkPink capitalize text-center lg:text-left lg:text-4xl">
              {plan.title} plan
            </h3>
            <p className="text-lightSanJuanBlue font-sans py-4 text-sm text-center lg:text-left">
              {plan.description}
            </p>

            <h2 className="font-serif text-5xl text-center font-bold text-sanJuanBlue">
              {plan.price}
            </h2>

            <div className="w-full h-0.5 bg-gray-400"></div>

            <Features />

            <div className="w-full h-0.5 bg-gray-400"></div>

            <button className="w-[168px] p-3 rounded-full border-2 font-semibold  border-sanJuanBlue text-sanJuanBlue bg-linkWaterWhite hover:text-linkWaterWhite hover:bg-sanJuanBlue transition-colors duration-300">
              Request Access
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricePlan;
