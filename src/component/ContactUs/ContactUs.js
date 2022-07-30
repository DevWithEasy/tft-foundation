import emailjs from "@emailjs/browser";
import { BsTelegram, BsFacebook } from "react-icons/bs";
const ContactUs = () => {
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tf4ay6a",
        "template_773kq63",
        e.target,
        "U3ffMFVVK-oG0N8Ps"
      )
      .then((res) => e.target.reset())
      .catch((err) => console.log(err));
  };
  return (
    <div className="space-y-3 p-2">
      <div className="space-y-3">
        <div className="flex  items-center shadow-md bg-gray-50 rounded border hover:shadow-lg">
          <div className="text-blue-500 p-4">
            <BsFacebook size={50} />
          </div>
          <div className="w-9/12 p-1">
            Join our Facebook page and get job circular and event notice in
            facebook. <br />
            <button className="px-2 py-0.5 bg-blue-500 text-white rounded my-2">
              Join here
            </button>
          </div>
        </div>
        <div className="flex  items-center shadow-md bg-gray-50 rounded border hover:shadow-lg">
          <div className="text-blue-500 p-4">
            <BsTelegram size={50} />
          </div>
          <div className="w-9/12 p-1">
            Join our Telegram group and connect all member with chat support
            with get job circular message. <br />
            <button className="px-2 py-0.5 bg-blue-500 text-white rounded my-2">
              Join here
            </button>
          </div>
        </div>
      </div>
      <form
        className="space-y-2 bg-gray-50 shadow-md py-3 px-1 rounded"
        onSubmit={sendMail}
      >
        <input
          type="text"
          name="name"
          className="w-full p-2 rounded border-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter your name"
        />
        <input
          type="text"
          name="email"
          className="w-full p-2 rounded border-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
        />
        <textarea
          name="message"
          rows="4"
          className="w-full p-2 rounded border-2 focus:outline-none focus:border-blue-500"
          placeholder="Write here you tell us "
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="w-20 ml-auto p-2 bg-blue-500 text-white rounded"
        />
      </form>
    </div>
  );
};
export default ContactUs;
