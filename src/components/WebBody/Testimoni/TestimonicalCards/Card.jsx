import './Card.css'

const Card = ({review, image, name}) => {

    return (
        <div>
            <figure className="snip1192">
  <blockquote>{review}</blockquote>
  <div className="author">
    <img src={image} alt="sq-sample1"/>
    <h4>{name}</h4>
  </div>
</figure>

        </div>
    );
};

export default Card;