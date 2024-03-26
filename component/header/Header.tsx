'use client';

import style from './header.module.scss';
import { useEffect, useState } from 'react';
import { FiExternalLink, FiPhoneCall } from 'react-icons/fi';
import { menuType } from '@/type/menu/menuType';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// dummyData
import menuData from '@/dummyData/menu.json';

interface HeaderClientProps {
  // /**
  //  * @param session: 로그인 세션
  //  */
  // session: any;
  // /**
  //  * @param menuData: 메뉴 데이터
  //  */
  // menuData: any[];
}

export default function HeaderClient({}: HeaderClientProps) {
  //
  const router = useRouter();

  // TODO: 메뉴 api 연결 후 useEffect로 set
  // 1차
  const [depth1, setDepth1] = useState<menuType[]>(
    menuData.filter((one) => one.depth === 1)
  );
  // 2차
  const [depth2, setDepth2] = useState<menuType[]>(
    menuData.filter((two) => two.depth === 2)
  );
  // 3차
  const [depth3, setDepth3] = useState<menuType[]>(
    menuData.filter((three) => three.depth === 3)
  );

  // 헤더 스크롤 이벤트
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 스크롤 초기화
      if (window.scrollY > 0) {
        setScroll(true);
      }

      // scroll
      let lastScroll = 0;
      window.addEventListener('scroll', function () {
        let currentScroll = document.documentElement.scrollTop;

        if (currentScroll > lastScroll) {
          setScroll(true);
        } else {
          setScroll(false);
        }

        lastScroll = currentScroll;
      });
    }
  }, []);

  // sitemap
  const [siteMap, setSiteMap] = useState<boolean>(false);

  // sitemap 나와있을때 헤더 스크롤 막기
  useEffect(() => {
    if (siteMap) {
      window.addEventListener('scroll', function (e) {
        setScroll(false);
      });

      // siteMap active 시 외부 스크롤 막기
      document.body.style.cssText = `overflow-y: hidden`;
    } else {
      let lastScroll = 0;
      window.addEventListener('scroll', function () {
        let currentScroll = document.documentElement.scrollTop;

        if (currentScroll > lastScroll) {
          setScroll(true);
        } else {
          setScroll(false);
        }

        lastScroll = currentScroll;
      });

      // siteMap active 시 외부 스크롤 막기
      document.body.style.cssText = `overflow-y: auto`;
    }
  }, [siteMap]);

  return (
    <header
      className={`flex_between ${style.header} ${
        scroll ? style.scroll_none : ''
      } ${siteMap ? style.active : ''}`}
    >
      <div className={`flex_center ${style.left}`}>
        <h1
          className={style.t_logo_l}
          title="홈"
          onClick={() => {
            router.push('/');
          }}
        >
          <Image src={'/logo.png'} alt={'로고이미지'} width={70} height={70} />
        </h1>

        {/* 사이트 맵 */}
        <button
          type="button"
          title="사이트맵 보기"
          className={`${style.btn_site_map}`}
          onClick={() => {
            setSiteMap(!siteMap);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* github */}
        <Link
          href={'https://github.com/elin-sunhye'}
          target="_blank"
          title="github 바로가기"
          className={`flex_center ${style.link_git_hub}`}
        >
          <FiExternalLink />
        </Link>
      </div>

      <div className={`flex_center ${style.right}`}>
        <ul className={`flex_start ${style.depth_1}`}>
          {depth1.map((one: menuType, idx1: number) => {
            const middle = String(depth1.length / 2).includes('.')
              ? Number(String(depth1.length / 2).split('.')[1]) >= 5
                ? Number(String(depth1.length / 2).split('.')[0]) + 1
                : Number(String(depth1.length / 2).split('.')[0])
              : depth1.length / 2;
            return (
              <li
                key={`one_${one.seq}`}
                className={` ${
                  one.menu === 'CAREER'
                    ? style.green
                    : one.menu === 'PROJECT'
                    ? style.pink
                    : one.menu === 'COMPONENT'
                    ? style.purple
                    : style.gray
                } ${
                  middle <= idx1 + 1 && idx1 <= depth1.length
                    ? `flex_end ${style.end}`
                    : 'flex_start'
                }`}
              >
                {one.hasChild ? (
                  <div className={style.box}>
                    <p>{one.menu}</p>
                    {/* <button type="button" title={`${one.menu} 바로가기`}>
                      {one.menu}
                    </button> */}
                    <ul className={style.depth_2}>
                      {depth2.map((two: menuType) => {
                        if (two.parentSeq === one.seq) {
                          return (
                            <li
                              key={`two_${two.seq}`}
                              // className={
                              //   middle <= idx1 + 1 && idx1 <= depth1.length
                              //     ? 'flex_end'
                              //     : 'flex_start'
                              // }
                            >
                              <Link href={two.url}>
                                {two.menu}
                                <span>
                                  {two.menu === 'DEPS'
                                    ? 'AI 융합 솔루션 전문기업'
                                    : two.menu === 'ORANGE'
                                    ? '해외 아티스트 콜라보레이션 전문 기업'
                                    : two.menu === 'LAPCOS'
                                    ? 'LAP 브랜드에서 론칭한 회장품 회사'
                                    : two.menu === 'WIKO'
                                    ? '주물 주조'
                                    : ''}
                                </span>
                              </Link>
                              {/* {two.hasChild ? (
                                <>
                                  <button
                                    type="button"
                                    title={`${two.menu} 바로가기`}
                                  >
                                    {two.menu}
                                  </button>
                                  <ul className={style.depth_3}>
                                    {depth3.map((three: menuType) => {
                                      if (three.parentSeq === two.seq) {
                                        return (
                                          <li
                                            key={`three_${three.seq}`}
                                            className="flex_center"
                                          >
                                            <Link href={three.url}>
                                              {three.menu}
                                            </Link>
                                          </li>
                                        );
                                      }
                                    })}
                                  </ul>
                                </>
                              ) : (
                                <Link href={two.url}>{two.menu}</Link>
                              )} */}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                ) : (
                  <Link href={one.url}> {one.menu}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
