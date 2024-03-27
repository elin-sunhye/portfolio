'use client';
import style from './page.module.scss';
import { useEffect, useRef, useState } from 'react';

interface RollingProps {
  deirection?: 'right';
  children: React.ReactNode;
}
export default function Rolling({ deirection, children }: RollingProps) {
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <div
      className={`flex_start ${style.rolling_box} ${
        deirection ? style.right : ''
      }`}
      onMouseEnter={onStop}
      onMouseLeave={onRun}
    >
      <div
        className={`flex_start ${style.rolling_list} ${style.original} ${
          animate ? '' : style.stop
        }`}
      >
        {children}
      </div>
      <div
        className={`flex_start ${style.rolling_list} ${style.clone} ${
          animate ? '' : style.stop
        }`}
      >
        {children}
      </div>
    </div>
  );
}
