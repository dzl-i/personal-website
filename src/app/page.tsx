import { About } from "@/components/About";
import { NavBar } from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="sm:mx-96 mx-6 mt-12">
        <About />
      </div>
    </main>
  );
}
