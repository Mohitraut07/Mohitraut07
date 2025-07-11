import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { inView, motion } from "framer-motion";
import { useState, useEffect } from "react";

import Image from "next/image";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(()=> {
    const checkScreenSize = ()=> {
      setIsDesktop(window.innerWidth>1170)
    }

    // On Mount
    checkScreenSize();

    // Event listener
    window.addEventListener('resize',checkScreenSize);

    // Cleanup event listener on unmount
    return ()=> window.removeEventListener('resize',checkScreenSize);
  },[])

  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="object-contain rounded-full"
          />
        </div>
      }
      {...(isDesktop ? { date: experience.date } : {})}
    >
      <div>
        <h3 className="text-white text-2xl font-bold ">{experience.title}</h3>
        <p className="text-secondary text-base font-semibold m-0">
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2 ">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white text-sm pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
        <div className="text-secondary text-base font-semibold pt-5">
        {experience.date}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard experience={experience} key={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
