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
    <>
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="hidden  md:flex flex-1 flex-wrap overflow-scroll w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
      >
        <BlogCard
          name={"SMS Spam Detection with ML...."}
          description={"AI education App"}
          url="https://www.linkedin.com/pulse/sms-spam-detection-machine-learning-beginners-guide-mends-albert-qw1zf/?trackingId=C287mZHDTTqGlQfwxf4lNQ%3D%3D"
          image={"sms.png"}
        />
        <BlogCard
          name={"Building a ML System for Food Businesses"}
          description={"AI education App"}
          url="https://www.linkedin.com/in/mends-albert/recent-activity/articles/"
          image={"food.png"}
        />
        <BlogCard
          name={"Predicting Breast Cancer with Python"}
          description={"Predicting Breast Cancer with Python"}
          url="https://www.linkedin.com/pulse/beginners-guide-machine-learning-predicting-breast-cancer-albert-fitaf/?trackingId=C287mZHDTTqGlQfwxf4lNQ%3D%3D"
          image={"breast.png"}
        />
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex md:hidden flex-1 flex-wrap overflow-scroll w-full h-full min-h-[28rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-6 "
      >
        <BlogCard
          name={"SMS Spam Detection with ML...."}
          description={"AI education App"}
          url="https://www.linkedin.com/pulse/sms-spam-detection-machine-learning-beginners-guide-mends-albert-qw1zf/?trackingId=C287mZHDTTqGlQfwxf4lNQ%3D%3D"
          image={"sms.png"}
        />
        <BlogCard
          name={"Building a ML System for Food Businesses"}
          description={"AI education App"}
          url="https://www.linkedin.com/in/mends-albert/recent-activity/articles/"
          image={"food.png"}
        />
        <BlogCard
          name={"Predicting Breast Cancer with Python"}
          description={"Predicting Breast Cancer with Python"}
          url="https://www.linkedin.com/pulse/beginners-guide-machine-learning-predicting-breast-cancer-albert-fitaf/?trackingId=C287mZHDTTqGlQfwxf4lNQ%3D%3D"
          image={"breast.png"}
        />
      </motion.div>
    </>
  );
};

export default Blog;
