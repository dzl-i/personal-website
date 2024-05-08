import { Button } from "@nextui-org/react"
import Link from "next/link"

export const About = () => {
  return (
    <section className="relative z-0 sm:pt-16 pt-8">
      <span id="about" className="mt-[-100px] pb-[80px] block">&nbsp;</span>

      <div className="relative w-full">
        <h3 className="sm:text-base text-xs text-gray-500 tracking-wider">INTRODUCTION</h3>
        <h1 className="sm:text-5xl text-3xl font-extrabold pt-2">About Me</h1>

        <p className="sm:text-lg text-sm mt-4">
          I&apos;m a Software Engineering Student at UNSW that is especially interested in Web Development, Cyber Security, and Data Engineering. I have several experience with Backend Development using Python, Express.js and Java. I learn new skills quickly and able to adapt to new environments.
        </p>

        <div className="flex flex-row justify-center gap-4 mt-6">
          <Link href={"/education"}>
            <Button color="primary" variant="shadow">
              Academic Journey
            </Button>
          </Link>
          <Link href={"/skills"}>
            <Button color="primary" variant="shadow">
              What I&apos;ve Learnt
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}