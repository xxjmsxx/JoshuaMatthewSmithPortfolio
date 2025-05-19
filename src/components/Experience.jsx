import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useState } from "react";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisiblePoints = 3;
  const hasMorePoints = experience.points.length > maxVisiblePoints;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(29, 24, 54, 0.9)",
        boxShadow: "0 4px 20px rgba(0, 206, 168, 0.2)",
        borderRadius: "16px",
        border: "1px solid rgba(0, 206, 168, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #00CEA8" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow:
          "0 0 0 4px #00CEA8, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="relative overflow-hidden group">
        {experience.tape && (
          <img
            src={experience.tape}
            alt={experience.company_name}
            className="absolute pb-10 inset-0 object-cover w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
          />
        )}
        <div className="relative z-10">
          <h2 className="text-white text-2xl font-bold">
            {experience.company_name}
          </h2>
          <h3 className={`text-xl font-semibold mt-1`}>{experience.title}</h3>
        </div>
      </div>

      <ul className="mt-5 space-y-3">
        {experience.points
          .slice(0, isExpanded ? experience.points.length : maxVisiblePoints)
          .map((point, index) => (
            <li
              key={index}
              className="text-gray-200 text-[15px] pl-1 tracking-wide flex items-start"
            >
              <span className="text-green-400 mr-2">•</span>
              <span>{point}</span>
            </li>
          ))}
      </ul>

      {hasMorePoints && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 px-4 py-2 bg-green-500 bg-opacity-20 text-green-300 rounded-md hover:bg-opacity-30 transition-all duration-300 text-sm font-medium flex items-center"
        >
          {isExpanded ? (
            <>
              Show Less <span className="ml-1">↑</span>
            </>
          ) : (
            <>
              Read More <span className="ml-1">↓</span>
            </>
          )}
        </button>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Professional Journey</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="rgba(0, 206, 168, 0.3)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
