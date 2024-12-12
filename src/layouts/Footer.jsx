import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";


const Footer = () => {
  return(
    <footer className="my-3 bg-zinc-900 rounded-xl px-20 py-2">
      <section className="py-2">
        <ul className="flex justify-center gap-7">
          <li>
            <a className="grid place-items-center gap-1 hover:text-violet-500" href="https://www.facebook.com/" target="_blank"><FaFacebook className="text-xl" /> Facebook</a>
          </li>
          <li>
            <a className="grid place-items-center gap-1 hover:text-violet-500" href="https://www.instagram.com/" target="_blank"><FaInstagram className="text-xl" /> Instagram</a>
          </li>
          <li>
            <a className="grid place-items-center gap-1 hover:text-violet-500" href="https://www.twitter.com/" target="_blank"><FaX className="text-xl" /> Twitter</a>
          </li>
          <li>
            <a className="grid place-items-center gap-1 hover:text-violet-500" href="https://www.linkeding.com" target="_blank"><FaLinkedin className="text-xl" /> LinKeding</a>
          </li>
        </ul>
      </section>
      <section className="py-2">
        <p className="font-semibold">© 2024 - Todos Los Derechos Reservado . || . Pagina Creada por Ariel Quizaya C.</p>
      </section>
    </footer>
  )
}


export default Footer;