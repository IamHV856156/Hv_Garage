import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/Projectcars";
import BottomNav from "@/components/bottomNav";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-white">
      <main className="flex w-full flex-col items-center justify-between  bg-white dark:bg-white sm:items-start">
        <Navbar/>
        <Hero/>
        <BottomNav/>
        <section id="Projects" className="relative flex min-h-[calc(100vh-146px)] w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
          <div className="items-center justify-center relative" >
            <span className=" font-black text-8xl text-white flex justify-center items-center hover:underline-offset-0 uppercase">
              projects
              </span>
            <div className="pt-20">
                <div className="relative flex grid-cols-1 gap-10 justify-items-center">
                  <ProjectCard
                    title="Foot Step Energy Generator"
                    description="Arduino based iot project"
                    tags={["C++","Arduino","IoT"]}
                    github="https://github.com/IamHV856156/Footstep-Energy-Generator"
                    link="#"
                    color="from-blue-900 to red-500"
                  />
                  <ProjectCard
                    title="The FOSS Club - DTC"
                    description="Contributer at Official website of The FOSS club at Delhi Technical Campus"
                    tags={["Website","LINUX","FOSS"]}
                    github="https://github.com/IamHV856156/thefossclub.github.io"
                    link="https://thefossclub.org/"
                    color="from-emerald-600 to yellow-500"
                  />
                  <ProjectCard
                    title="Smart Survillence Car"
                    description="Arduino based Iot project"
                    tags={["Arduino","C++","IoT"]}
                    github="#"
                    link="#/"
                    color="from-yellow-600 to yellow-500"
                  />
                </div>
              </div>  
            </div>
          </section>
      </main>
    </div>
  );
}
