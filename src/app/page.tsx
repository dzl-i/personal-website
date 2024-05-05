import { Header } from "@/components/Header";
import { NavBar } from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="sm:mx-96 mx-6 sm:mt-20 mt-8 h-auto">
        <Header />
      </div>
    </main>
  );
}
