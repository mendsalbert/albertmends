import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="hidden  md:flex flex-1 flex-wrap overflow-scroll w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
      >
        <ProjectCard
          name={"Splorite"}
          description={"An enhanced AI chatbot for education App"}
          image={"splorite_.png"}
          url={"https://www.splorite.com/chat"}
          usersCount={true}
        />
        <ProjectCard
          name={"Eco Air"}
          description={" Air Quality Monitoring Dashboard"}
          image={"ecoair.png"}
          url={"https://eco-air.vercel.app/"}
          usersCount={false}
        />
        <ProjectCard
          name={"MRI Scan Detection using CNN"}
          description={"AI education App"}
          image={"mri.jpeg"}
          url={
            "https://github.com/mendsalbert/MRI-scan-detection-CNN/blob/main/index.ipynb"
          }
          usersCount={false}
        />

        {/* <ProjectCard
        name={"Portfolio"}
        description={"AI education App"}
        image={"proj3.png"}
        url={"jhh"}
        usersCount={false}
      /> */}

        {/* <ProjectCard
        name={"Spotify"}
        description={"AI education App"}
        image={"proj2.png"}
      />
      <ProjectCard
        name={"Portfolio"}
        description={"AI education App"}
        image={"proj3.png"}
      /> */}
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        //   className="flex flex-1 flex-wrap overflow-scroll w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
        className="flex  md:hidden flex-1 flex-wrap overflow-scroll w-full h-full min-h-[24rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col  space-y-6"
      >
        <ProjectCard
          name={"Splorite"}
          description={"An enhanced AI chatbot for education App"}
          image={"splorite_.png"}
          url={"https://www.splorite.com/chat"}
          usersCount={true}
        />

        <ProjectCard
          name={"Eco Air"}
          description={" Air Quality Monitoring Dashboard"}
          image={"ecoair.png"}
          url={"https://eco-air.vercel.app/"}
          usersCount={false}
        />
        <ProjectCard
          name={"MRI Scan Detection using CNN"}
          description={"AI education App"}
          image={"mri.jpeg"}
          url={
            "https://github.com/mendsalbert/MRI-scan-detection-CNN/blob/main/index.ipynb"
          }
          usersCount={false}
        />
      </motion.div>
    </>
  );
};

export default Projects;
