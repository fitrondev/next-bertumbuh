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
    path: "/about",
  },
  {
    title: "Kami Butuh Anda",
    path: "/join-us",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Bergabung",
    path: "/join-us",
  },
];

const NavItem = () => {
  return (
    <>
      {navData.slice(0, 5).map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="text-2xl lg:text-lg font-medium lg:text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out">
          {item.title}
        </Link>
      ))}

      {navData.slice(5).map((item, index) => (
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
