import Title from "@/components/Title";
import BenefitCard from "./BenefitCard";

const Benefit = () => {
  return (
    <section className="py-10 lg:py-20 bg-[#dff0ee]">
      <div className="container flex flex-col gap-10">
        <div className="flex items-center justify-center">
          <Title
            section="Menjadi Bagian Bertumbuh"
            title="Buat Hal Sederhana Jadi Lebih Bermakna"
            description="Ciptakan setiap kegiatan jadi lebih bermakna
            dan bermanfaat untuk kita, dia dan semua."
            className="text-center"
            titleClassName="lg:max-w-[730px]"
            descClassName="lg:w-[550px] mx-auto"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-5 sm:gap-9 lg:gap-0">
          <BenefitCard />
        </div>
      </div>
    </section>
  );
};
export default Benefit;
