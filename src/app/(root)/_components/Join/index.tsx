import Image from "next/image";
import Link from "next/link";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";

const Join = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container sm:h-[450px] lg:h-[550px] flex flex-col sm:flex-row gap-10 sm:gap-8 lg:gap-24">
        <div className="sm:flex-1 flex flex-col sm:justify-between gap-5 sm:gap-0">
          <Title
            section="Kami Butuh Anda"
            title="Kenapa BERTUMBUH Butuh Anda?"
          />

          <div className="inline-flex gap-5">
            <div>
              <p className="text-xl lg:text-3xl font-medium">15.3 M</p>
              <span className="lg:text-xl text-muted-foreground">
                Pohon ditebang
              </span>
            </div>

            <div>
              <p className="text-xl lg:text-3xl font-medium">14.7 ha</p>
              <span className="lg:text-xl text-muted-foreground">
                Hutan ditebang
              </span>
            </div>
          </div>

          <p className="lg:text-xl text-justify text-muted-foreground">
            15.3 Milyar pohon setiap tahun ditebang di dunia serta hilangnya
            14.7 hektare lahan hutan hilang di indonesia. Hal ini menyebabkan
            bumi tidak stabil dan kami mengajak kamu untuk bergabung dan meraih
            tujuan bersama.
          </p>

          <div>
            <Button asChild>
              <Link href="/">Gabung Bertumbuh</Link>
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[350px] sm:flex-1 sm:h-full">
          <Image
            src={"/images/join.jpg"}
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
export default Join;
