function Simple() {
  return (
    <section className="relative">
      <div className="hidden lg:block bg-circle -right-1/4 -top-[53px] -z-50 "></div>
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between space-y-10 md:space-y-0">
        <div className="flex justify-center items-center ">
          <img src="assets/home/desktop/illustration-simple-ui.svg" alt="" />
        </div>

        <div className="flex max-w-md flex-col space-y-8 items-center md:items-start ">
          <h2 className="text-3xl md:text-5xl font-serif text-center lg:text-start ">
            Simple UI & UX
          </h2>
          <p className="font-sans text-sm text-center md:text-start text-gray-400">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Simple;
