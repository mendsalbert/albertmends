"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import { MacbookScroll } from "@/components/ui/MacbookScroll";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/NavBar";
import { Button } from "@/components/ui/MovingBorder";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/GlowingStars";
import { IconBrandPython } from "@tabler/icons-react";

export default function Home() {
  return (
    <div>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Navbar className="top-2" />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <img
            className="w-28 mb-2 mx-auto h-28 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="mends.png"
            alt="Bordered avatar"
          />
          {/* <p className="mx-auto text-center font-semibold py-2 pt-2">
          Hello, I'm Albert Me
          nds 👋🏽
        </p> */}

          <h1 className="text-4xl p-2 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Transforming <br /> <span className="text-[#51c318]">Data</span>{" "}
            into Insights.
          </h1>
          {/* <div className="mx-auto self-center">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Borders are cool
            </Button>
          </div> */}
          <p className="mt-6 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out
            of copy.
          </p>
        </div>
      </div>
      <div className="flex space-x-10 mx-10  items-center justify-center antialiased">
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>Data Analysis & BI</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              Mastering data's complexities with Python and Tableau to reveal
              actionable insights. My proficiency with SQL and Pandas underpins
              robust, data-driven decision-making.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
          <div className="py-2">
            <span className="inline-flex mr-1 mb-1 items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white">
              <img src={"/py.png"} className="w-5 h-5" alt="" />
              Python
            </span>

            <span className="inline-flex mr-1 mb-1 items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white">
              <img src={"/t.png"} className="w-5 h-5" alt="" />
              Tableau
            </span>

            <span className="inline-flex mr-1 mb-1 items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white">
              <img src={"/sql.png"} className="w-4 h-5" alt="" />
              SQL
            </span>
            <span className="inline-flex mr-1 mb-1 items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white">
              <img src={"/xcel.png"} className="w-5 h-5" alt="" />
              Excel
            </span>
            <span className="inline-flex mr-1 mb-1 items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white">
              <img src={"/pd.png"} className="w-6 h-5" alt="" />
              Pandas
            </span>
          </div>
        </GlowingStarsBackgroundCard>

        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>Machine Learning</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              The power of full-stack to the frontend. Read the release notes.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
          <div className="py-2">
            <span className="inline-flex mr-1 mb-1  items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white">
              <img src={"/sci.png"} className="w-7 h-5" alt="" />
              Sci-Kit
            </span>

            <span className="inline-flex mr-1 mb-1  items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white">
              <img src={"/ts.png"} className="w-5 h-5" alt="" />
              Tensorflow
            </span>

            <span className="inline-flex mr-1 mb-1 items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white">
              <img src={"pyt.png"} className="w-4 h-5" alt="" />
              Pytorch
            </span>
            <span className="inline-flex mr-1 mb-1 items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white">
              <img src={"aws.png"} className="w-7 h-5" alt="" />
              AWS
            </span>
          </div>
        </GlowingStarsBackgroundCard>

        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>Data Visualization</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              The power of full-stack to the frontend. Read the release notes.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
          <div className="py-2">
            <span className="inline-flex mr-1 mb-1 items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white">
              <img src={"/t.png"} className="w-5 h-5" alt="" />
              Tableau
            </span>

            <span className="inline-flex mr-1 mb-1 items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white">
              <img src={"/plot.png"} className="w-5 h-5" alt="" />
              MatPlotlib
            </span>
            <span className="inline-flex mr-1 mb-1 items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white">
              <img src={"/sb.png"} className="w-5 h-5" alt="" />
              Seaborn
            </span>
            <span className="inline-flex mr-1 mb-1 items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white">
              <img src={"aws.png"} className="w-7 h-5" alt="" />
              AWS QuickSight
            </span>
          </div>
        </GlowingStarsBackgroundCard>
      </div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
