import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm';
import EarthCanvas from '../../Canvas/Earth';
import Heading from '../../Shared/Headings/Heading';

const Contact = () => {
  // Animation controls
  const headingControls = useAnimation();
  const earthControls = useAnimation();
  const formControls = useAnimation();

  // InView hooks
  const [headingRef, headingInView] = useInView({ threshold: 0.5 });
  const [earthRef, earthInView] = useInView({ threshold: 0.5 });
  const [formRef, formInView] = useInView({ threshold: 0.5 });

  // Trigger heading animation
  useEffect(() => {
    if (headingInView) {
      headingControls.start("visible");
    } else {
      headingControls.start("hidden");
    }
  }, [headingControls, headingInView]);

  // Trigger earth canvas animation
  useEffect(() => {
    if (earthInView) {
      earthControls.start("visible");
    } else {
      earthControls.start("hidden");
    }
  }, [earthControls, earthInView]);

  // Trigger contact form animation
  useEffect(() => {
    if (formInView) {
      formControls.start("visible");
    } else {
      formControls.start("hidden");
    }
  }, [formControls, formInView]);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <div id="contact" className="mt-3 py-7 p-3">
      {/* Animate Heading */}
      <motion.div
        ref={headingRef}
        initial="hidden"
        animate={headingControls}
        variants={fadeUp}
      >
        <Heading text={"Contact us"} />
        <p className="text-center font-bold italic font1 px-4 text-white mt-3 text-2xl md:text-4xl">
          Contact us in your emergency!
        </p>
      </motion.div>

      <div className="flex  flex-col-reverse md:justify-around md:flex-row-reverse items-center mt-6">
        {/* Animate EarthCanvas */}
        <motion.div
          ref={earthRef}
          initial="hidden"
          animate={earthControls}
          variants={fadeRight}
          className="md:w-[400px] w-[300px] md:ml-9 md:h-[500px] h-[400px]"
        >
          <EarthCanvas />
        </motion.div>

        {/* Animate ContactForm */}
        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formControls}
          variants={fadeUp}
        >
          <div className="p-7">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
