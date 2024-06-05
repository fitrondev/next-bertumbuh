import Image from "next/image";

const TreeCount = () => {
  return (
    <section className="py-20">
      <div className="container flex items-center justify-center">
        <div className="inline-flex items-center gap-5 lg:gap-10">
          <Image
            src={"/images/tree2.svg"}
            alt=""
            width={80}
            height={80}
            loading="lazy"
            className="size-24 lg:size-auto"
          />

          <div className="font-medium space-y-5">
            <p className="text-3xl sm:text-5xl">1.351.003</p>
            <span className="text-xl sm:text-2xl text-primary">
              Pohon yang tertanam
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TreeCount;
