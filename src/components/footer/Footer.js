import React from 'react'
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { logo } from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto w-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/sdevarajan2006" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
          </span>
          <span className="bannerIcon">
          <a href="mailto:sdevarajan2006@gmail.com">
            <SiGmail /></a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/sanjana-devarajan-a86618267/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn /></a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.youtube.com/@shwetaparthasarathy" target="_blank" rel="noopener noreferrer">
            <FaYoutube /></a>
          </span>
        </div>
      </div>
      
    </div>
  );
}

export default Footer