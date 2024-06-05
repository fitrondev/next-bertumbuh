import Link from "next/link";

const navData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Kemitraan",
    path: "/kemitraan",
  },
  {
    title: "Tentang Kami",
    path: "/tentang",
  },
  {
    title: "Kami Butuh Kamu",
    path: "/kami-butuh-kamu",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Newsletter",
    path: "/newsletter",
  },
  {
    title: "Bergabung",
    path: "/registration",
  },
];

const NavItem = () => {
  return (
    <>
      {navData.slice(0, 6).map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="text-2xl lg:text-lg font-medium lg:text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out">
          {item.title}
        </Link>
      ))}

      {navData.slice(6).map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="lg:hidden text-2xl lg:text-lg font-medium lg:text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out">
          {item.title}
        </Link>
      ))}
    </>
  );
};
export default NavItem;
