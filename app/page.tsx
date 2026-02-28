import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/Projectcars";
import BottomNav from "@/components/bottomNav";
import LogoFOSS from "@/public/LogoFOSS.svg";
import arduino1 from "@/public/Arduino1.svg";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-white">
      <main className="flex w-full flex-col items-center justify-between  bg-white dark:bg-white sm:items-start">
        <Navbar/>
        <Hero/>
        <BottomNav/>
        <section id="projects" className="relative flex min-h-[calc(100vh-146px)] w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
          <div className="items-center justify-center relative" >
            <span className=" font-black text-5xl sm:text-7xl lg:text-8xl text-white flex justify-center items-center hover:underline-offset-0 uppercase">
              projects
              </span>
            <div className="pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-6 px-4 w-full max-w-7xl mx-auto items-center justify-items-center">
                  <ProjectCard
                    title="Foot Step Energy Generator"
                    description="Arduino based iot project"
                    // tags={["C++","Arduino","IoT"]}
                    github="https://github.com/IamHV856156/Footstep-Energy-Generator"
                    link="#"
                    color="from-blue-900 to red-500"
                    iconName="Arduino"
                    iconSrc={arduino1}
                  />
                  <ProjectCard
                    title="The FOSS Club - DTC"
                    description="Contributer at Official website of The FOSS club at Delhi Technical Campus"
                    // tags={["Website","LINUX","FOSS"]}
                    github="https://github.com/IamHV856156/thefossclub.github.io"
                    link="https://thefossclub.org/"
                    color="from-emerald-600 to yellow-500"
                    iconName="The Foss Club-DTC"
                    iconSrc={LogoFOSS}
                  />
                  <ProjectCard
                    title="Smart Survillence Car"
                    description="Arduino based Iot project"
                    // tags={["Arduino","C++","IoT"]}
                    github="#"
                    link="#/"
                    color="from-yellow-600 to yellow-500"
                    iconName="Arduino"
                    iconSrc={arduino1}
                  />
                </div>
              </div>  
            </div>
          </section>
      </main>
    </div>
  );
}
