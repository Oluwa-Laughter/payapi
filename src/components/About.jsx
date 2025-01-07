const images = [
  {
    id: 1,
    src: "assets/shared/desktop/tesla.svg",
  },
  {
    id: 2,
    src: "assets/shared/desktop/microsoft.svg",
  },
  {
    id: 3,
    src: "assets/shared/desktop/hewlett-packard.svg",
  },
  {
    id: 4,
    src: "assets/shared/desktop/oracle.svg",
  },
  {
    id: 5,
    src: "assets/shared/desktop/google.svg",
  },
  {
    id: 6,
    src: "assets/shared/desktop/nvidia.svg",
  },
];

function About() {
  return (
    <section className="relative overflow-hidden bg-mirageBlue text-white p-12 md:p-24">
      <div className="bg-circle -left-[6px] -top-[548px] md:-left-[235px] md:-top-[359px]"></div>
      <div className="container mx-auto flex flex-col-reverse items-center gap-12  lg:justify-between lg:space-x-12 lg:flex-row ">
        <div className="flex flex-col items-center justify-center z-50 lg:items-start max-w-xl space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif text-center text-linkWaterWhite lg:text-start ">
            Who we work with
          </h2>
          <p className="font-sans text-sm text-center md:text-start text-gray-400">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>

          <button className="w-[129px] py-3 bg-mirageBlue rounded-full text-white border-2 border-linkWaterWhite hover:bg-linkWaterWhite  hover:text-mirageBlue">
            About Us
          </button>
        </div>

        <div className="max-w-2xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 text-white ">
            {images.map((image) => (
              <img src={image.src} key={image.id} alt={image.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
