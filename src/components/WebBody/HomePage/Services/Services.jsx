import { BookOpen, Brain, BriefcaseBusiness } from 'lucide-react';

import Heading from '../../../Shared/Headings/Heading';

import ServiceCard from '../../../Shared/serviceCard/ServiceCard';


const Services = () => {
{/* <<<Brain /> /> /> */}
const services = [
    {
        icon: BookOpen,
        title: "Student Visa Assistance",
        descriptions: "Get expert guidance and support for your student visa application process, ensuring a smooth transition to studying abroad."
    },
    {
        icon: BriefcaseBusiness,
        title: "Work Abroad Opportunities",
        descriptions: "Explore career opportunities overseas with our tailored assistance in securing work permits and navigating international job markets."
    },
    {
        icon: Brain,
        title: "Consultancy for Living Abroad",
        descriptions: "Receive personalized advice on adapting to life in a new country, including housing, culture, and community integration."
    },
];

    

    return (
        <div id='services' className='bg-[#2ab76504] min-h-screen '>
            <div className='mt-5'>
<Heading text={"Services"} />
<h3 className='text-center font-bold italic font1 px-4 text-white mt-3 text-2xl md:text-4xl'>The Services Neon Net Provides</h3>
<div  className='grid md:grid-cols-3 justify-items-center  mt-16'>
{
    services.map(items => <ServiceCard key={items.icon} Icon={items.icon} title={items.title} descriptions= {items.descriptions} />)
}
</div>
            </div>
        </div>
    );
};

export default Services;