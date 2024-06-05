import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center justify-center gap-2">
      <Image
        src={"/images/logo.svg"}
        alt="Bertumbuh"
        width={40}
        height={40}
        loading="lazy"
        className="size-8 sm:size-auto"
      />
      <h1 className="text-xl sm:text-2xl font-semibold uppercase">Bertumbuh</h1>
    </Link>
  );
};
export default Logo;
