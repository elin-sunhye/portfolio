'use client';

import style from './subTop.module.scss';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

// dummyData
import menuData from '@/dummyData/menu.json';
import Btn from '../btn/Btn';

interface SubTopProps {
  explain: string;
  linkBtn?: {
    id: string;
    btnSize?: 'xsm' | 'sm' | 'lg' | 'xlg';

    //
    className?: string;
    scss?: React.CSSProperties;
    tartget?: string;
  };
  children?: React.ReactNode;
  bgColor?: string;
  color?: string;
}

/**
 * @param explain 메뉴에 대한 설명 글
 * @returns string
 *
 * @param linkBtn? 링크 바로 가기 버튼 여부 기본 없음
 * @returns
    href: string;
    title: string;
    id: string;
  btnSize?: "xsm" | "sm" | "lg" | "xlg";

    //
    className?: string;
    scss?: React.CSSProperties;
  
 *
 * @param children 서브 탑 컨텐츠
 * @returns React.ReactNode
 *
 * @param bgColor? 배경 색 기본 var(--white)
 * @returns string
 *
 * @param color? 글자 색 (메뉴 이름, 메뉴에 대한 설명글만 바뀜) 기본 var(--black)
 * @returns string
 */
export default function SubTop({
  explain,
  linkBtn,
  children,
  bgColor,
  color,
}: SubTopProps) {
  //
  const pathNm = usePathname();

  return (
    <div
      className={`section_padding ${style.sub_top}`}
      style={{
        backgroundColor: bgColor ? bgColor : 'var(--white)',
      }}
    >
      <h3 style={{ color: color ? color : 'var(--black)' }}>
        {menuData.find((mnm) => mnm.url === pathNm)?.menu || ''}
      </h3>
      <p style={{ color: color ? color : 'var(--black)' }}>
        {explain.includes('<br />') ? (
          explain.split('<br />').map((txt: string, idx: number) => {
            return (
              <span key={`txt_${idx}`}>
                {txt} <br />
              </span>
            );
          })
        ) : (
          <span>{explain}</span>
        )}
      </p>
      {linkBtn ? (
        <Btn
          href={menuData.find((mnm) => mnm.url === pathNm)?.site || ''}
          title={'자세히보기'}
          id={linkBtn.id}
          className={`${linkBtn.className ? linkBtn.className : ''} ${
            style.btn_link
          }`}
          btnSize={linkBtn.btnSize ? linkBtn.btnSize : undefined}
          target={linkBtn.tartget}
          border={'br_round'}
        >
          view stie
          <FiExternalLink role="img" aria-label="새창 아이콘" />
        </Btn>
      ) : (
        <></>
      )}
      {children ? <div className={style.cont}>{children}</div> : <></>}
    </div>
  );
}
