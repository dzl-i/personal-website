"use client"

import Link from "next/link";
import { TypingAnimation } from "./TypingAnimation"
import { LinkedinIcon, GithubIcon, MailIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const handleDownload = () => {
    router.push("/resume.pdf");
  };

  return (
    <section id="header" className="relative w-full h-screen mx-auto">
      <div className="absolute h-screen flex flex-row items-center gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-80 h-60 bg-gradient-to-b from-primary" />
        </div>

        <div>
          <h1 className="sm:text-7xl text-3xl font-extrabold mt-5">
            Hi! I&apos;m <span className="text-primary">Denzel</span>
          </h1>
          <p className="sm:text-3xl text-lg">
            I am a Third Year <br className="sm:block hidden" />
            Software Engineering Student at UNSW!
          </p>
          <div className="mt-12 h-12">
            <TypingAnimation />
          </div>
          <div className="flex flex-row gap-4 mt-6 items-center">
            <Link href={"https://github.com/dzl-i"} className="hover:cursor-pointer">
              <GithubIcon />
            </Link>
            <Link href={"https://www.linkedin.com/in/denzel-iskandar"} className="hover:cursor-pointer">
              <LinkedinIcon />
            </Link>
            <Link href={"mailto:denzel.iskandar@gmail.com"} className="hover:cursor-pointer">
              <MailIcon />
            </Link>
            <Button onClick={handleDownload}>
              Download Résumé
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute sm:bottom-12 bottom-28 w-full flex flex-row justify-center items-center animate-bounce gap-2">
        <Link href={"#about"}>View More</Link>
        <ChevronDownIcon />
      </div>
    </section>
  )
}