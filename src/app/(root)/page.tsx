import About from "./_components/About";
import Benefit from "./_components/Benefit";
import Hero from "./_components/Hero";
import Join from "./_components/Join";
import Reading from "./_components/Reading";
import Subscribe from "./_components/Subscribe";
import TreeCount from "./_components/TreeCount";

export default function Home() {
  return (
    <>
      <Hero />
      <TreeCount />
      <About />
      <Join />
      <Benefit />
      <Reading />
      <Subscribe />
    </>
  );
}
