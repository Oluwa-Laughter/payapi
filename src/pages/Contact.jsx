import { useState } from "react";

const images = [
  {
    id: 1,
    src: "assets/contact/tesla.svg",
  },
  {
    id: 2,
    src: "assets/contact/microsoft.svg",
  },
  {
    id: 3,
    src: "assets/contact/hewlett-packard.svg",
  },
  {
    id: 4,
    src: "assets/contact/oracle.svg",
  },
  {
    id: 5,
    src: "assets/contact/google.svg",
  },
  {
    id: 6,
    src: "assets/contact/nvidia.svg",
  },
];
function validateEmail(text) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(text);
}

function validateText(text) {
  return text.trim() !== "";
}

function Contact() {
  return (
    <>
      <ContactHeader />
      <FormSponsors />
    </>
  );
}

function FormSponsors() {
  return (
    <section className="pb-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-72">
        <ContactForm />
        <CompanyInfo />
      </div>
    </section>
  );
}

function ContactHeader() {
  return (
    <section className="container mx-auto py-8 px-2 md:px-0 ">
      <h2 className="font-serif text-sanJuanBlue font-bold tracking-tight text-center text-4xl md:text-5xl lg:text-6xl lg:text-start lg:p-0 lg:w-[800px]  ">
        Submit a help request and we’ll get in touch shortly.{" "}
      </h2>
    </section>
  );
}

function CompanyInfo() {
  return (
    <div className="flex flex-col items-center lg:items-start p-4 space-y-16  ">
      <h3 className="font-serif text-2xl block max-w-xl lg:text-start lg:text-3xl text-center font-bold text-sanJuanBlue ">
        Join the thousands of innovators that are already building with us
      </h3>

      <div className="max-w-2xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 text-white ">
          {images.map((image) => (
            <img src={image.src} key={image.id} alt={image.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [error, setError] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const [name, email, company, title, message] = e.target.elements;

    if (
      validateText(name.value) &&
      validateEmail(email.value) &&
      validateText(company.value) &&
      validateText(title.value) &&
      validateText(message.value)
    ) {
      setError(true);
      setErrorMessages({});
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-xl p-4 ">
      <div className="flex flex-col w-full p-2 bg-transparent">
        <input
          type="text"
          placeholder="Name"
          className={` ${
            error && "border-red-500 placeholder:text-red-500"
          }  p-4 border border-x-0 text-sanJuanBlue text-lg placeholder:text-lightSanJuanBlue placeholder:hover:text-sanJuanBlue focus:outline-none border-t-0 border-b-1 border-lightSanJuanBlue bg-transparent`}
        />
        {error && (
          <p className="text-red-500 text-sm text-san pl-4 pt-1">
            {errorMessages.name}
          </p>
        )}
      </div>
      <div className="flex flex-col w-full p-2 bg-transparent">
        <input
          type="text"
          placeholder="Email Address"
          className={` ${
            error && "border-red-500 placeholder:text-red-500"
          } p-4 border border-x-0 text-sanJuanBluetext-lg text-lg placeholder:text-lightSanJuanBlue  placeholder:hover:text-sanJuanBlue focus:outline-none border-t-0 border-b-1 border-lightSanJuanBlue bg-transparent`}
        />
        {error && (
          <p className="text-red-500 text-sm text-san pl-4 pt-1">
            {errorMessages.email}
          </p>
        )}
      </div>
      <div className="flex flex-col w-full p-2 bg-transparent">
        <input
          type="text"
          placeholder="Company Name"
          className={` ${
            error && "border-red-500 placeholder:text-red-500"
          } p-4 border border-x-0 text-sanJuanBlue text-lg placeholder:text-lightSanJuanBlue placeholder:hover:text-sanJuanBlue focus:outline-none border-t-0 border-b-1 border-lightSanJuanBlue bg-transparent`}
        />
        {error && (
          <p className="text-red-500 text-sm text-san pl-4 pt-1">
            {errorMessages.company}
          </p>
        )}
      </div>
      <div className="flex flex-col w-full p-2 bg-transparent">
        <input
          type="text"
          placeholder="Title"
          className={` ${
            error && "border-red-500 placeholder:text-red-500"
          }  p-4 border border-x-0 text-sanJuanBlue text-lg placeholder:text-lightSanJuanBlue  placeholder:hover:text-sanJuanBlue focus:text-mirageBlue focus:outline-none border-t-0 border-b-1 border-lightSanJuanBlue bg-transparent`}
        />
        {error && (
          <p className="text-red-500 text-sm text-san pl-4 pt-1">
            {errorMessages.title}
          </p>
        )}
      </div>

      <div className="flex flex-col w-full bg-transparent">
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className={` ${
            error && "placeholder:text-red-500"
          } h-[89px] p-5 w-full bg-transparent resize-none focus:outline-none text-lg  placeholder:hover:text-sanJuanBlue placeholder:text-lightSanJuanBlue `}
        ></textarea>
        <div
          className={`${
            errorMessages.message ? "border-red-500" : ""
          } border-b border-lightSanJuanBlue px-2`}
        ></div>
        {error && (
          <p className="text-red-500 text-sm text-san pl-4 pt-1">
            {errorMessages.message}
          </p>
        )}
      </div>

      <div className="flex items-center space-x-4 py-4 max-w-md mb-4">
        <input
          type="checkbox"
          name="terms"
          className=" w-7 h-7 cursor-pointer accent-darkPink "
          id="term"
        />
        <label
          htmlFor="term"
          className="text-md font-semibold cursor-pointer text-sanJuanBlue"
        >
          Stay up-to-date with company announcements and updates to our API
        </label>
      </div>

      <button className="w-[168px] p-3 rounded-full border-2 font-semibold  border-sanJuanBlue text-sanJuanBlue bg-linkWaterWhite hover:text-linkWaterWhite hover:bg-sanJuanBlue transition-colors duration-300">
        Submit
      </button>
    </form>
  );
}
export default Contact;
