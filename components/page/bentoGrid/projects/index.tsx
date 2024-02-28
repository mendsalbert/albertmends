import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 flex-wrap w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </motion.div>
  );
};

export default Projects;
