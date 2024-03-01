import Projects from "./projects";
import SkillsComponent from "./skills";
import {
  IconClipboardCopy,
  IconBoxAlignRightFilled,
  IconTableColumn,
  IconDownload,
} from "@tabler/icons-react";
import Socials from "./socials";
import Blog from "./blogs";
import Contact from "./contact";
const items = [
  {
    title: "My Expertise",
    description: (
      <span className="text-sm">
        Here are the skills I bring to the table. <br />
        <a
          href="https://drive.google.com/file/d/1kiMdo7H9SGdwPu0mV2YFc_k0EJXQ5JMm/view?usp=sharing"
          target="_blank"
        >
          <button className="space-x-1 cursor-pointer flex items-center justify-center bg-transparent  dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            <IconDownload size={19} />
            <span>Download CV</span>
          </button>
        </a>
      </span>
    ),
    header: <SkillsComponent />,
    className: "md:col-span-3",
    icon: "",
  },
  {
    title: "View Full Project Archive",
    description: <span className="text-sm"></span>,
    header: <Projects />,
    className: "md:col-span-3",
    icon: "",
  },

  {
    title: "",
    description: <span className="text-sm"></span>,
    header: <Socials />,
    className: "md:col-span-3",
    icon: "",
  },

  {
    title: "I'm also passionate about writing",
    description: (
      <span className="text-sm">Feel free to check out some of writings </span>
    ),
    header: <Blog />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Lets chat",
    description: (
      <span className="text-sm">Contact me on any of my socials</span>
    ),
    header: <Contact />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export default items;
