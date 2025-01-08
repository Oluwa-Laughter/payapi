function Easy() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-start md:space-x-7 space-y-6 ">
        <img
          className=" w-[90%] md:w-[50%]"
          src="assets/home/desktop/illustration-easy-to-implement.svg"
          alt=""
        />
        <div className="max-w-lg flex flex-col items-center px-8 md:items-start space-y-8">
          <h2 className="text-3xl font-bold text-sanJuanBlue md:text-5xl font-serif text-center md:text-start ">
            Easy To Implement
          </h2>

          <p className="font-sans text-md text-center md:text-start text-gray-400">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Easy;
