
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant} from '../utils/motion';


const ServiceCard = ({ index, title, icon}) => {

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right","spring",0.2 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )

}



const Tech = () => {
  return (
    <>
    <motion.div variants = {textVariant()}>
      <p className={styles.sectionSubText}> My Skills </p>
      <h2 className={styles.sectionHeadText}> Technologies.</h2>
    </motion.div>

    

    <div className="mt-20 flex flex-wrap gap-10 justify-center">
      {technologies.map((technologies, index) => (
        <ServiceCard key={technologies.title} index = {index} {...technologies} />

      ))}

    </div>
    
    </>
  )
}

export default SectionWrapper(Tech, "") 