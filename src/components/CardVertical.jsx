import PropTypes from "prop-types";

const CardVertical = ({ title, image, description, position }) => {
  const positionText = position === "left" ? "text-left" : "text-right";
  const positionClass = position === "left" ? "flex-row" : "flex-row-reverse";

  return (    
    <article className={`w-5/6 flex ${positionClass} gap-6 items-center mt-6 bg-zinc-900 p-3 rounded-lg`}>
      <div className="w-5/12">
        <img className="w-full h-64 object-cover rounded-lg" src={image} alt={title} />
      </div>
      <div className={`w-7/12 ${positionText}`}>
        <h2 className="text-2xl font-extrabold text-indigo-800" >{title}</h2>
        <p>{description}</p>
      </div>      
    </article>
  );
}


CardVertical.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  position: PropTypes.string,
}

export default CardVertical;