'use client';
import style from './page.module.scss';
import { useEffect, useRef, useState } from 'react';

interface RollingProps {
  deirection?: 'right';
  children: React.ReactNode;
}
export default function Rolling({ deirection, children }: RollingProps) {
  const childrenRef1 = useRef<HTMLDivElement>(null);
  const childrenRef2 = useRef<HTMLDivElement>(null);
  const childrenRef3 = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (typeof window !== 'undefined' && childrenRef.current) {
  //     console.log('width', childrenRef.current.offsetWidth);
  //   }
  // }, [childrenRef]);

  // hover
  const [rollingHover, setRollingHover] = useState<boolean>(false);

  return (
    <div
      className={`flex_start ${style.rolling_box} ${
        rollingHover ? style.rolling_hover : ''
      } ${deirection ? style.right : ''}`}
      onMouseEnter={() => {
        setRollingHover(true);
      }}
      onMouseLeave={() => {
        setRollingHover(false);
      }}
    >
      <div className={`flex_start ${style.rolling_inner}`} ref={childrenRef1}>
        {children}
      </div>
      <div className={`flex_start ${style.rolling_inner}`} ref={childrenRef2}>
        {children}
      </div>
      <div className={`flex_start ${style.rolling_inner}`} ref={childrenRef3}>
        {children}
      </div>
    </div>
  );
}
