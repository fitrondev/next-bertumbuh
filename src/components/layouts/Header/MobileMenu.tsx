import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent>
        <NavLinks className="size-full flex-col justify-center gap-5" />
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
