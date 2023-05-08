import { VerticalTimeline, VerticalTimelineElement, VerticalTimelineElementProps  } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {

  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836'}}
      contentArrowStyle={{ borderRight: '7px solid  #00CEA8' }}
      style={{ color: '#00CEA8' }}
      date={experience.date}VerticalTimelineElementProps
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain"/>
        </div>
      }
    >
      <div>
        {experience.tape && (
          <img src={experience.tape} alt={experience.company_name}
            className="absolute pb-10 inset-0 object-fit-cover w-full h-full"
            style={{ transition: 'opacity 0.2s ease-in-out' }}
            onMouseOver={(e) => { e.currentTarget.style.opacity = 0 }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = 1 }}
          />
        )}
        <div className="relative z-10">
        <h2 className="text-white font-bold">
          {experience.company_name}
        </h2>
        <h3 className={experience.textColor === "#00CEA8" ? "text-red-400 font-bold" : "text-white"}>
          {experience.title}
        </h3>
        </div>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
};
const Experience = () => {
  console.log(experiences);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")
