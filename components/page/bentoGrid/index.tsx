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
    title: "Sentiment Analysis",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <Blog />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Text Summarization",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <Contact />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export default items;
