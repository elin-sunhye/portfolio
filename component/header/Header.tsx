'use client';

import style from './header.module.scss';
import { useEffect, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

// dummyData
import menuData from '@/dummyData/menu.json';
import { menuType } from '@/type/menu/menuType';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

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

  return (
    <header
      className={`flex_between ${style.header} ${
        scroll ? style.scroll_none : ''
      }`}
    >
      <a href={'/'} className={style.t_logo_l}></a>
      <nav className={`flex_end ${style.gnb}`}>
        <ul className={`flex_end ${style.depth_1}`}>
          {depth1.map((one: menuType) => {
            return (
              <li key={`depth_1_${one.seq}`}>
                <p>{one.menu}</p>

                {one.hasChild === 'Y' ? (
                  <ul className={style.depth_2}>
                    {depth2.map((two) => {
                      if (two.parentSeq === one.seq) {
                        return (
                          <li>
                            <a
                              href={
                                two.hasChild === 'N'
                                  ? two.url
                                  : depth3.find(
                                      (three) =>
                                        three.parentSeq === two.seq &&
                                        three.sort === 1
                                    )?.url
                              }
                              title={
                                two.hasChild === 'N'
                                  ? two.title
                                  : depth3.find(
                                      (three) =>
                                        three.parentSeq === two.seq &&
                                        three.sort === 1
                                    )?.title
                              }
                            >
                              {two.menu}
                            </a>
                          </li>
                        );
                      }
                    })}
                  </ul>
                ) : (
                  <></>
                )}
              </li>
            );
          })}
        </ul>

        <ul className={`flex_end ${style.more_info}`}>
          <li>
            <a
              href="https://github.com/elin-sunhye?tab=repositories"
              target="_blank"
              title="포트폴리오 더 보기"
              className="flex_end"
            >
              gitHub
              <FiExternalLink role={'img'} aria-label={'링크 아이콘'} />
            </a>
          </li>
          {/* <li>
            <button type="button" title="연락하기">
              <FiPhoneCall role={'img'} aria-label={'전화 아이콘'} size={16} />
            </button>
          </li> */}
        </ul>

        <button
          type="button"
          title="사이트맵 보기"
          className={`${style.btn_site_map} ${
            siteMap ? style.site_map_open : ''
          }`}
          onClick={() => {
            setSiteMap(!siteMap);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <ul className={style.site_map}>
        {depth1.map((one: menuType) => {
          return (
            <li key={`site_map_${one.seq}`}>
              {one.hasChild === 'Y' ? (
                <>
                  <button className="flex_between">
                    <p>{one.menu}</p>
                    <span>
                      <MdKeyboardArrowUp />
                      <MdKeyboardArrowDown />
                    </span>
                  </button>
                  <ul className={style.site_map_2}>
                    {depth2.map((two: menuType) => {
                      if (two.parentSeq === one.seq) {
                        return (
                          <li key={`site_map_${two.seq}`}>
                            {two.hasChild === 'Y' ? (
                              <>
                                <button type="button" className="flex_between">
                                  <p>{two.menu}</p>
                                  <span>
                                    <MdKeyboardArrowUp />
                                    <MdKeyboardArrowDown />
                                  </span>
                                </button>

                                <ul className={style.site_map_3}>
                                  {depth3.map((three) => {
                                    if (three.parentSeq === two.seq) {
                                      return (
                                        <li>
                                          <a href={three.url}>{three.menu}</a>
                                        </li>
                                      );
                                    }
                                  })}
                                </ul>
                              </>
                            ) : (
                              <a href={two.url}>{two.menu}</a>
                            )}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </>
              ) : (
                <a href={one.url}>{one.menu}</a>
              )}
            </li>
          );
        })}
      </ul>
    </header>
  );
}
