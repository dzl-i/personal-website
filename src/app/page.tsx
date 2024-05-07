import { About } from "@/components/About";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="relative max-w-7xl mx-auto sm:px-16 px-6">
      <Header />
      <div className="flex flex-col sm:gap-y-28 gap-y-24">
        <About />
      </div>
    </main>
  );
}
