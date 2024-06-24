import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  project_type,
  description,
  tags,
  image,
  source_code_link,
  page_link,
}) => {
  const handleImageClick = () => {
    window.open(page_link);
  };

  const handleSourceCodeClick = (e) => {
    e.stopPropagation(); // Prevents the click from triggering handleImageClick
    window.open(source_code_link);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      style={{ flex: "1" }} // Ensures each card takes equal space
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-2xl p-5 sm:w-[360px] w-full relative"
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <div
          className="relative w-full h-[230px] cursor-pointer"
          onClick={handleImageClick}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl test"
          />
          {page_link !== "" && (
            <div className="absolute inset-0 flex justify-center items-center m-3  rounded-2xl card-img_hover bg-black opacity-0 hover:opacity-70 transition-opacity">
              <p className="text-white text-center">Click to visit website</p>
            </div>
          )}

          {source_code_link !== "" && (
            <div className="absolute top-3 right-3">
              <motion.div
                whileHover={{ scale: 1.1 }} // Motion for scaling effect
                onClick={handleSourceCodeClick}
                className="black-gradient github h-12 rounded-full flex items-center cursor-pointer"
              >
                <p className="github-text" style={{ fontSize: 12 }}>
                  Go to Source code
                </p>
                <img src={github} alt="github" className="object-contain" />
              </motion.div>
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="text_white font-bold text-[24px]">{name}</h3>
            <p className="text_white text-[14px]">{project_type}</p>
          </div>
          <p className="mt-2 mb-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I've been involved in a mix of projects, including health apps, tools
          for apartment hunting, and some personal projects of mine. Here are a
          few of my favorites.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
