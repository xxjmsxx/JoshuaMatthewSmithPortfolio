import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ name, testimonial, company, image, designation }) => {
  return (
    <motion.div
      className="bg-black-200 rounded-[20px] p-10 w-full h-full flex flex-col justify-between"
      variants={fadeIn("", "spring", 0.5, 0.75)}
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      </div>

      <div className="mt-7 flex justify-center items-center gap-1">
        <div className="flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            <span>{designation}</span> at {company}
          </p>
        </div>

        <img
          src={image}
          alt={name}
          className="w-[100px] h-[100px] rounded-full ml-4"
        />
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextFeedback = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevFeedback = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="p-8 bg-tertiary rounded-2xl min-h-[125px] flex justify-start">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            What others say
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div>
        <div>
          <Carousel
            selectedItem={currentIndex}
            showStatus={false}
            interval={6000}
            transitionTime={1500}
            infiniteLoop
            autoPlay
            swipeable={true}
            emulateTouch
            showThumbs={false}
          >
            {testimonials.map((testimonial, index) => (
              <FeedbackCard key={testimonial.name} {...testimonial} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
