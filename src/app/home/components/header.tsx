"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ThemeToggle } from "../../../components/theme-toggle";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { name: "Início", link: "#home" },
    { name: "Soluções", link: "#solucoes" },
    { name: "Sobre", link: "#sobre" },
    { name: "Contato", link: "#contato" },
  ];

  const logoSrc = theme === "dark" ? "/images/pacsys-logo-dark.png" : "/images/pacsys-logo.png";

  return (
    <Navbar className="fixed top-0">
      <NavBody>
        <a
          href="#home"
          className="relative z-20 mr-4 flex items-center space-x-3 px-2 py-1"
        >
          <Image
            src={logoSrc}
            alt="Pacsys Logo"
            width={180}
            height={180}
            className="object-contain transition-opacity duration-300"
            priority
          />
        </a>

        <NavItems items={navItems} />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <NavbarButton
            variant="secondary"
            href="#contato"
            className="text-pacsys-dark dark:text-white"
          >
            Fale Conosco
          </NavbarButton>
          <NavbarButton
            variant="dark"
            href="#contato"
            className="bg-pacsys-dark hover:bg-pacsys-light transition-colors"
          >
            Começar Agora
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <a
            href="#home"
            className="relative z-20 flex items-center space-x-2 px-2 py-1"
          >
            <Image
              src={logoSrc}
              alt="Pacsys Logo"
              width={100}
              height={100}
              className="object-contain transition-opacity duration-300"
              priority
            />
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen}>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="w-full text-left text-base font-medium text-neutral-600 hover:text-pacsys-light transition-colors dark:text-neutral-300"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-2 pt-4">
            <NavbarButton
              variant="secondary"
              href="#contato"
              className="w-full text-pacsys-dark dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              Fale Conosco
            </NavbarButton>
            <NavbarButton
              variant="dark"
              href="#contato"
              className="w-full bg-pacsys-dark hover:bg-pacsys-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Começar Agora
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}