"use client"

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation';

import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

import { navLinks } from "@/constants/data";
import LofiIcon from "../../public/icon.png";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <Navbar
      isBordered
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="justify-start flex flex-wrap fixed"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent className="sm:hidden flex-shrink" justify="center">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden items-center flex flex-shrink">
        <NavbarBrand>
          <a className="flex flex-row items-center gap-4" href="/">
            <Image src={LofiIcon} alt="icon" height={32} width={32} />
            <p className="font-bold text-inherit">Denzel | Student at UNSW</p>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8 max-w-6xl mx-auto">
        <NavbarBrand>
          <a className="flex flex-row items-center gap-4" href="/">
            <Image src={LofiIcon} alt="icon" height={32} width={32} />
            <p className="font-bold text-inherit">Denzel | Student at UNSW</p>
          </a>
        </NavbarBrand>
        <NavbarItem isActive={pathname == "/" ? true : false}>
          <Link href="/" color={pathname == "/" ? "primary" : "foreground"}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == "/education" ? true : false}>
          <Link href="/education" color={pathname == "/education" ? "primary" : "foreground"}>
            Education
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == "/projects" ? true : false}>
          <Link href="/projects" color={pathname == "/projects" ? "primary" : "foreground"}>
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == "/skills" ? true : false}>
          <Link href="/skills" color={pathname == "/skills" ? "primary" : "foreground"}>
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == "/contact" ? true : false}>
          <Link href="/contact" color={pathname == "/contact" ? "primary" : "foreground"}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navLinks.map((item, index) => (
          <NavbarMenuItem key={`${item.id}-${index}`}>
            <Link
              className="w-full"
              color={
                pathname == item.id ? "primary" : "foreground"
              }
              href={item.id}
              size="lg"
              onClick={handleCloseMenu}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
