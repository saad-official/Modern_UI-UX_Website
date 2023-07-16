'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >

      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >

        <span className="font-extrabold text-white"> Metaverse </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente laboriosam fugiat molestias. Explicabo dolores sequi odio quaerat alias deleniti,
        <span className="font-extrabold text-white"> Meadness of MetaVerse </span>
        iste repudiandae natus. Quos
        <span className="font-extrabold text-white"> VR </span>
        quo laboriosam, tempora nobis vitae sed temporibus atque exercitationem id quasi soluta assumenda
        <span className="font-extrabold text-white"> Explore </span>
        sequi, ad facilis.

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="mt-8 cursor-pointer animate-bounce duration-200 w-[18px] h-[28px] object-contain"
      />

    </motion.div>
  </section>
);

export default About;
