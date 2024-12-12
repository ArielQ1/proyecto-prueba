import PropTypes from "prop-types";

const CardHorizontal = ({children, imagen, titulo}) => {
  return (
    <div className="flex flex-col items-center bg-zinc-900 p-5 w-96 rounded-lg m-2 justify-evenly">
      <img className="w-96 h-52 m-1 rounded-lg object-cover" src={imagen} alt="Placeholder" />
      <h2 className="text-2xl font-extrabold text-indigo-800" >{titulo}</h2>
      {children}
    </div>
  );
}

CardHorizontal.propTypes = {
  children: PropTypes.node,
  imagen: PropTypes.string,
  titulo: PropTypes.string,
}

export default CardHorizontal;