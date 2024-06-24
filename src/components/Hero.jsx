import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <TypeAnimation
            sequence={[
              1000,
              "",
              1000,
              "Hi,", // Types 'One'
              1000, // Waits 1s
              "Hi, I'm Joshua", // Deletes 'One' and types 'Two'
              3000, //
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: 80, fontWeight: 700, color: "#00CEA8" }}
          />
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Fullstack Developer <br className="sm:block hidden" />
            <em>aka. Wizard</em>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div
        className="absolute xs:bottom-10
      bottom-32 w-full flex justify-center
      items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full
              bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
