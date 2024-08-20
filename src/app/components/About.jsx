import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import Image from 'next/image';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({index,title,icon})=>{
  return(
    <Tilt className='xs:w-64 w-full '>
      <motion.div variants={fadeIn("right","spring",0.5 * index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{max:45,scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-72 flex justify-evenly items-center flex-col '>
        <Image src={icon} alt={title} width={64} height={64} className='object-contain'/>
        <h3 className='text-white text-xl font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-base max-w-3xl leading-8'
    >
    I am a dedicated web developer with expertise in creating intuitive user interfaces and robust web applications using a modern tech stack that includes HTML, CSS, JavaScript, React, Next.js, Node.js, Express, and MongoDB. My focus is on combining technical proficiency with a deep understanding of user experience to build solutions that are both functional and visually appealing. Passionate about leveraging the latest web technologies, I strive to bring innovative ideas to life and continuously improve my skills to stay ahead in the ever-evolving digital landscape.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,'about')