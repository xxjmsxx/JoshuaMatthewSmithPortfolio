import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { useState } from "react"


const Tech = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap
      justify-center gap-10
      ">
        {technologies.map((technology) => (
          <div key={technology.name} className={"w-28 h-28 cursor-pointer"}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <div className="mt-20 flex justify-center">
        {/* <button
          type='submit'
          className='bg-[#00cea8] py-3 px-8
          outline-none w-fit text-white
          font-bold shadow-md shadow-primary
          rounded-2xl'
        >
          Reset
        </button> */}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "");
