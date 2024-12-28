import { Boxes } from "@/components/ui/background";
import { NavbarDemo } from "@/components/ui/navbar";
import { cn } from "@/lib/utils";
import { BackgroundBoxesDemo } from "@/pages/backgroundPage";
import WhiteButton from "@/pages/Button";
import { FocusCardsDemo } from "@/pages/CardPage";


import React from "react";


export default function Page(){
  return(
     
 <div className=" relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"/>

        <Boxes/>
        <h1 className={cn("md:text-7xl text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-40 relative z-20")}>
        Pudda TS
      </h1>
      <p className="text-center text-neutral-300 text-4xl z-20">
        Pudda is an opinionated, free-to-use, minimalistic, fast web framework
      </p>
      <div className="mt-10">
        <WhiteButton text="Get Started" emoji="🚀"/>
        <WhiteButton text="Docs" emoji="📚"/>
      </div>
        <p className="text text-neutral-300 text-4xl inline pt-40 z-20">
          What's in Pudda TS? 
        </p>
        <p className="text text-neutral-400 text-3xl inline m-4 z-20">
          Tool required to build API's quickly
        </p>
        <NavbarDemo />
        <FocusCardsDemo/>
  </div>
  )
}