import Image from "next/image";
import Link from "next/link";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";

const Reading = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container flex flex-col gap-10">
        <div>
          <Title
            section="Baca Tulisan Kami"
            title="Berita, Artikel & Event Terbaru"
            description="Baca dan ikuti event serta program-program yang kami lakukan untuk bumi yang lebih baik."
            descClassName="sm:w-[500px]"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-5 sm:gap-4 lg:gap-14">
          <div className="sm:flex-1 space-y-5">
            <div className="relative h-[250px] sm:h-[200px] lg:h-[300px]">
              <Image
                src={"/images/read1.jpg"}
                alt=""
                fill
                sizes="100%"
                loading="lazy"
                className="object-cover rounded-[8px]"
              />
            </div>

            <div className="space-y-5">
              <h3 className="text-xl lg:text-2xl font-medium">
                Selamatkan Hutan Untuk Bumi yang Sehat dan Asri
              </h3>
              <p className="text-sm lg:text-lg text-justify text-muted-foreground">
                Hutan telah banyak memberi manfaat bagi kita semua. Namun
                melihat data sekarang hutan di dunia terutama di Indonesia mulai
                terancam. Untuk tidak menimbulkan kerusakan yang lebih parah
                kita harus mencegahnya dengan cara. see more....
              </p>
            </div>
          </div>

          <div className="sm:flex-1 flex flex-col sm:justify-between gap-4 sm:gap-0">
            <div className="h-[70px] sm:h-[80px] lg:h-[100px] flex flex-row-reverse sm:flex-row justify-between">
              <div className="max-w-[280px] sm:max-w-[260px] lg:max-w-[440px] flex flex-col justify-between">
                <h3 className="lg:text-2xl font-medium">
                  Kenali Pengertian, Fungsi dan Jenis Hutan
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  1 Januari 2022
                </p>
              </div>

              <div className="relative w-16 sm:w-20 lg:w-32 h-full">
                <Image
                  src={"/images/read1.jpg"}
                  alt=""
                  fill
                  loading="lazy"
                  className="object-cover rounded-[4px]"
                />
              </div>
            </div>

            <div className="h-[70px] sm:h-[80px] lg:h-[100px] flex flex-row-reverse sm:flex-row justify-between">
              <div className="max-w-[280px] sm:max-w-[260px] lg:max-w-[440px] flex flex-col justify-between">
                <h3 className="lg:text-2xl font-medium">
                  Kegiatan Naik Gunung Ciremai bersama BERTUMBUH
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  1 Januari 2022
                </p>
              </div>

              <div className="relative w-16 sm:w-20 lg:w-32 h-full">
                <Image
                  src={"/images/read1.jpg"}
                  alt=""
                  fill
                  loading="lazy"
                  className="object-cover rounded-[4px]"
                />
              </div>
            </div>

            <div className="h-[70px] sm:h-[80px] lg:h-[100px] flex flex-row-reverse sm:flex-row justify-between">
              <div className="max-w-[280px] sm:max-w-[260px] lg:max-w-[440px] flex flex-col justify-between">
                <h3 className="lg:text-2xl font-medium">
                  Program : Pelatihan Cara Menanam dan Merawat Pohon
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  1 Januari 2022
                </p>
              </div>

              <div className="relative w-16 sm:w-20 lg:w-32 h-full">
                <Image
                  src={"/images/read1.jpg"}
                  alt=""
                  fill
                  loading="lazy"
                  className="object-cover rounded-[4px]"
                />
              </div>
            </div>

            <div className="h-[70px] sm:h-[80px] lg:h-[100px] flex flex-row-reverse sm:flex-row justify-between">
              <div className="max-w-[280px] sm:max-w-[260px] lg:max-w-[440px] flex flex-col justify-between">
                <h3 className="lg:text-2xl font-medium">
                  BERTUMBUH Menjadi Platform Peduli Bumi Terbaik Versi CCNN
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  1 Januari 2022
                </p>
              </div>

              <div className="relative w-16 sm:w-20 lg:w-32 h-full">
                <Image
                  src={"/images/read1.jpg"}
                  alt=""
                  fill
                  loading="lazy"
                  className="object-cover rounded-[4px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button size={"sm"} asChild>
            <Link href="/blog">Lihat Selengkapnya</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Reading;
