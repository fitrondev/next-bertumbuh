import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { HandHeart, MoveRight, Tractor, Users } from "lucide-react";

const benefitData = [
  {
    icon: <HandHeart />,
    desc: "Anda dapat membantu dengan berdonasi untuk biaya penanaman, perwatan, bibit dan biaya oprasional lainnya.",
    textBtn: "Menjadi Donatur",
  },
  {
    icon: <Users />,
    desc: "Kamu dapat membantu bertumbuh dengan menjadi relawan kami. Kamu dapat langsung menanam pohon, membantu berkebun, melakukan sosialisasi dan program-program menarik lainnya.",
    textBtn: "Menjadi Relewan",
  },
  {
    icon: <Tractor />,
    desc: "Kamu akan belajar tentang cara  menanam pohon, merawat pohon serta hal lain dengan bergabung sebagai petani.",
    textBtn: "Menjadi Petani",
  },
];

const BenefitCard = () => {
  return (
    <>
      {benefitData.map((item, index) => (
        <Card
          key={index}
          className="sm:w-[350px] lg:w-[400px] h-[300px] lg:h-[350px] flex flex-col justify-between">
          <CardHeader>
            <div className="max-w-max bg-primary p-3 text-white rounded-[5px]">
              {item.icon}
            </div>
          </CardHeader>
          <CardContent className="h-full">
            <p className="text-sm lg:text-base text-justify text-muted-foreground">
              {item.desc}
            </p>
          </CardContent>
          <CardFooter>
            <Button
              variant={"link"}
              size={"sm"}
              className="px-0 text-sm lg:text-base "
              asChild>
              <Link href="/">
                {item.textBtn} <MoveRight className="ml-2" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
export default BenefitCard;
