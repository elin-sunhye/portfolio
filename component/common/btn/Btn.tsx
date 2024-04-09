"use client";

import Link from "next/link";
import style from "./btn.module.scss";

interface BtnProps {
  type: "button" | "submit" | "reset" | "link";
  href?: string;
  title: string;
  id: string;
  btnType: "all" | "text" | "ico";
  btnBg?: string;
  btnColor?: string;
  btnSize?: "sm" | "md" | "xlg";
  ico?: JSX.Element;
  icoPosition?: "left";
  hover: boolean;

  //
  className?: string;
  scss?: React.CSSProperties;
}

/**
 * @param btnType : 버튼 종류 - 텍스트 버튼, 아이콘 버튼, 텍스트 아이콘 버튼
 *
 * @param href ?: link 주소
 *
 * @param btnBg ?: 버튼 배경 색 - 기본 sub-yellow-1
 *
 * @param btnColor ?: 버튼 글자 색 - 기본 white
 *
 * @param btnSize ? :버튼 사이즈 - 기본 regular
 *
 * @param hover : 버튼 호버 유무, 호버 시 아이콘 위치 변경
 *
 * * 텍스트 아이콘 버튼일 경우
 *
 * @param type: "all"
 *
 * @param ico ?: 버튼 아이콘 태그
 *
 * @param icoPosition ?: 버튼 아이콘 위치 - 기본 right
 *
 * * 텍스트 버튼일 경우
 *
 * @param type: "text"
 *
 * * 아이콘 버튼일 경우
 *
 * @param type: "ico"
 *
 * @param ico ?: 버튼 아이콘 태그
 *
 * * 접근성
 *
 * @param type : type, role
 *
 * @param title : title, aria-label, 버튼이름
 *
 * @param id : id
 *
 * * 기본 props
 * @param className
 * @param scss
 */
export const Btn = ({
  type,
  href,
  title,
  id,
  btnType,
  btnBg,
  btnColor,
  btnSize,
  ico,
  icoPosition,
  hover,
  className,
  scss,
  ...props
}: BtnProps & React.HTMLProps<HTMLButtonElement>) => {
  if (type === "link") {
    return (
      <Link
        href={href ? href : ""}
        title={`${title} 바로가기`}
        target="_blank"
        aria-label={title}
        id={id}
        className={`flex_center ${style.btn} ${
          btnSize ? style[btnSize] : style.lg
        } ${hover && btnType === "all" ? style.hoverIco : ""} ${className}`}
        style={{
          background: btnBg ? btnBg : "var(--white)",
          color: btnColor ? btnColor : "var(--black)",
          ...scss,
        }}
      >
        {btnType === "all" ? (
          icoPosition && icoPosition === "left" ? (
            <>
              <span
                className={`flex_center ${style.ico_btn} ${style.mg_right}`}
              >
                {ico}
              </span>
              {title}
            </>
          ) : (
            <>
              {title}
              <span className={`flex_center ${style.ico_btn}`}>{ico}</span>
            </>
          )
        ) : btnType === "text" ? (
          title
        ) : (
          ico
        )}
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        role={type}
        title={`${title} 바로가기`}
        aria-label={title}
        id={id}
        className={`flex_center ${style.btn} ${
          btnSize ? style[btnSize] : style.lg
        } ${hover && btnType === "all" ? style.hoverIco : ""} ${className}`}
        style={{
          background: btnBg ? btnBg : "var(--white)",
          color: btnColor ? btnColor : "var(--black)",
          ...scss,
        }}
        {...props}
      >
        {btnType === "all" ? (
          icoPosition && icoPosition === "left" ? (
            <>
              <span
                className={`flex_center ${style.ico_btn} ${style.mg_right}`}
              >
                {ico}
              </span>
              {title}
            </>
          ) : (
            <>
              {title}
              <span className={`flex_center ${style.ico_btn}`}>{ico}</span>
            </>
          )
        ) : btnType === "text" ? (
          title
        ) : (
          ico
        )}
      </button>
    );
  }
};
