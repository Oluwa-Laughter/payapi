import { useState } from "react";

function Contact() {
  return (
    <>
      <ContactHeader />
      <ContactForm />
    </>
  );
}

function ContactHeader() {
  return (
    <section className="container mx-auto py-8">
      <h2 className="font-serif text-sanJuanBlue font-bold tracking-tight text-center text-4xl md:text-5xl lg:text-6xl lg:text-start lg:p-0 lg:w-[800px]  ">
        Submit a help request and we’ll get in touch shortly.{" "}
      </h2>
    </section>
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

    if (!name.value || !email.value || !company.value || !title.value) {
      setError(true);
      setErrorMessages({
        name: !name.value ? "Please enter your name" : "",
        email: !email.value ? "Please enter your email" : "",
        company: !company.value ? "Please enter your company" : "",
        title: !title.value ? "Please enter your title" : "",
        message: !message.value ? "Please enter your message" : "",
      });
    }
  }

  return (
    <section className="py-4">
      <div className="container mx-auto">
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
      </div>
    </section>
  );
}
export default Contact;
