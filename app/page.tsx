"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";

import {
  IconArrowDownToArc,
  IconCodeCircle,
  IconCodeDots,
  IconLink,
  IconServer2,
  IconUsersGroup,
} from "@tabler/icons-react";

import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import Navbar from "@/components/page/navbar";
import items from "@/components/page/bentoGrid";

export default function Home() {
  return (
    <div>
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      <div className=" h-[37.9rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        {/* <Navbar className="top-2" /> */}
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
          <p className="text-xl p-2 md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Hi, I'm <span className="text-[#51c318] ">Albert Mends 👋🏽</span>
          </p>
          <h1 className="text-4xl p-2 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Transforming <br /> <span className="text-[#51c318]">Data</span>{" "}
            into Insights.
          </h1>

          <p className="mt-6 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            As a dynamic and multi-faceted technology professional, I specialize
            in crafting pixel-perfect, engaging, and accessible digital
            experiences that stand at the intersection of data, design, and
            development{" "}
          </p>

          <div className="flex justify-center items-center pt-5">
            <span className="animate-bounce">
              <IconArrowDownToArc />
            </span>
          </div>
        </div>
      </div>

      <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
