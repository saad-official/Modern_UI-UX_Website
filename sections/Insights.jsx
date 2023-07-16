'use client';

import { motion } from 'framer-motion';
import { InsightCard, NewFeatures, StartSteps, TitleText, TypingText } from '../components';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { insights, newFeatures, startingFeatures } from '../constants/index';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col`}
    >
      <TypingText title="Insight" textStyles="text-center" />
      <TitleText textStyles="text-center" title={<>Insight About Metaverse</>} />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...insight} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
