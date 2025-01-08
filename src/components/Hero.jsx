import { Link } from "react-router";

function Hero() {
  return (
    <section id="hero" className="pb-24 relative overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse justify-center lg:justify-between items-center space-y-8 bg-lightSansJuanBlue lg:flex-row md:space-y-0 md:space-x-12 ">
        <div className="max-w-xl mx-8 flex flex-col justify-center items-center lg:items-start space-y-4 md:mx-0  ">
          <h1 className="font-serif  text-4xl text-center text-sanJuanBlue lg:text-left md:text-5xl lg:text-7xl ">
            Start building with our APIs for absolutely free.
          </h1>

          <div className="flex flex-col space-y-6 items-center w-full md:w-[70%] md:space-y-0 md:flex-row md:shadow-md md:rounded-full md:bg-white ">
            <input
              type="text"
              placeholder="Enter email address"
              className="w-[80%] p-3 font-semibold text-sm rounded-full md:rounded-l-full relative text-lightSanJuanBlue focus:outline-none "
            />

            <button className="w-[80%] md:w-[173px] bg-darkPink font-semibold hover:bg-charmPink  text-sm text-linkWaterWhite p-3 rounded-full">
              Schedule a demo
            </button>
          </div>
          <p className="text-lightSanJuanBlue ml-2 font-base ">
            Have any questions?{" "}
            <Link to="/contact" className="text-mirageBlue">
              Contact Us
            </Link>
          </p>
        </div>
        <div className="md:w-full flex justify-center  ">
          <img
            src="./assets/home/desktop/illustration-phone-mockup.svg"
            className="w-[70%] md:w-[50%]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
