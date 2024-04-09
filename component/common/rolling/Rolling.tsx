"use client";
import style from "./rolling.module.scss";
import { useEffect, useRef, useState } from "react";

interface RollingProps {
  deirection?: "right";
  speed?: string;
  children: React.ReactNode;
  hoverStop?: boolean;
}

/**
 *
 * @param deirection? 방향 기본 left
 * @returns right

* @param speed? 속도 기본 50s
 * @returns string
 *
 * @param children 롤링 내용
 * @returns <></>
 *
 * @param hoverStop? 호버 시 롤링 stop 여부 기본 true
 * @returns false
 */
export default function Rolling({
  deirection,
  speed,
  children,
  hoverStop,
}: RollingProps) {
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <div
      className={`flex_start ${style.rolling_box} ${
        deirection ? style.right : ""
      }`}
      onMouseEnter={hoverStop || hoverStop === false ? undefined : onStop}
      onMouseLeave={hoverStop || hoverStop === false ? undefined : onRun}
    >
      <div
        className={`flex_start ${style.rolling_list} ${style.original} ${
          animate ? "" : style.stop
        }`}
        style={{ animationDuration: speed ? speed : "50s" }}
      >
        {children}
      </div>
      <div
        className={`flex_start ${style.rolling_list} ${style.clone} ${
          animate ? "" : style.stop
        }`}
        style={{ animationDuration: speed ? speed : "50s" }}
      >
        {children}
      </div>
    </div>
  );
}
