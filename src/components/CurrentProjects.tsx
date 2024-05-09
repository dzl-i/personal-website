import { currentProjects } from "@/constants/data";
import { Card, CardHeader, CardBody, Image, Chip, Button, CardFooter } from "@nextui-org/react";
import Link from "next/link";

export const CurrentProjects = () => {
  return (
    <section id="currentprojects" className="relative z-0">
      <h3 className="sm:text-base text-xs text-gray-500 tracking-wider">WHAT I&apos;M WORKING ON</h3>
      <h1 className="sm:text-5xl text-3xl font-extrabold pt-2">Ongoing Projects</h1>

      <div className="sm:pt-16 pt-8 grid sm:grid-cols-3 grid-cols-1 sm:gap-8 gap-6">
        {currentProjects.map((item, index) => (
          <Card className="py-4" key={`${item.title}-${index}`}>
            <CardHeader className="overflow-visible py-2 mt-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={item.picture}
                width={1000}
              />
            </CardHeader>
            <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-2xl">{item.title}</h4>
              <p className="text-sm">{item.description}</p>
            </CardBody>
            <CardFooter>
              <div className="flex flex-row gap-2 mt-5">
                {item.techStack.map((tech, idx) => (
                  <Chip key={`${tech}-${idx}`} color="secondary" variant="shadow">{tech}</Chip>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center mt-12">
        <Link href={"/projects"}>
          <Button color="primary" variant="shadow">
            Discover More Projects
          </Button>
        </Link>
      </div>
    </section>
  )
}