'use clinet';

import { useEffect, useState } from 'react';
import style from './lastSection.module.scss';

interface LastSectionProps {
  title?: string;
  subTitle?: string;
  explain?: string;
  children?: React.ReactNode;
}

/**
 *
 * @param title?: 섹션 제목
 * @returns string
 *
 * @param subTitle?: 섹션 부제목
 * @returns string
 *
 * @param explain?: 섹션 설명
 * @returns string
 *
 * @param children?: 섹션 내용
 * @returns React.ReactNode
 *
 */

export default function LastSection({
  title,
  subTitle,
  explain,
  children,
}: LastSectionProps) {
  // 스크롤 시 애니메이션
  const [viewMoreBg, setViewMoreBg] = useState<boolean>(false);

  // 화면 로드시
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // scroll
      let lastScroll = 0;
      window.addEventListener('scroll', function () {
        // console.log('document.body.clientHeight', document.body.clientHeight);

        // viwe_more_bg
        if (window.scrollY >= document.body.clientHeight - window.innerHeight) {
          setViewMoreBg(true);
        } else {
          // setViewMoreBg(false);
        }
      });
    }
  }, []);
  return (
    <section
      className={`section_padding flex_center ${style.last_section} ${
        viewMoreBg ? style.scroll : ''
      }`}
    >
      <div className={`top_box`}>
        {title && title !== '' ? (
          <h3>
            {title.includes('<br />')
              ? title.split('<br />').map((txt: string, idx: number) => {
                  return (
                    <>
                      {txt} <br />
                    </>
                  );
                })
              : title}
          </h3>
        ) : (
          <></>
        )}
        {subTitle && subTitle !== '' ? (
          <p>
            {subTitle.includes('<br />')
              ? subTitle.split('<br />').map((txt: string, idx: number) => {
                  return (
                    <>
                      {txt} <br />
                    </>
                  );
                })
              : subTitle}
          </p>
        ) : (
          <></>
        )}
        {explain && explain !== '' ? (
          <span>
            {explain.includes('<br />')
              ? explain.split('<br />').map((txt: string, idx: number) => {
                  return (
                    <>
                      {txt} <br />
                    </>
                  );
                })
              : explain}
          </span>
        ) : (
          <></>
        )}
      </div>
      {children ? <div className={style.cont}>{children}</div> : <></>}
    </section>
  );
}
