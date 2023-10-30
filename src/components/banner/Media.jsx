import React from 'react'
import { FaLinkedinIn, FaReact,FaNodeJs, FaYoutube } from "react-icons/fa";
import { SiMongodb,SiExpress,SiGithub,SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://github.com/sdevarajan2006" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="mailto:sdevarajan@gmail.com">
              <SiGmail /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.youtube.com/@shwetaparthasarathy" target="_blank" rel="noopener noreferrer">
              <FaYoutube /></a>
            </span>

          </div>
        </div>
      </div>
  )
}

export default Media