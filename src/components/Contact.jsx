import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

// Success Modal Component
const SuccessModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-gradient-to-r from-[#151030] to-[#1d1836] p-6 rounded-xl border border-green-400 shadow-xl max-w-md w-full"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-500 bg-opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-300 mb-4">
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <button
                onClick={onClose}
                className="py-2 px-5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
          <div
            className="fixed inset-0 bg-black bg-opacity-60 -z-10"
            onClick={onClose}
          ></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Error Modal Component
const ErrorModal = ({ isOpen, onClose, errorMessage }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-gradient-to-r from-[#301515] to-[#361d1d] p-6 rounded-xl border border-red-400 shadow-xl max-w-md w-full"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-red-500 bg-opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Something Went Wrong
              </h3>
              <p className="text-gray-300 mb-4">
                {errorMessage ||
                  "Oops, something went wrong. Please try again later!"}
              </p>
              <button
                onClick={onClose}
                className="py-2 px-5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
          <div
            className="fixed inset-0 bg-black bg-opacity-60 -z-10"
            onClick={onClose}
          ></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Email is invalid";
    }
    if (!form.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        "service_la7v32y",
        "template_o0hrqi6",
        {
          from_name: form.name,
          to_name: "Joshua",
          from_email: form.email,
          to_email: "sarjsmithde@gmail.com",
          message: form.message,
        },
        "xvWn8K1UA1qwqDMby"
      )
      .then(
        () => {
          setLoading(false);
          setShowSuccessModal(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setErrorMessage(
            error.text || "Failed to send message. Please try again."
          );
          setShowErrorModal(true);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl shadow-lg"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <div className="flex flex-col">
            <label className="text-white font-medium mb-4">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={`bg-tertiary rounded-lg py-4 px-6 text-white outline-none border-2 ${
                formErrors.name ? "border-red-500" : "border-transparent"
              } font-medium placeholder:text-secondary transition-colors`}
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-white font-medium mb-4">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className={`bg-tertiary rounded-lg py-4 px-6 text-white outline-none border-2 ${
                formErrors.email ? "border-red-500" : "border-transparent"
              } font-medium placeholder:text-secondary transition-colors`}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-white font-medium mb-4">Your Message</label>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className={`bg-tertiary rounded-lg py-4 px-6 text-white outline-none border-2 ${
                formErrors.message ? "border-red-500" : "border-transparent"
              } font-medium placeholder:text-secondary transition-colors resize-none`}
            />
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-[#00cea8] to-[#01a884] py-3 px-8
              outline-none w-fit text-white font-bold shadow-md
              shadow-primary rounded-xl hover:from-[#01a884] hover:to-[#00cea8]
              transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      {/* Success and Error Modals */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />

      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
