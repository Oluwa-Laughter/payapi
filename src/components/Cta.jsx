function Cta() {
  return (
    <section className="p-1 pb-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between space-y-4 lg:space-y-0">
        <h2 className="font-serif text-4xl md:text-5xl text-mirageBlue">
          Ready to start?
        </h2>
        <div className="flex flex-col space-y-4 items-center md:space-y-0 md:flex-row md:shadow-md md:rounded-full md:bg-white w-[70%] md:w-auto ">
          <input
            type="text"
            placeholder="Enter email address"
            className="w-full p-2.5 font-semibold text-sm rounded-full md:rounded-l-full relative text-lightSanJuanBlue focus:outline-none "
          />

          <button className="w-full md:w-[173px] bg-darkPink font-semibold hover:bg-charmPink  text-sm md:text-xs text-linkWaterWhite p-3 rounded-full">
            Schedule a demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
