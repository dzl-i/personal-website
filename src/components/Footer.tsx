import { Divider } from "@nextui-org/react";
import Link from "next/link";

import { GithubIcon, LinkedinIcon, MailIcon, InstagramIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="w-full dark:bg-black light:bg-white">
      <Divider />
      <div className="flex flex-col items-center sm:py-12 py-8">
        <p>&copy; {new Date().getFullYear()} Christian Denzel Iskandar</p>
        <p className="mt-4">Find me on</p>
        <div className="flex flex-row gap-4 mt-2 items-center">
          <Link href={"https://github.com/dzl-i"} className="hover:cursor-pointer">
            <GithubIcon />
          </Link>
          <Link href={"https://www.linkedin.com/in/denzel-iskandar"} className="hover:cursor-pointer">
            <LinkedinIcon />
          </Link>
          <Link href={"mailto:denzel.iskandar@gmail.com"} className="hover:cursor-pointer">
            <MailIcon />
          </Link>
          <Link href={"https://www.instagram.com/denzel.iskandar/"} className="hover:cursor-pointer">
            <InstagramIcon />
          </Link>
        </div>

        <a href="#" className="text-xs text-gray-500 underline mt-8">
          Back to Top
        </a>
      </div>
    </footer>
  )
}