import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Spinner from "../Spinner";
import Toaster from "../Toaster";

const FEEDBACK_API_URL = import.meta.env.VITE_FEEDBACK_API_URL;

const Feedback = () => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isToasterVisible, setIsToasterVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const Email = {
        from: "Acme <onboarding@resend.dev>",
        to: "ritesh.poudel.34@gmail.com",
        name,
        email,
        messageBody: value,
      };
      const response = await axios.post(`${FEEDBACK_API_URL}/feedback`, Email);
      if (response.data) {
        console.log(response.data);
        setIsToasterVisible(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-purple-200 pt-8">
      <h1 className="text-2xl font-bold text-purple-800">Send Feedback</h1>
      <p className="text-sm text-gray-500">
        Your feedback helps us improve this service
      </p>
      <form
        className="w-full sm:w-1/2 h-full flex flex-col items-center justify-center gap-4 px-5 py-6 "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full h-10 bg-white rounded-md p-2 focus:outline-purple-800"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          className="w-full h-10 bg-white rounded-md p-2 focus:outline-purple-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <div className="custom-quill w-full h-full">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="w-full h-full bg-white rounded-md p-2 "
          />
        </div>
        <button
          type="submit"
          className="w-full h-10 bg-purple-500 text-white rounded-md p-2 flex justify-center items-center"
        >
          {isSending ? <Spinner /> : "Submit"}
        </button>
      </form>
      {isToasterVisible && (
        <Toaster
          message="Feedback submitted successfully ✅"
          onClose={() => setIsToasterVisible(false)}
        />
      )}
    </div>
  );
};

export default Feedback;
