import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="container h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] bg-[#eaf5f4] lg:bg-transparent flex items-center">
        <div className="relative w-full h-full lg:h-[500px] lg:bg-[#eaf5f4] py-8 lg:py-0 lg:px-7 flex flex-col items-center lg:items-start lg:justify-center gap-5 sm:gap-10">
          <div className="space-y-5 sm:space-y-10 z-10">
            <h1 className="lg:max-w-[850px] text-4xl sm:text-6xl sm:leading-[80px] font-medium text-center lg:text-start">
              Bersama Lindungi Bumi Kita Untuk Masa Depan
            </h1>
            <p className="lg:max-w-[500px] text-lg sm:text-xl text-muted-foreground text-center lg:text-start">
              Kami bermimpi untuk menanam lebih dari 10 juta pohon dan
              menciptakan dunia yang lebih indah dan asri untuk kita, dia, dan
              semua.
            </p>
          </div>

          <div className="inline-flex items-center gap-5">
            <Button size={"sm"} asChild>
              <Link href="/">Eksplorasi Bertumbuh</Link>
            </Button>

            <Button
              variant={"outline"}
              size={"sm"}
              className="border-2 border-primary text-muted-foreground"
              asChild>
              <Link href="/">
                <Play className="size-4 mr-1" />
                Lihat Video
              </Link>
            </Button>
          </div>

          <Image
            src={"/images/tree.png"}
            alt=""
            width={300}
            height={300}
            priority
            className="absolute bottom-0 lg:right-0 size-auto sm:size-[650px] lg:size-[500px] "
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
