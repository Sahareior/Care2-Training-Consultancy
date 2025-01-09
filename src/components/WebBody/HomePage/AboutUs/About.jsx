
import Heading from '../../../Shared/Headings/Heading';
import './About.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ArrowBigLeftIcon, LucideAward, LucideGlobe, LucideStar, LucideTrendingUp, LucideWorkflow, LucideZap, School2Icon, Star } from 'lucide-react';
import { FaBinoculars } from 'react-icons/fa';

const timelineData = [
  {
    date: "2022",
    title: "Our Vision",
    location: "",
    description: "To inspire and empower individuals to achieve their dreams of studying, working, and living abroad through expert advice and support.",
    icon: <FaBinoculars />,
    background: 'rgb(0, 188, 212)', // Cyan color that contrasts well with black
  },
  {
    date: "2023",
    title: "Our Mission",
    location: "",
    description: "To simplify the complexities of visa processes and opportunities, providing personalized solutions for students, professionals, and travelers.",
    icon: <ArrowBigLeftIcon />,
    background: 'rgb(63, 81, 181)', // Indigo color that contrasts well with black
  },
  {
    date: "2024",
    title: "Our Work Process",
    location: "",
    description: "We combine years of experience with a client-centric approach, ensuring a seamless journey from consultation to successful outcomes.",
    icon: <LucideWorkflow />,
    background: 'rgb(103, 58, 183)', // Deep purple color that contrasts well with black
  },
  {
    date: "2025",
    title: "Client Success Stories",
    location: "",
    description: "Celebrating the success of our clients as they achieve their dreams of studying, working, or living abroad, backed by our expert support.",
    icon: <LucideStar />,
    background: 'rgb(255, 193, 7)', // Yellow color that contrasts well with black
  },
  {
    date: "2025",
    title: "Expanding Services",
    location: "",
    description: "Launched additional services, including career counseling, cultural adaptation training, and job placement support for global opportunities.",
    icon: <LucideTrendingUp />,
    background: 'rgb(76, 175, 80)', // Green color that contrasts well with black
  },
  {
    date: "2025",
    title: "Innovative Solutions",
    location: "",
    description: "Introduced digital tools and AI-driven insights to streamline the visa process and enhance success rates for our clients.",
    icon: <LucideZap />,
    background: 'rgb(244, 67, 54)', // Red color that contrasts well with black
  },
  {
    date: "2025",
    title: "Global Reach",
    location: "",
    description: "Expanded our presence across multiple countries, providing comprehensive support to clients worldwide.",
    icon: <LucideGlobe />,
    background: 'rgb(156, 39, 176)', // Purple color that contrasts well with black
  },
  {
    date: "2025",
    title: "Awards & Recognition",
    location: "",
    description: "Honored with industry awards for our excellence in consultancy and our commitment to client success.",
    icon: <LucideAward />,
    background: 'rgb(255, 87, 34)', // Orange color that contrasts well with black
  },
];




const About = () => {
  return (
<div className="a mt-10">
      <div className="py-5">
        <Heading text="About Us" />
        <h3 className="text-center font-bold italic font1 px-4 text-white mt-3 text-2xl md:text-4xl">
          Learn More About Us
        </h3>
      </div>
      <div className="timeline-container mt-5">
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: item.background, color: '#fff' }}
              contentArrowStyle={{ borderRight: `7px solid ${item.background}` }}
              iconStyle={{ background: item.background, color: '#fff' }}
              icon={item.icon}
            >
              {item.title && <h3 className="vertical-timeline-element-title text-2xl">{item.title}</h3>}
              {item.description && (
                <p className="font1" style={{ fontSize: '18px' }}>
                  {item.description}
                </p>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default About;
