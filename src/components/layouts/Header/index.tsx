"use client";

import Link from "next/link";

import Logo from "@/components/Logo";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import SearchForm from "../SearchForm";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import MenuDropdown from "./MenuDropdown";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "shadow-sm",
        scroll &&
          "sticky top-0 left-0 bg-white transition-all duration-500 ease-in-out lg:shadow-md z-50"
      )}>
      <div
        className={cn(
          "container h-16 lg:h-20 flex items-center justify-between",
          scroll && "lg:h-16"
        )}>
        <div className="lg:inline-flex items-center gap-5">
          <Logo />

          <MenuDropdown />
        </div>

        <div>
          <div className="hidden lg:flex gap-5">
            <SearchForm />
            <Button size={"sm"} asChild>
              <Link href="/join-us">Bergabung</Link>
            </Button>
          </div>

          <MobileMenu />
        </div>
      </div>

      <Separator className={cn("hidden lg:hidden", scroll && "lg:block")} />

      <div
        className={cn(
          "hidden",
          scroll &&
            "container h-12 lg:flex items-center transition-all duration-500 ease-in-out"
        )}>
        <NavLinks />
      </div>
    </header>
  );
};
export default Header;
