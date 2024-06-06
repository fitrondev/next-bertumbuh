import Image from "next/image";
import Link from "next/link";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container lg:h-[550px] flex flex-col lg:flex-row-reverse gap-10 lg:gap-24">
        <div className="lg:flex-1 flex flex-col items-center justify-center lg:items-start lg:justify-start gap-5 lg:gap-20">
          <Title section="Tentang Kami" title="BERTUMBUH - Save The World" />

          <p className="lg:text-xl text-justify text-muted-foreground sm:text-center lg:text-justify">
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

        <div className="relative w-full h-[350px] sm:h-[500px] lg:flex-1 lg:h-full">
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
