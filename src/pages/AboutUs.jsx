function AboutUs() {
  return (
    <>
      <About />
      <AboutImage />
      <TeamOffice />
      <CulturePeople />
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
    <section className="relative overflow-x-hidden w-full pb-8">
      <picture>
        <source
          media="(max-width: 480px)"
          srcSet="assets/about/mobile/image-team-members.jpg"
        />
        <source
          media="(max-width: 768px)"
          srcSet="assets/about/tablet/image-team-members.jpg"
        />
        <source
          media="(max-width: 976px)"
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
    <section className="mt-16">
      <div className="container mx-auto flex flex-col md:flex-row space-x-0 md:space-x-24 items-center space-y-10 md:space-y-0">
        <div className=" w-[350px] md:border-t-2 md:border-b-2 border-[#979797] border-t-2 py-4 p flex flex-col space-y-2 items-center md:items-start">
          <p className="capitalize font-sans text-sm text-sanJuanBlue">
            Team members
          </p>
          <h2 className="font-serif text-5xl font-bold text-darkPink">300+</h2>
        </div>
        <div className=" w-[350px] md:border-t-2 md:border-b-2 border-[#979797] flex flex-col md:py-4 space-y-2 items-center md:items-start">
          <p className="capitalize font-sans text-sm text-sanJuanBlue">
            Offices in the US
          </p>
          <h2 className="font-serif text-5xl font-bold text-darkPink">3</h2>
        </div>
        <div className=" w-[350px] md:border-t-2 md:border-b-2 border-[#979797] border-b-2 py-4 flex flex-col space-y-2 items-center md:items-start">
          <p className="capitalize font-sans text-sm text-sanJuanBlue">
            Transactions analyzed
          </p>
          <h2 className="font-serif text-5xl font-bold text-darkPink">10M+</h2>
        </div>
      </div>
    </section>
  );
}

function CulturePeople() {
  return (
    <section className="pt-16">
      <div className="container lg:max-w-6xl mx-auto my-8">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 items-center md:justify-between md:items-start px-8 md:px-0 ">
          <h3 className="font-serif text-3xl md:text-4xl text-sanJuanBlue min-w-64 text-center md:text-start font-semibold ">
            The Culture
          </h3>

          <p className="text-center font-sans tracking-wide text-sm font-normal text-lightSanJuanBlue md:text-start block max-w-xl ">
            We strongly believe there&apos;s always an opportunity to learn from
            each other outside of day-to-day work, whether it&apos;s
            company-wide offsites, internal hackathons, or co-worker meetups. We
            always value cross-team collaboration and diversity of thought, no
            matter the job title.
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 pt-16 items-center md:justify-between md:items-start pb-10 px-8 md:px-0">
          <h3 className="font-serif text-3xl md:text-4xl text-sanJuanBlue min-w-64 text-center md:text-start font-semibold ">
            The People
          </h3>

          <p className="text-center font-sans tracking-wide text-sm font-normal text-lightSanJuanBlue md:text-start block max-w-xl ">
            We&apos;re all passionate about building a more efficient and
            inclusive financial infrastructure together. At PayAPI, we have
            diverse backgrounds and skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
