import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/Projectcars";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-white">
      <main className="flex w-full flex-col items-center justify-between  bg-white dark:bg-white sm:items-start">
        <Navbar/>
        <Hero/>
        <ProjectCard
        title="Foot Step Energy Generator"
        description="Arduino based iot project"
        tags={["C++","Arduino","IoT"]}
        github="https://github.com/IamHV856156/Footstep-Energy-Generator"
        link="#"
        color="from-blue-900 to red"/>
      </main>
    </div>
  );
}
