import { About } from "@/components/About";
import { CurrentProjects } from "@/components/CurrentProjects";
import { Header } from "@/components/Header";
import { StarsCanvas } from "@/components/Stars";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <main className="w-full">
      <StarsCanvas />
      <div className="max-w-7xl mx-auto sm:px-16 px-6">
        <Header />
      </div>
      <div className="flex flex-col max-w-7xl mx-auto sm:px-16 px-6 sm:gap-y-24 gap-y-20 mb-12">
        <About />
        <Timeline />
        <CurrentProjects />
      </div>
    </main>
  );
}
