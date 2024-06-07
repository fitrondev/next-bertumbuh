import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10 pb-5 lg:pt-20  bg-primary text-white">
      <div className="container space-y-5 lg:space-y-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-0">
          <div className="lg:flex-1">
            <Logo
              className="text-white"
              classNameLogo="border-2 rounded-full"
            />
          </div>

          <div className="hidden lg:flex-1 lg:flex flex-col lg:flex-row gap-5">
            <div className="flex-1 space-y-4">
              <h4 className="text-xl font-medium">POST</h4>
              <div className="flex flex-col gap-2">
                <Link href="/berita">Berita</Link>
                <Link href="/event">Event</Link>
                <Link href="/blog">Blog</Link>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <h4 className="text-xl font-medium">Programs</h4>
              <div className="flex flex-col gap-2">
                <Link href="/berita">Jelajah Bersama</Link>
                <Link href="/event">Tanam Pohon</Link>
                <Link href="/blog">Sosialisai Hutan</Link>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <h4 className="text-xl font-medium">Alamat</h4>
              <div className="flex flex-col gap-2">
                <p>
                  Jl. Kh. Wahid Hasyim No.76, Cipeujeuh Wetan, Kec. Lemahabang,
                  Kabupaten Cirebon, Jawa Barat, 45183
                </p>
                <p>(0231) 635308</p>
                <p>bertumbuh@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-5 lg:gap-0">
          <div className="inline-flex text-center gap-4">
            <Link href="/">
              <Image
                src={"/icons/instagram.svg"}
                alt=""
                width={20}
                height={20}
                loading="lazy"
              />
            </Link>

            <Link href="/">
              <Image
                src={"/icons/facebook.svg"}
                alt=""
                width={20}
                height={20}
                loading="lazy"
              />
            </Link>

            <Link href="/">
              <Image
                src={"/icons/x.svg"}
                alt=""
                width={20}
                height={20}
                loading="lazy"
              />
            </Link>

            <Link href="/">
              <Image
                src={"/icons/gmail.svg"}
                alt=""
                width={20}
                height={20}
                loading="lazy"
              />
            </Link>
          </div>

          <div>
            <p>© 2021 Bertumbuh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
