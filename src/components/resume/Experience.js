import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Desk Manager"
            subTitle="L + A Healing Studio"
            result="Chicago"
            des="Managed the organization of clients' files and forms"
          />
          <ResumeCard
            title="Carnatic music Teaching"
            subTitle="September 2022 to present"
            result="Chicago"
            des="Teaching children from ages 6-12 Carnatic vocal music online on a
            weekly basis"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
