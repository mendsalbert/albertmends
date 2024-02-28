import SkillsComponent from "./skills";

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
  // {
  //   title: "View Full Project Archive",
  //   description: <span className="text-sm"></span>,
  //   header: <SkeletonFourB />,
  //   className: "md:col-span-3",
  //   icon: "",
  // },

  // {
  //   title: "AI Content Generation",
  //   description: (
  //     <span className="text-sm">
  //       Experience the power of AI in generating unique content.
  //     </span>
  //   ),
  //   header: <SkeletonOne />,
  //   className: "md:col-span-1",
  //   icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "Automated Proofreading",
  //   description: (
  //     <span className="text-sm">
  //       Let AI handle the proofreading of your documents.
  //     </span>
  //   ),
  //   header: <SkeletonTwo />,
  //   className: "md:col-span-1",
  //   icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "Contextual Suggestions",
  //   description: (
  //     <span className="text-sm">
  //       Get AI-powered suggestions based on your writing context.
  //     </span>
  //   ),
  //   header: <SkeletonThree />,
  //   className: "md:col-span-1",
  //   icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "Sentiment Analysis",
  //   description: (
  //     <span className="text-sm">
  //       Understand the sentiment of your text with AI analysis.
  //     </span>
  //   ),
  //   header: <SkeletonFour />,
  //   className: "md:col-span-2",
  //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  // },

  // {
  //   title: "Text Summarization",
  //   description: (
  //     <span className="text-sm">
  //       Summarize your lengthy documents with AI technology.
  //     </span>
  //   ),
  //   header: <SkeletonFive />,
  //   className: "md:col-span-1",
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];

export default items;
