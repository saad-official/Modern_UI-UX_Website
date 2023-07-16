'use client';

import { motion } from 'framer-motion';
import { NewFeatures, StartSteps, TitleText, TypingText } from '../components';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { newFeatures, startingFeatures } from '../constants/index';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col`}
    >
      <TypingText title=" |People on the world" textStyles="text-center" />

      <TitleText title={<>Tag Friends around you and invite them to play togther in the same world</>} textStyles="text-center" />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="h-full w-full object-cover" />

        <div className="absolute top-10 left-20 right-20 w-[70px] h-[70px] p-[6px] bg-[#5d6680] rounded-full ">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] bg-[#5d6680] rounded-full ">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%]   w-[70px] h-[70px] p-[6px] bg-[#5d6680] rounded-full ">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

      </motion.div>

    </motion.div>
  </section>
);

export default World;
