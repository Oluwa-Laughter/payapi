const financesObj = [
  {
    id: 1,
    image: "assets/home/desktop/icon-personal-finances.svg",
    title: "Personal Finances",
    text: "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ",
  },
  {
    id: 2,
    image: "assets/home/desktop/icon-banking-and-coverage.svg",
    title: "Banking & Coverage",
    text: "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
  },
  {
    id: 3,
    image: "assets/home/desktop/icon-banking-and-coverage.svg",
    title: "Consumer Payments",
    text: "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
  },
];

function Finances() {
  return (
    <section className="py-24">
      <div className="container mx-auto grid grid-rows-1 md:grid-cols-3 items-center gap-20">
        {financesObj.map((fin) => (
          <div
            key={fin.id}
            className="flex flex-col items-center space-y-6 p-4"
          >
            <img src={fin.image} className="w-28 h-28" alt="" />
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-sanJuanBlue ">
              {fin.title}
            </h3>
            <p className="text-center text-sm font-sans text-gray-500">
              {fin.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Finances;
