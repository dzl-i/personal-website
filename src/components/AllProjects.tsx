import { allProjects } from "@/constants/data";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { GithubIcon, SquareArrowOutUpRightIcon } from "lucide-react";

export const AllProjects = () => {
  return (
    <section id="projects" className="relative z-0 sm:min-h-[calc(100vh-241px-10rem)]">
      <h3 className="sm:text-base text-xs text-gray-500 tracking-wider">WHAT I&apos;VE WORKED ON</h3>
      <h1 className="sm:text-5xl text-3xl font-extrabold pt-2">Projects</h1>

      {/* Mobile Version */}
      <div className="sm:hidden sm:pt-16 pt-8">
        {allProjects.map((item, index) => (
          <div key={`${item.title}-${index}`} className="sm:relative flex rounded-xl px-6 py-7 shadow-lg mb-4 bg-[#18181b] light:bg-[#ffffff]">
            <div className="grid grid-cols-1 gap-6">
              <Image src={item.picture} alt={item.title} width={1000} height={1000} className="rounded-lg" />
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p>{item.summary}</p>
                <div className="flex flex-row gap-2 mt-2 flex-wrap">
                  {item.tools.map((tech, idx) => (
                    <Chip key={`${tech}-${idx}`} color="secondary" variant="shadow">{tech}</Chip>
                  ))}
                </div>
                <div className="flex flex-row gap-4">
                  {item.github === "" ? "" : <Button href={item.github} color="primary" variant="shadow" className="flex flex-shrink"><GithubIcon /> GitHub</Button>}
                  {item.live === "" ? "" : <Button href={item.github} color="primary" variant="shadow" className="flex flex-shrink"><SquareArrowOutUpRightIcon /> View Demo</Button>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Version */}
      <div className="hidden sm:flex sm:flex-col sm:pt-16 pt-8">
        {allProjects.map((item, index) => (
          <div key={`${item.title}-${index}`} className="sm:relative flex rounded-xl px-6 py-7 shadow-lg mb-4 bg-[#18181b] light:bg-[#ffffff]">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p>{item.summary}</p>
                <div className="flex flex-row gap-2 mt-2 flex-wrap whitespace-normal">
                  {item.tools.map((tech, idx) => (
                    <Chip key={`${tech}-${idx}`} color="secondary" variant="shadow">{tech}</Chip>
                  ))}
                </div>
                <div className="flex flex-row gap-4 mt-4 items-end">
                  {item.github === "" ? "" : <Button href={item.github} color="primary" variant="shadow" className="flex flex-shrink"><GithubIcon /> GitHub</Button>}
                  {item.live === "" ? "" : <Button href={item.github} color="primary" variant="shadow" className="flex flex-shrink"><SquareArrowOutUpRightIcon /> View Demo</Button>}
                </div>
              </div>
              <div className="flex items-center">
                <Image src={item.picture} alt={item.title} width={1000} height={1000} className="rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
