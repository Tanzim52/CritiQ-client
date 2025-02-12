
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import { SiBackendless } from "react-icons/si";
export default function Footer() {
  return (
    <>
      <footer className="footer bg-[#3D405B] text-white p-10">
        <aside className="flex items-center gap-2">
          <SiBackendless className="text-lime-600 text-4xl" />
          <p className="font-bold text-md">
            CritiQ
            <br />
          </p>
        </aside>
        
        <nav>
          <h6 className="uppercase text-lg font-semibold  ">Services</h6>
          <a className="link link-hover mt-3">Branding</a>
          <a className="link link-hover my-3 ">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover my-3">Advertisement</a>
        </nav>
        
        <nav>
          <h6 className="uppercase text-lg font-semibold">Company</h6>
          <a className="link link-hover my-3 ">About us</a>
          <a className="link link-hover my-3 ">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover my-3 ">Press kit</a>
          
        </nav>
        
        <nav>
          <h6 className="uppercase text-lg font-semibold">BUISNESS</h6>
          <a className="link link-hover my-3 ">Products</a>
          <a className="link link-hover my-3 " >Buisness idea</a>
          <a className="link link-hover my-3 ">Tech Buisness</a>
        </nav>
        <form>
          <h6 className="uppercase text-lg font-semibold text-white">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="text-white label-text">Email</span>
            </label>
            <div className="join ">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered  w-40 md:w-32 lg:w-44"
              />
              <button className="btn bg-lime-400   ">Subscribe</button>
            </div>
          </fieldset>
          <div className="flex text-xl gap-3 my-2">
            
            <a href="https://www.linkedin.com/in/tanzim52/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="text-blue-500" /></a>
             <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook></FaFacebook></a>
            <a target="_blank" href="https://www.instagram.com/tanzim_52/profilecard/?igsh=ejZsZ3lma2twaXlj"><FaInstagram></FaInstagram></a>
           <a href="https://github.com/Tanzim52" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
           
          </div>
          <div>
          <aside>
            
          </aside>
          </div>
      
        </form>
      </footer>
    </>
  );
}
