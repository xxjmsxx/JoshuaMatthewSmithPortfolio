import React, { useState } from "react";
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
  points,
  tags,
  image,
  source_code_link,
  page_link,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);

  const handleImageClick = () => {
    if (page_link) {
      window.open(page_link);
    }
  };

  const handleSourceCodeClick = (e) => {
    e.stopPropagation();
    if (source_code_link) {
      window.open(source_code_link);
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      className="sm:w-[360px] w-full"
    >
      <div
        className="bg-tertiary rounded-2xl p-5 sm:w-[360px] w-full relative shadow-card transition-all hover:shadow-lg"
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        {/* Image Section */}
        <div
          className="relative w-full h-[230px] overflow-hidden rounded-2xl"
          onClick={handleImageClick}
          onMouseEnter={() => {
            setIsImageHovered(true);
            setIsGithubHovered(false);
          }}
          onMouseLeave={() => {
            setIsImageHovered(false);
          }}
          style={{ cursor: page_link ? "pointer" : "default" }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Overlay for website availability */}
          {isImageHovered && !isGithubHovered && (
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 rounded-2xl transition-opacity duration-300">
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <p className="text-white font-medium">
                  {page_link ? "Visit Website" : "No Website Available"}
                </p>
              </div>
            </div>
          )}

          {/* GitHub icon with expanding text, glow and animation */}
          <div className="absolute top-3 right-3 z-10">
            <motion.div
              initial={{ width: "48px" }}
              animate={
                isGithubHovered && source_code_link
                  ? { width: "200px" }
                  : { width: "48px" }
              }
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              onClick={source_code_link ? handleSourceCodeClick : undefined}
              onMouseEnter={(e) => {
                e.stopPropagation();
                setIsGithubHovered(true);
              }}
              onMouseLeave={(e) => {
                e.stopPropagation();
                setIsGithubHovered(false);
              }}
              className={`
                h-12 rounded-full flex items-center overflow-hidden transition-all duration-300
                ${
                  source_code_link
                    ? "black-gradient cursor-pointer"
                    : "bg-gray-800 bg-opacity-70 cursor-not-allowed"
                }
                ${
                  isGithubHovered && source_code_link
                    ? "shadow-[0_0_15px_rgba(0,206,168,0.7)]"
                    : ""
                }
              `}
              title={
                source_code_link
                  ? "View Source Code"
                  : "No Source Code Available"
              }
            >
              <div className="min-w-[48px] h-12 flex items-center justify-center">
                <img
                  src={github}
                  alt="github"
                  className={`
                    h-8 w-8 transition-all duration-300
                    ${source_code_link ? "" : "opacity-50"}
                    ${
                      isGithubHovered && source_code_link ? "animate-pulse" : ""
                    }
                  `}
                />

                {/* Red cross for no source code */}
                {!source_code_link && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="h-10 w-10 text-red-500 opacity-80"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {source_code_link && (
                <span
                  className={`
                    text-white text-sm font-medium whitespace-nowrap ml-1 mr-4
                    transition-opacity duration-300
                    ${isGithubHovered ? "opacity-100" : "opacity-0"}
                  `}
                >
                  View Source Code
                </span>
              )}

              {/* Glow ring effect */}
              {source_code_link && isGithubHovered && (
                <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-70 animate-ping" />
              )}
            </motion.div>
          </div>
        </div>

        {/* Text Section */}
        <div className="mt-5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-bold text-[22px]">{name}</h3>
            <p className="text-accent text-[14px]">{project_type}</p>
          </div>
          <p className="text-secondary text-[15px] leading-6 mb-3">
            {description}
          </p>

          {/* Points with Expandable Section */}
          {points && points.length > 0 && (
            <div className="mb-3">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-accent font-bold text-[14px] hover:underline mb-2 flex items-center"
              >
                {expanded ? "Show Less " : "Show More "}
                <span className="ml-1">{expanded ? "↑" : "↓"}</span>
              </button>
              {expanded && (
                <ul className="list-disc pl-5 text-secondary text-[14px] leading-5 mt-2">
                  {points.map((point, i) => (
                    <li key={i} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Tags Section */}
        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[13px] ${tag.color} bg-opacity-10 bg-white px-2 py-1 rounded-lg`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
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
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
