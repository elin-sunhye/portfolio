"use client";

import Btn from "../btn/Btn";
import style from "./TopBtn.module.scss";
import { useEffect, useState } from "react";

interface TopBtnProps {
  position?: "topLeft" | "topRgiht" | "bottomLeft";
  size?: "xsm" | "sm" | "lg" | "xlg";
  color?: string;
  border?: "br_square_round_1" | "br_square_round_2" | "br_round";
  children: React.ReactNode | React.ReactNode[];
}

/**
 * @param position?: 탑버튼 위치 (기본 bottomRight)
 * @return  "topLeft" | "topRgiht" | "bottomLeft";
 *
 * @param size?: 버튼 크기 (기본 md)
 * @return "xsm" | "sm" | "lg" | "xlg";
 *
 * @param border?: 보더 사이즈 (기본 0)
 * @return "br_square_round_1" | "br_square_round_2" | "br_round";
 *
 * @param color?: 버튼 색상 (기본 white)
 * @returns string (black, mainColor, mainColorBorder, disabled, none)
 *
 * @param children: 버튼 text
 * @returns string
 */

export default function TopBtn({
  size,
  color,
  border,
  children,
  position,
}: TopBtnProps) {
  const [opacity, setOpasity] = useState(0);

  useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", () => {
      if (mounted) {
        if (window.scrollY > 30) {
          setOpasity(1);
        } else {
          setOpasity(0);
        }
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      className={`${style.btn_top} ${
        position ? style[position] : style.bottomRight
      }`}
      style={{
        opacity: opacity,
        transition: "all 0.3s",
        zIndex: opacity === 0 ? "-1" : "999999",
      }}
    >
      <Btn
        id={"topBtn"}
        btnSize={size ? size : undefined}
        color={color ? color : undefined}
        border={border ? border : undefined}
        btnStyle={{ aspectRatio: "1 / 1" }}
        title={"위로 가기"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {children}
      </Btn>
    </div>
  );
}
