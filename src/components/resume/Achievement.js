import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
      <div className="mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Science Olympiad"
            subTitle="Division C Varsity"
            des="September 2020 to present"
          />
        <ResumeCard
            title="National Junior Honors Society Board Member"
            subTitle="September 2020 to present"
          />
                  <ResumeCard
            title="Chicago Teen Mentors- Volunteer"
            des={['Chicago Teen Mentors goal is to provide free educational support for',
            'and reading, exclusively for 3rd to 10th-grade CPS students','CPS students in need. They offer 1-on-1 tutoring over Zoom in math',
            ]}
          />
        </div>
        


      </div>
      <div className="flex-1">
      <div className="mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Girl Up- Vice President"
            des="Girl Up is a girl-centered leadership development initiative, focusing on
            equity for girls and women"
          />
        <ResumeCard
            title="Coding club"
            des="Learning about different Computer Science algorithms in Java and
            Python"
          />
                  <ResumeCard
            title="Physics team"
            des="F = ma physics competition on February 9th, 2023"
          />
        </div>

      </div>
    </motion.div>
  );
};

export default Achievement;
