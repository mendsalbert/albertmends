import Projects from "./projects";
import SkillsComponent from "./skills";
import {
  IconClipboardCopy,
  IconBoxAlignRightFilled,
  IconTableColumn,
} from "@tabler/icons-react";
import Socials from "./socials";
import Blog from "./blogs";
import Contact from "./contact";
const items = [
  {
    title: "My Skills",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
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
    title: "Oh, I also enjoy writing",
    description: <span className="text-sm">Check some of my few blogs </span>,
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
