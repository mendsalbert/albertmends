import { motion } from "framer-motion";
import {
  IconCodeCircle,
  IconCodeDots,
  IconLink,
  IconServer2,
  IconUsersGroup,
} from "@tabler/icons-react";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  url: string;
  usersCount: Boolean; // Assuming image is a URL string. If it's an object, you'd define the shape of the object here.
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  image,
  url,
  usersCount,
}) => {
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
        // background:
        //   "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        // backgroundSize: "400% 400%",
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
              <Link href={url} className="flex space-x-4 items-center">
                {name} <IconLink size={18} />
              </Link>
            </p>
            <p className="text-white relative z-10 text-xs">{description}</p>
          </div>

          {usersCount ? (
            <p className="border flex items-center space-x-1 flex-row z-40 w-min border-white  text-white text-xs rounded-full px-2 py-0.5 mt-2">
              <IconUsersGroup size={16} />
              <span>6.5k</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
