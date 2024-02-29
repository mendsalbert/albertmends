import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 flex-wrap overflow-scroll w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <ProjectCard
        name={"Splorite"}
        description={"AI education App"}
        image={"proj.png"}
      />
      <ProjectCard
        name={"Portfolio"}
        description={"AI education App"}
        image={"proj3.png"}
      />
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
  );
};

export default Projects;
