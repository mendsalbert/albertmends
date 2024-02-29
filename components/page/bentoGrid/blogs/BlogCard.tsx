import { motion } from "framer-motion";
import {
  IconCodeCircle,
  IconCodeDots,
  IconLink,
  IconServer2,
  IconUsersGroup,
} from "@tabler/icons-react";

interface BlogCardProps {
  name: string;
  description: string;
  image: string; // Assuming image is a URL string. If it's an object, you'd define the shape of the object here.
}

const BlogCard: React.FC<BlogCardProps> = ({ name, description, image }) => {
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
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        backgroundImage: `url('/${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
      <div className="p-2 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white relative z-10 flex space-x-2 font-bold">
              {name} <IconLink size={14} />
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
