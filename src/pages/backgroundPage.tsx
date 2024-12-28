"use client";
import React from "react";
import { Boxes } from "@/components/ui/background";
import { cn } from "@/lib/utils";
import WhiteButton from "./Button";
import { FocusCardsDemo } from "./CardPage";

export function BackgroundBoxesDemo() {
  return (



    <div className="relative z-20 flex flex-col items-center justify-center space-y-4 mt-4">

      <h1 className={cn("md:text-7xl text-xl bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4")}>
        Pudda TS
      </h1>
      <p className="text-center text-neutral-300 text-4xl">
        Pudda is an opinionated, free-to-use, minimalistic, fast web framework
      </p>
      <div className="mt-10">
        <WhiteButton text="Get Started" emoji="🚀"/>
        <WhiteButton text="Docs" emoji="📚"/>
      </div>
      <div className="pt-40 ">
        <p className="text text-neutral-300 text-4xl inline">
          What's in Pudda TS? 
        </p>
        <p className="text text-neutral-400 text-3xl inline m-4">
          Tool required to build API's quickly
        </p>
      </div>
    </div>

  

  );
}
