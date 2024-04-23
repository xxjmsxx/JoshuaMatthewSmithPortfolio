import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, page_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-2xl p-5
        sm:w-[360px] w-full'
      >

      <div
        className='relative w-full h-[230px] cursor-pointer'
        onClick={() => window.open(page_link)}
      >
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl test'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link)}
            className='black-gradient github h-12
            rounded-full flex items-center
            cursor-pointer flex'
          >
            <p className='github-text' style={{fontSize: 12}}>Go to Source code</p>
            <img src={github} alt='github' className='w-1/6 h-1/6 object-contain pr-1' />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text_white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`} >
            #{tag.name}
          </p>
        ))}
      </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary
          text-[17px] max-w-3xl leading-[30px]"
        >
          I've been involved in a mix of projects, including health apps, tools for apartment hunting, and some personal projects of mine. Here are a few of my favorites.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");
