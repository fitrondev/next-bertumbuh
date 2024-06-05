import { cn } from "@/lib/utils";
import NavItem from "./NavItem";

const NavLinks = ({ className }: { className?: string }) => {
  return (
    <nav className={cn("flex gap-5", className)}>
      <NavItem />
    </nav>
  );
};
export default NavLinks;
