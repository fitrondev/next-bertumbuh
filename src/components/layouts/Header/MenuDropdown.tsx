import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
const MenuDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hidden lg:inline-flex items-center text-lg font-medium text-muted-foreground select-none">
        <span>Programs</span> <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-lg font-medium text-muted-foreground select-none">
        <DropdownMenuItem>
          <Link href={"/"}>Jelajah Bersama</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/"}>Tanam Pohon</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/"}>Sosialisasi Hutan</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default MenuDropdown;
