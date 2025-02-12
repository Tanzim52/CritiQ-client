
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import { SiBackendless } from "react-icons/si";
import logo from "../assets/1000094661-modified.png";
export default function Footer() {
  return (
    <>
      <footer className="footer bg-neutral text-neutral-content p-10">
        <aside>

          <p className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-14 w-14" />
            <div>
              <p className="font-bold text-xl">CritiQ</p>

              <p className="italic">Your feedback is our priority.</p>
            </div>
          </p>
        </aside>
        <nav>
          <h6 className="font-bold text-2xl text-white">Socials</h6>
          <div className="flex text-xl gap-3 my-2">

            <a href="https://www.linkedin.com/in/tanzim52/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="text-white  hover:text-lime-400" /></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-white hover:text-lime-400 "></FaFacebook></a>
            <a target="_blank" href="https://www.instagram.com/tanzim_52/profilecard/?igsh=ejZsZ3lma2twaXlj"><FaInstagram className="text-white hover:text-lime-400"></FaInstagram></a>
            <a href="https://github.com/Tanzim52" target="_blank" rel="noopener noreferrer"> <FaGithub className="text-white  hover:text-lime-400" /></a>

          </div>
        </nav>
      </footer>
      <footer className="footer footer-center bg-neutral text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </>
  );
}
