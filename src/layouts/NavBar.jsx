import { FaHome } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdContacts } from "react-icons/md";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="my-3 bg-zinc-900 rounded-xl px-20 py-5 sticky top-0">
      <ul className="flex gap-6">
        <li className="bg-indigo-800 rounded-lg hover:bg-violet-800 hover:scale-110">
          <NavLink className="flex items-center gap-2 py-2 px-5" to='/' > <FaHome /> Inicio</NavLink>
        </li>
        <li className="bg-indigo-800 rounded-lg hover:bg-violet-800 hover:scale-110"> 
          <NavLink className="flex items-center gap-2 py-2 px-5" to='/galeria'><GrGallery /> Galeria</NavLink>
        </li>
        <li className="bg-indigo-800 rounded-lg hover:bg-violet-800 hover:scale-110">
          <NavLink className="flex items-center gap-2 py-2 px-5" to='/contactos'><MdContacts /> Contactos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;