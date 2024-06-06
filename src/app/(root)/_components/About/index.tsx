import Image from "next/image";
import Link from "next/link";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container sm:h-[350px] lg:h-[550px] flex flex-col sm:flex-row-reverse gap-10 sm:gap-8 lg:gap-24">
        <div className="sm:flex-1 flex flex-col sm:justify-between lg:justify-start gap-5 sm:gap-0 lg:gap-20">
          <Title section="Tentang Kami" title="BERTUMBUH - Save The World" />

          <p className="lg:text-xl text-justify text-muted-foreground">
            BERTUMBUH - Adalah organisasi non-profit yang mempunyai tujuan untuk
            Melindungi, menjaga, merawat, dan melestarikan pohon-pohon yang ada
            di bumi yang kita pijak sekarang.
          </p>

          <div>
            <Button asChild>
              <Link href="/about">Lihat Selengkapnya</Link>
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[350px] sm:flex-1 sm:h-full">
          <Image
            src={"/images/about.jpg"}
            alt=""
            fill
            sizes="100%"
            loading="lazy"
            className="object-cover brightness-75 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
