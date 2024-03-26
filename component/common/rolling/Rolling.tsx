'use client';
import style from './page.module.scss';
import { useState } from 'react';

interface RollingProps {
  children: React.ReactNode;
}
export default function Rolling({ children }: RollingProps) {
  // hover
  const [rollingHover, setRollingHover] = useState<boolean>(false);

  return (
    <div
      className={`flex_start ${style.rolling_box} ${
        rollingHover ? style.rolling_hover : ''
      }`}
      onMouseEnter={() => {
        setRollingHover(true);
      }}
      onMouseLeave={() => {
        setRollingHover(false);
      }}
    >
      {children}
      {children}
    </div>
  );
}
