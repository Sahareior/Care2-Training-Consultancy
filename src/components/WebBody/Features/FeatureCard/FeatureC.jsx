import { motion } from 'framer-motion';
import './FeatureC.css';
const img1 = '/images/featuredimg1.avif';
const img2 = '/images/featuredimg2.avif';
const img3 = '/images/featuredimg3.avif';
const img4 = '/images/featuredimg4.avif';

const cardData = [
  {
    id: 1,
    image: img1,
    heading: 'Expert Guidance',
    description:
      'Our team of experienced professionals provides personalized advice tailored to your unique goals, ensuring you make informed decisions every step of the way.',
    duration: 3,
  },
  {
    id: 2,
    image: img2,
    heading: 'Top Services',
    description:
      'From visa assistance to career guidance and settling abroad, we offer a one-stop solution to meet all your international needs seamlessly.',
    duration: 5,
  },
  {
    id: 3,
    image: img3,
    heading: 'Proven Track Record',
    description:
      'With countless success stories and satisfied clients worldwide, we are trusted for delivering exceptional results and making dreams a reality.',
    duration: 7,
  },
  {
    id: 4,
    image: img4,
    heading: '24/7 Support',
    description:
      'We are committed to being there for you whenever you need us, offering round-the-clock assistance to address your questions and concerns promptly.',
    duration: 9,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const FeatureC = () => {
  return (
<div className="hero-section">
  <div className="hcard-grid">
    {cardData.map((card) => (
      <motion.a
        key={card.id}
        className="hcard relative"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        transition={{ duration: card.duration }}
      >
        <div
          className="hcard__background relative"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <img src={card.image} alt={card.heading} className="hidden" />
        </div>
        <div className="absolute top-3 p-5 z-10">
          <h3 className="hcard__heading text-4xl md:text-2xl text-left font2 text-white">
            {card.heading}
          </h3>
          <p className="mt-2 text-wrap text-white text-[15px] md:text-[15px] leading-normal overflow-hidden">
            {card.description}
          </p>
          <button className="btn btn-xs btn-link hover:text-red-600">
            Learn More
          </button>
        </div>
      </motion.a>
    ))}
  </div>
</div>

  );
};

export default FeatureC;
