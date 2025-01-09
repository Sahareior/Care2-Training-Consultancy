
import { ArrowRight } from 'lucide-react';
import './serviceCard.css'
import { Link } from 'react-router-dom';
const ServiceCard = ({Icon, title, descriptions}) => {
 
    return (
        <div>
          
<section id="advertisers" className ="advertisers-service-sec ">
  <div className ="container">

    <div className ="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
   
      <div className ="col h-[400px] w-full md:w-[30vw]">
        <div className ="service-card">
          <div className ="icon-wrapper">
            <i className ="fa-solid fa-chart-line"> <Icon size={36} /></i>
          </div>
          <h3>{title}</h3>
          <p>
          {descriptions}
          </p>
      <Link to='/more' >  <button className='btn btn-md cbtn rounded-none bg-yellow-400 mt-9'>learn More  <ArrowRight /></button></Link>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default ServiceCard;