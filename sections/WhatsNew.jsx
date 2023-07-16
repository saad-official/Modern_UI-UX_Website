'use client';

import { motion } from 'framer-motion';
import { NewFeatures, StartSteps, TitleText, TypingText } from '../components';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { newFeatures, startingFeatures } from '../constants/index';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="|  Whats New ? " />
        <TitleText title={<> Whats new about Metaverse </>} />

        <div className="mt-[48px] flex flex-wrap justify-between  gap-[24px]">
          {newFeatures.map((features, index) => (
            <NewFeatures key={features.title} {...features} />
          ))}
        </div>
      </motion.div>

      <motion.div variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img src="/whats-new.png" alt="whats-new"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>

    </motion.div>
  </section>

);

export default WhatsNew;
