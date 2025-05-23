import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-teritary rounded-[20px]
          py-5 px-12 min-h-[250px] flex
          flex-col justify-evenly
          items-center"
        >
          <img src={icon} alt={title} className="w-20 h-20 mb-4" />
          <h3
            className="text-white text-[20px]
          font-bold text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  const handleDownload = (path, name) => {
    const downloadUrl = path;

    const anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = name; // Name of the file to download
    anchor.click();
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-secondary text-[17px]
        max-w-3xl leading-[30px]"
      >
        I'm a Fullstack Developer with a passion for creating beautiful and
        functional web applications. I have experience with a wide range of
        technologies and frameworks, including Rails, React, SQL, TypeScript,
        and more. I'm always looking to learn new things and improve my skills.
      </motion.p>

      <motion.button
        variants={fadeIn("", "", 0.1, 1)}
        onClick={() =>
          handleDownload(
            "/assets/downloads/CV - Joshua Smith.pdf",
            "CV - Joshua Smith.pdf"
          )
        }
        className=" text-white font-bold py-2 px-4 rounded mt-4 mr-2"
        style={{ backgroundColor: "#00cea8" }}
      >
        Download my CV
      </motion.button>

      <motion.button
        variants={fadeIn("", "", 0.1, 1)}
        onClick={() =>
          handleDownload(
            "/assets/downloads/Arbeitszeugnis - Joshua Smith.pdf",
            "Arbeitszeugnis - Joshua Smith.pdf"
          )
        }
        className="text-white font-bold py-2 px-4 rounded mt-4"
        style={{ backgroundColor: "#00cea8" }}
      >
        Download references
      </motion.button>

      <div className="mt-20 flex flex-wrap gap-10 pb-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
