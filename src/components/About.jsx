import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon}) => {

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right","spring",0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )

}


const About = () => {
  return (
    <>
    <motion.div variants = {textVariant()}>
      <p className={styles.sectionSubText}> Introduction </p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p 
    variants ={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I'm a full-time student at the University of Toronto specializing in Software Engineering and I have a passion for building software and learning new technologies. 
      I am an eager learner and I am always looking for opportunities to expand my knowledge and skillset. Feel free to <a id="jump_to_contact" href="#contact">reach out (click me)</a> to me if you have any questions or just want to chat!
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10 justify-center">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index = {index} {...service} />

      ))}

    </div>
    
    </>
  )
}

export default SectionWrapper(About, "about");