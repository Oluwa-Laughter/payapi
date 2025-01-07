import { Link } from "react-router";

function Hero() {
  return (
    <section id="hero" className="pb-24">
      <div className="bg-circle -top-[600px] md:-top-1/4 md:-right-64" />
      <div className="container mx-auto flex flex-col-reverse justify-center lg:justify-between items-center space-y-8 bg-lightSansJuanBlue lg:flex-row md:space-y-0 md:space-x-12 ">
        <div className="max-w-xl mx-8 flex flex-col justify-center items-center lg:items-start space-y-4 md:mx-0  ">
          <h1 className="font-serif  text-4xl text-center text-sanJuanBlue lg:text-left md:text-5xl lg:text-7xl ">
            Start building with our APIs for absolutely free.
          </h1>

          <div className="flex shadow-md rounded-full bg-white ">
            <input
              type="text"
              placeholder="Enter email address"
              className="w-auto p-3 font-semibold text-sm rounded-l-full relative text-lightSanJuanBlue focus:outline-none "
            />

            <button className="w-[173px] bg-darkPink font-semibold text-sm text-linkWaterWhite p-3 rounded-full">
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
            className="w-1/2 md:w-[50%]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
