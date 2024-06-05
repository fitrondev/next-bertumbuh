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
        "shadow-sm lg:shadow-lg",
        scroll &&
          "sticky top-0 left-0 bg-white transition-all duration-700 ease-in-out lg:shadow-md z-50"
      )}>
      <div className="container h-16 lg:h-20 flex items-center justify-between">
        <div>
          <Logo />
        </div>

        <div>
          <div className="hidden lg:flex gap-5">
            <SearchForm />
            <Button size={"sm"} asChild>
              <Link href="/login">Bergabung</Link>
            </Button>
          </div>

          <MobileMenu />
        </div>
      </div>

      <Separator className={cn("hidden lg:block", scroll && "lg:hidden")} />

      <div
        className={cn(
          "hidden container h-12 lg:flex items-center",
          scroll && "lg:hidden transition-all duration-300 ease-in-out"
        )}>
        <NavLinks />
      </div>
    </header>
  );
};
export default Header;
