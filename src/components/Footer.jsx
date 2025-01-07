import { Link } from "react-router";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-mirageBlue py-12 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 ">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 ">
          <img src="assets/shared/desktop/logo-footer.svg" alt="" />

          <div className="flex z-50 flex-col space-y-6 pt-6 md:flex-row md:space-y-0 md:space-x-10 md:pt-0 items-center ">
            <Link to="/pricing" className="text-md text-gray-100 ">
              Pricing
            </Link>
            <Link to="/about" className="text-md text-gray-100  ">
              About
            </Link>
            <Link to="/contact" className="text-md text-gray-100 ">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex space-x-8 z-50 items-center ">
          <a href="#">
            <img
              src="/assets/shared/desktop/facebook.svg"
              className="ficon"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="/assets/shared/desktop/twitter.svg"
              className="ficon"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="/assets/shared/desktop/linkedin.svg"
              className="ficon"
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="bg-circle -left-[202px] top-[177px] md:-right-[390px] md:-bottom-[544px]" />
    </footer>
  );
}

export default Footer;
