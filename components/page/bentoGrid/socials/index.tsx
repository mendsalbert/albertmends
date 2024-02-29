import { TypewriterEffectSmooth } from "@/components/ui/TypeWriterEffect";
import {
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const Socials = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const words = [
    // {
    //   text: "I have",
    // },
    // {
    //   text: "a",
    // },
    // {
    //   text: "Community",
    // },
    // {
    //   text: "of",
    // },
    {
      text: "2k+ Members",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      //   className="flex flex-1 w-full h-28 min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col"
    >
      <div className="flex flex-col items-center justify-center  h-[18rem] md:h-[40rem]  ">
        <p className="text-neutral-600 text-center dark:text-neutral-200 text-lg sm:text-lg  ">
          I just dont code, I teach a huge Community how to code
        </p>
        <TypewriterEffectSmooth words={words} />

        <div className=" hidden md:flex md:flex-row space-y-0 md:space-y-0 space-x-0 md:space-x-4">
          <IconBrandYoutube size={42} />
          <IconBrandX size={42} />
          <IconBrandLinkedin size={42} />
          <IconBrandTiktok size={42} />
        </div>
        <div className="flex md:hidden  md:flex-row space-y-0 md:space-y-0 space-x-4 md:space-x-4">
          <IconBrandYoutube size={40} />
          <IconBrandX size={40} />
          <IconBrandLinkedin size={40} />
          <IconBrandTiktok size={40} />
        </div>
      </div>
    </motion.div>
  );
};

export default Socials;
