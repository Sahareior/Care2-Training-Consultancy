
import Heading from '../../Shared/Headings/Heading';
import FeatureC from './FeatureCard/FeatureC';


const Features = () => {

    return (
        <div className='bg-slate-800 py-9'>
            <Heading text={"Features"} />
            <h3 className='text-center font-bold italic font1 px-4 text-white mt-3 text-2xl md:text-4xl'> The unique qualities that make Us special. </h3>
        <FeatureC />
        </div>
    );
};

export default Features;