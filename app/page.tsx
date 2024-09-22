import { FaLocationArrow } from "react-icons/fa6";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";

import { Skills } from "@/components/Skills";
import Projects from "@/components/Projects";





export default function Home() {
  return (
    <main className=" bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {
            name: "Home",
            link: "/",
            icon: <FaLocationArrow />,
          }
        ]}/>
        <Hero/>
        <Grid/>
    <Projects/>
        <Skills/>
      </div>
    </main>
  );
}