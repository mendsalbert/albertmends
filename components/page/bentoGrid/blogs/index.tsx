import { motion } from "framer-motion";
import Image from "next/image";
import ProjectCard from "../projects/ProjectCard";
import BlogCard from "./BlogCard";

const Blog = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-wrap overflow-scroll flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <BlogCard
        name={"Read"}
        description={"AI education App"}
        image={"sms.png"}
      />
      <BlogCard
        name={"Splorite"}
        description={"AI education App"}
        image={"proj.png"}
      />
      <BlogCard
        name={"Splorite"}
        description={"AI education App"}
        image={"proj.png"}
      />
    </motion.div>
  );
};

export default Blog;
