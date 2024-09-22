"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function Skills() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className='flex justify-center'>
              <p className='font-semibold text-center mt-12'>Core Competencies</p>
            </div>
            <h2 className='text-4xl text-center mt-3 font-extrabold'>Technical Skills</h2>
            <p className='text-center text-purple font-semibold mt-3 text-2xl'>Showcasing my expertise in software development and technology</p>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="skills"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
