'use client';

import style from './btn.module.scss';

interface BtnProps {
  type: 'button' | 'submit' | 'reset';
  title: string;
  id: string;
  btnType: 'all' | 'text' | 'ico';
  btnBg?: string;
  btnColor?: string;
  btnSize?: 'sm' | 'md' | 'xlg';
  ico?: JSX.Element;
  icoPosition?: 'left';
  hover: boolean;

  //
  className?: string;
  scss?: React.CSSProperties;
}

/**
 * @btnType : 버튼 종류 - 텍스트 버튼, 아이콘 버튼, 텍스트 아이콘 버튼
 *
 * @btnBg ?: 버튼 배경 색 - 기본 sub-yellow-1
 *
 * @btnColor ?: 버튼 글자 색 - 기본 white
 *
 * @btnSize ? :버튼 사이즈 - 기본 regular
 *
 * @hover : 버튼 호버 유무, 호버 시 아이콘 위치 변경
 *
 * * 텍스트 아이콘 버튼일 경우
 *
 * @type: "all"
 *
 * @ico ?: 버튼 아이콘 태그
 *
 * @icoPosition ?: 버튼 아이콘 위치 - 기본 right
 *
 * * 텍스트 버튼일 경우
 *
 * @type: "text"
 *
 * * 아이콘 버튼일 경우
 *
 * @type: "ico"
 *
 * @ico ?: 버튼 아이콘 태그
 *
 * * 접근성
 *
 * @type : type, role
 *
 * @title : title, aria-label, 버튼이름
 *
 * @id : id
 *
 * * 기본 props
 * @className
 * @scss
 */
export const Btn = ({
  type,
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
  return (
    <button
      type={type}
      role={type}
      title={`${title} 바로가기`}
      aria-label={title}
      id={id}
      className={`flex_center ${style.btn} ${
        btnSize ? style[btnSize] : style.lg
      } ${hover && btnType === 'ico' ? style.hoverIco : ''} ${className}`}
      style={{
        background: btnBg ? btnBg : 'transparent',
        color: btnColor ? btnColor : 'var(--black)',
        ...scss,
      }}
      {...props}
    >
      {btnType === 'all' ? (
        icoPosition && icoPosition === 'left' ? (
          <>
            <span className={`flex_center ${style.ico_btn} ${style.mg_right}`}>
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
      ) : btnType === 'text' ? (
        title
      ) : (
        ico
      )}
    </button>
  );
};
