import React, { PropsWithChildren } from 'react';

interface CardProps {
  className?: string;
}

export const Card: React.FC<PropsWithChildren<CardProps>> = ({ className, children }) => {
  return (
    <div className={`bg-gray-800 rounded-3xl  z-8 overflow-hidden p-6 ${className}`}>
      
      {children}
    </div>
  );
};