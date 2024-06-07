import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  className,
  classNameLogo,
}: {
  className?: string;
  classNameLogo?: string;
}) => {
  return (
    <Link href={"/"} className={cn("flex items-center gap-2", className)}>
      <Image
        src={"/images/logo.svg"}
        alt="Bertumbuh"
        width={40}
        height={40}
        loading="lazy"
        className={cn("size-8 sm:size-auto", classNameLogo)}
      />
      <h1 className="text-xl sm:text-2xl font-semibold uppercase">Bertumbuh</h1>
    </Link>
  );
};
export default Logo;
