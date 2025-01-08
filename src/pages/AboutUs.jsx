function AboutUs() {
  return (
    <>
      <About />
      <AboutImage />
      <TeamOffice />
    </>
  );
}

function About() {
  return (
    <section className="py-10">
      <div className="container lg:max-w-6xl mx-auto my-8">
        <h2 className="font-serif text-sanJuanBlue font-bold tracking-tight text-center text-4xl md:text-5xl lg:text-6xl lg:text-start lg:p-0 lg:w-[800px]  ">
          We empower innovators by delivering access to the financial system
        </h2>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 pt-16 items-center md:justify-between md:items-start px-8 md:px-0 ">
          <h3 className="font-serif text-3xl md:text-4xl text-sanJuanBlue min-w-64 text-center md:text-start font-semibold ">
            Our Vision
          </h3>

          <p className="text-center font-sans tracking-wide text-sm font-normal text-lightSanJuanBlue md:text-start block max-w-xl ">
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 pt-16 items-center md:justify-between md:items-start pb-10 px-8 md:px-0">
          <h3 className="font-serif text-3xl md:text-4xl text-sanJuanBlue min-w-64 text-center md:text-start font-semibold ">
            Our Business
          </h3>

          <p className="text-center font-sans tracking-wide text-sm font-normal text-lightSanJuanBlue md:text-start block max-w-xl ">
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutImage() {
  return (
    <section className="relative overflow-x-hidden w-full pb-20 ">
      <picture>
        <source
          media="(max-width: 480px)" // sm (mobile)
          srcSet="assets/about/mobile/image-team-members.jpg"
        />
        <source
          media="(max-width: 768px)" // md (tablet)
          srcSet="assets/about/tablet/image-team-members.jpg"
        />
        <source
          media="(max-width: 976px)" // lg (desktop)
          srcSet="assets/about/desktop/image-team-members.jpg"
        />

        <img
          src="assets/about/desktop/image-team-members.jpg"
          className="object-cover w-full"
        />
      </picture>
    </section>
  );
}

function TeamOffice() {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <p className="capitalize">Team members</p>
          <h2 className="font-serif text-4xl font-bold text-">300+</h2>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
