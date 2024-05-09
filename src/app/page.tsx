import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { StarsCanvas } from "@/components/Stars";
import { Timeline } from "@/components/Timeline";

import { Button } from "@nextui-org/react";
import Link from "next/link";

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
      </div>
      <div className="flex justify-center items-center mb-12">
        <Link href={"/contact"}>
          <Button color="primary" variant="shadow">
            Contact Me
          </Button>
        </Link>
      </div>
    </main>
  );
}
