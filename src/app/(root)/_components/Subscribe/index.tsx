import Title from "@/components/Title";
import SubscribeForm from "./SubscribeForm";

const Subscribe = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container lg:h-[300px] flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-center">
          <Title
            title="Subscribe Newsletter Kami"
            description="Jangan sampai terlewat informasi serta berita dari kami. Subscribe sekarang!"
            className="text-center"
            titleClassName="lg:max-w-[730px]"
            descClassName="lg:w-[400px] mx-auto"
          />
        </div>

        <div>
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
