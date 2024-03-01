'use client';

import style from './header.module.scss';
import { useEffect, useState } from 'react';
import { FiExternalLink, FiPhoneCall } from 'react-icons/fi';

// dummyData
import menuData from '@/dummyData/menu.json';
import { menuType } from '@/type/menu/menuType';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

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
    window.addEventListener('wheel', function (e) {
      if (e.deltaY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  // sitemap
  const [siteMap, setSiteMap] = useState<boolean>(false);

  // TODO: siteMap active 시 외부 스크롤 막기
  // TODO: siteMap active 시 헤더 스크롤 이벤트 막기

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
          <Image src={'/logo.png'} alt={'로고이미지'} width={50} height={50} />
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

      <div className={`flex_start ${style.right}`}>
        <ul className={style.depth_1}>
          {depth1.map((one: menuType) => {
            return (
              <li key={`one_${one.seq}`} className="flex_center">
                {one.hasChild ? (
                  <>
                    <button type="button" title={`${one.menu} 바로가기`}>
                      {one.menu}
                    </button>
                    <ul className={style.depth_2}>
                      {depth2.map((two: menuType) => {
                        if (two.parentSeq === one.seq) {
                          return (
                            <li key={`two_${two.seq}`} className="flex_center">
                              {two.hasChild ? (
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
                              )}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </>
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
