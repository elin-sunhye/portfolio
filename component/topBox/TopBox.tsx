'use client';

import style from './topBox.module.scss';
import { usePathname } from 'next/navigation';
import Btn from '../common/btn/Btn';
import { FiExternalLink } from 'react-icons/fi';

// dummyData
import menuData from '@/dummyData/menu.json';

interface TopBoxProps {
  direction?: 'left' | 'right';
  point?: string;
  title?: string;
  explain?: string;
  desc?: string;
  linkBtn?: {
    id: string;
    btnSize?: 'xsm' | 'sm' | 'lg' | 'xlg';

    //
    className?: string;
    scss?: React.CSSProperties;
    tartget?: string;
  };
  color?: string;
}

/**
 * @param direction? 텍스트 정렬 뱡향 기본 center
 * @returns 'left' | 'right'
 * 
 * @param point? 메뉴에 대한 point 글
 * @returns string
 * 
 * @param title 메뉴에 대한 point 글
 * @returns string
 * 
 * @param explain? 메뉴에 대한 설명 글
 * @returns string
 * 
 * @param desc? 메뉴에 대한 설명 글
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
 * @param color? 글자 색 (메뉴 이름, 메뉴에 대한 설명글만 바뀜) 기본 var(--black)
 * @returns string
 */

export default function TopBox({
  direction,
  point,
  title,
  explain,
  desc,
  linkBtn,
  color,
}: TopBoxProps) {
  const pathNm = usePathname();

  return (
    <div
      className={`wrap top_box ${
        direction === 'left'
          ? style.left
          : direction === 'right'
          ? style.right
          : ''
      }`}
    >
      {point ? <span className="point">{point}</span> : <></>}

      <h3>
        {title ? title : menuData.find((mnm) => mnm.url === pathNm)?.menu || ''}
      </h3>
      {explain ? (
        <p style={{ color: color ? color : 'var(--black)' }}>
          {explain.split('<br />').map((txt: string, idx: number) => {
            return <span key={`txt_${idx}`}>{txt}</span>;
          })}
        </p>
      ) : (
        <></>
      )}
      {desc ? (
        <span>
          {desc.split('<br />').map((txt: string, idx: number) => {
            return <span key={`txt_${idx}`}>{txt}</span>;
          })}
        </span>
      ) : (
        <></>
      )}

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
    </div>
  );
}
