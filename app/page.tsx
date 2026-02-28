import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-white">
      <main className="flex w-full flex-col items-center justify-between  bg-white dark:bg-white sm:items-start">
        <Navbar/>
        <Hero/>
      </main>
    </div>
  );
}
