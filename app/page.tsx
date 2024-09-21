import { FaLocationArrow } from "react-icons/fa6";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div>
        <FloatingNav navItems={[
          {
            name: "Home",
            link: "/",
            icon: <FaLocationArrow />,
          }
        ]}/>
        <Hero/>
      </div>
    </main>
  );
}