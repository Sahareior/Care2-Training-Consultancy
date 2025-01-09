
import Heading from '../../../Shared/Headings/Heading';
import './About.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ArrowBigLeftIcon, LucideAward, LucideGlobe, LucideStar, LucideTrendingUp, LucideWorkflow, LucideZap, School2Icon, Star } from 'lucide-react';
import { FaBinoculars } from 'react-icons/fa';

const timelineData = [
  {
    date: "2024",
    title: "Our Vision",
    location: "",
    description: "To inspire growth and empower individuals and organizations by providing world-class training and consultancy services, helping them reach their full potential.",
    icon: <FaBinoculars />,
    background: 'rgb(0, 188, 212)', // Cyan color that contrasts well with black
  },
  {
    date: "2024",
    title: "Our Mission",
    location: "",
    description: "To deliver tailored solutions that address unique challenges, enabling our clients to achieve their goals and thrive in an ever-changing global environment.",
    icon: <ArrowBigLeftIcon />,
    background: 'rgb(63, 81, 181)', // Indigo color that contrasts well with black
  },
  {
    date: "2024",
    title: "Our Work Process",
    location: "",
    description: "Our structured and client-focused process ensures seamless collaboration, from understanding your needs to delivering impactful solutions with measurable results.",
    icon: <LucideWorkflow />,
    background: 'rgb(103, 58, 183)', // Deep purple color that contrasts well with black
  },
  {
    date: "2025",
    title: "Client Success Stories",
    location: "",
    description: "We take pride in the achievements of our clients, showcasing their success stories as a testament to our dedication and the effectiveness of our services.",
    icon: <LucideStar />,
    background: 'rgb(255, 193, 7)', // Yellow color that contrasts well with black
  },
    {
      date: "2025",
      title: "Expanding Services",
      location: "",
      description: "We expanded our service offerings to include advanced analytics, content creation, and influencer marketing to meet the growing needs of our clients.",
      icon: <LucideTrendingUp />,
      background: 'rgb(76, 175, 80)', // Green color that contrasts well with black
    },
    {
      date: "2026",
      title: "Innovative Solutions",
      location: "",
      description: "Introduced AI-driven tools and automation to enhance the efficiency and effectiveness of our digital marketing campaigns.",
      icon: <LucideZap />,
      background: 'rgb(244, 67, 54)', // Red color that contrasts well with black
    },
    {
      date: "2026",
      title: "Global Reach",
      location: "",
      description: "Expanded our reach to global markets, offering our digital marketing expertise to businesses around the world.",
      icon: <LucideGlobe />,
      background: 'rgb(156, 39, 176)', // Purple color that contrasts well with black
    },
    {
      date: "2027",
      title: "Awards & Recognition",
      location: "",
      description: "Received industry awards and recognition for our innovative strategies and outstanding results in digital marketing.",
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
