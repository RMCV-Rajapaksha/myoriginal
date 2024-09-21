import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { FaLocationArrow } from "react-icons/fa6";
import { gridItems } from '@/data/index';

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            icon={<FaLocationArrow />} // Added icon prop
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;