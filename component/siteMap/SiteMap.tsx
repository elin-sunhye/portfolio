'use client';

import style from './SiteMap.module.scss';
import React, { useEffect, useState } from 'react';

import {
  FiChevronDown,
  FiChevronUp,
  FiEdit,
  FiExternalLink,
  FiHome,
  FiPower,
  FiUser,
} from 'react-icons/fi';
import Input from '../common/input/Input';

interface SiteMapProps {
  menuData: any[];

  session: any;
}

export default function SiteMap({ menuData, session }: SiteMapProps) {
  // 사이트맵 버튼 클릭

  const [siteMapOpen, setSiteMapOpen] = useState<boolean>(false);

  // 사이트맵 오픈 시 외부 스크롤 막기

  useEffect(() => {
    if (siteMapOpen) {
      document.body.style.cssText = `

position: fixed;

top: -${window.scrollY}px;

overflow-y: scroll;

width: 100%;`;

      return () => {
        const scrollY = document.body.style.top;

        document.body.style.cssText = '';

        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [siteMapOpen]);

  // 링크 이동떄 마다 sitemap 닫기

  // const pathNm = usePathname();

  // useEffect(() => {

  // setSiteMapOpen(false);

  // }, [pathNm]);

  // 모바일 ------------------------------------------------------------------------------------------

  // TODO: check : 1차 링크 없음 / 2차는 3차가 있으면 링크 없음 3차가 없으면 링크 있음 / 3차는 링크 있음 (pc 모바일 통일)

  // 2차 메뉴 열기

  const [openDepth2, setOpenDepth2] = useState<boolean>(false);

  // 3차 메뉴 열기

  const [openDepth3, setOpenDepth3] = useState<boolean>(false);

  useEffect(() => {
    // TODO: check : 메뉴 클릭 시 하위 메뉴 항상 닫기

    if (!openDepth2) {
      setOpenDepth3(false);
    }
  }, [openDepth2]);

  return (
    <>
      <button
        type="button"
        className={`${style.hamburger_bar} ${siteMapOpen ? style.open : ''}`}
        onClick={() => {
          setSiteMapOpen(!siteMapOpen);
        }}
      >
        <span></span>

        <span></span>

        <span></span>

        <span></span>
      </button>

      <div
        className={`${style.all_menu} ${siteMapOpen ? style.open : ''}`}
        style={{ ...style }}
      >
        <div className={style.all_menu_left}>
          <h3>WISE LINC3.0 사업단</h3>

          <p>
            (51767)경상남도 창원시 마산합포구 경남대학로 7 (월영동) 경남대학교
            산학협력관 5층 WISE LINC3.0 사업단
          </p>

          <p>
            <span>Tel.</span>055-249-2236, 6362
          </p>

          <p>
            <span>Fax.</span>0505-999-2133
          </p>
        </div>

        <div className={style.all_menu_right}>
          <ul className={style.depth_1}>
            <li>
              <p>WISE LINC 3.0 사업단</p>

              <ul className={style.depth_2}>
                <li>
                  <a href="/">인사말</a>
                </li>

                <li>
                  <a href="/">사업단소개</a>
                </li>

                <li>
                  <a href="/">조직 및 기능</a>
                </li>

                <li>
                  <a href="/">사업 참여 학사조직</a>
                </li>

                <li>
                  <a href="/">찾아오는 길</a>
                </li>
              </ul>
            </li>

            <li>
              <p>인력양성</p>

              <ul className={style.depth_2}>
                <li>
                  <p>일머리교육특성화과정</p>

                  <ul
                    className={`${style.depth_3} ${
                      openDepth3 ? style.open : ''
                    }`}
                  >
                    <li>
                      <a href="/">어드벤처 디자인</a>
                    </li>

                    <li>
                      <a href="/">일머리 PBL</a>
                    </li>

                    <li>
                      <a href="/">캡스톤 디자인</a>
                    </li>

                    <li>
                      <a href="/">경남대형 표준현장실습학기제</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <p>미래산학교육</p>

                  <ul
                    className={`${style.depth_3} ${
                      openDepth3 ? style.open : ''
                    }`}
                  >
                    <li>
                      <a href="/">산학맞춤형트랙</a>
                    </li>

                    <li>
                      <a href="/">신산업 기반 융·복합형 교육</a>
                    </li>

                    <li>
                      <a href="/">신산업 기반 융·복합형 교육</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <p>창업교육</p>

                  <ul
                    className={`${style.depth_3} ${
                      openDepth3 ? style.open : ''
                    }`}
                  >
                    <li>
                      <a href="/">창업역량강화 프로그램</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <p>기업지원</p>

              <ul className={style.depth_2}>
                <li>
                  <a href="/">창업역량강화 프로그램</a>
                </li>
              </ul>
            </li>

            <li>
              <p>지산학연협력 DB</p>

              <ul className={style.depth_2}>
                <li>
                  <a href="/">창업역량강화 프로그램</a>
                </li>
              </ul>
            </li>

            <li>
              <p>커뮤니티</p>

              <ul className={style.depth_2}>
                <li>
                  <a href="/">공지사항</a>
                </li>

                <li>
                  <a href="/">온라인 신청</a>
                </li>

                <li>
                  <a href="/">성과홍보</a>
                </li>

                <li>
                  <p>사업단 뉴스</p>

                  <ul
                    className={`${style.depth_3} ${
                      openDepth3 ? style.open : ''
                    }`}
                  >
                    <li>
                      <a href="/">어드벤처 디자인</a>
                    </li>

                    <li>
                      <a href="/">일머리 PBL</a>
                    </li>

                    <li>
                      <a href="/">캡스톤 디자인</a>
                    </li>

                    <li>
                      <a href="/">경남대형 표준현장실습학기제</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/">메타버스</a>
                </li>

                <li>
                  <a href="/">사업단 주요일정</a>
                </li>

                <li>
                  <a href="/">만족도 조사</a>
                </li>

                <li>
                  <a href="/">자료실</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* 모바일 사이트 맵 ------------------------------------------------ */}

        <div className={style.all_menu_mobile}>
          <div className={style.top_mobile}>
            <a href="/" target="_blank">
              경남대학교
              <FiExternalLink
                role={'img'}
                aria-label={'링크 아이콘'}
                size={14}
              />
            </a>

            {session !== null ? (
              <h2>
                안녕하세요, <span>{session}</span>님
              </h2>
            ) : (
              <></>
            )}

            <div className={style.simple_menu}>
              <a href="/" target="_blank">
                <FiHome role={'img'} aria-label={'홈 아이콘'} />
                홈으로
              </a>

              {session !== null ? (
                <>
                  <a href="/" target="_blank">
                    <FiPower role={'img'} aria-label={'로그아웃 아이콘'} />
                    로그아웃
                  </a>

                  <a href="/" target="_blank">
                    <FiUser role={'img'} aria-label={'마이페이지 아이콘'} />
                    마이페이지
                  </a>
                </>
              ) : (
                <>
                  <a href="/" target="_blank">
                    <FiPower role={'img'} aria-label={'로그인 아이콘'} />
                    로그인
                  </a>

                  <a href="/" target="_blank">
                    <FiEdit role={'img'} aria-label={'회원가입 아이콘'} />
                    회원가입
                  </a>
                </>
              )}
            </div>

            <div className={style.search_box}>
              <Input id={''} labelNm={''} type={''} value={''} ref={null} />
            </div>
          </div>

          <ul className={style.depth_1}>
            <li>
              <button
                type="button"
                onClick={() => {
                  setOpenDepth2(!openDepth2);
                }}
              >
                WISE LINC 3.0 사업단
                {openDepth2 ? (
                  <FiChevronUp role={'img'} aria-label={'위 화살표 아이콘'} />
                ) : (
                  <FiChevronDown
                    role={'img'}
                    aria-label={'아래 화살표 아이콘'}
                  />
                )}
              </button>

              <ul
                className={`${style.depth_2} ${openDepth2 ? style.open : ''}`}
              >
                <li>
                  <a href="/">인사말</a>
                </li>

                <li>
                  <a href="/">사업단소개</a>
                </li>

                <li>
                  <a href="/">조직 및 기능</a>
                </li>

                <li>
                  <a href="/">사업 참여 학사조직</a>
                </li>

                <li>
                  <a href="/">찾아오는 길</a>
                </li>
              </ul>
            </li>

            <li>
              <button
                type="button"
                onClick={() => {
                  setOpenDepth2(!openDepth2);
                }}
              >
                인력양성
                {openDepth2 ? (
                  <FiChevronUp role={'img'} aria-label={'위 화살표 아이콘'} />
                ) : (
                  <FiChevronDown
                    role={'img'}
                    aria-label={'아래 화살표 아이콘'}
                  />
                )}
              </button>

              <ul
                className={`${style.depth_2} ${openDepth2 ? style.open : ''}`}
              >
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenDepth3(!openDepth3);
                    }}
                  >
                    일머리교육특성화과정
                    {openDepth3 ? (
                      <FiChevronUp
                        role={'img'}
                        aria-label={'위 화살표 아이콘'}
                      />
                    ) : (
                      <FiChevronDown
                        role={'img'}
                        aria-label={'아래 화살표 아이콘'}
                      />
                    )}
                  </button>

                  <ul
                    className={`${style.depth_3} ${
                      openDepth3 ? style.open : ''
                    }`}
                  >
                    <li>
                      <a href="/">어드벤처 디자인</a>
                    </li>

                    <li>
                      <a href="/">일머리 PBL</a>
                    </li>

                    <li>
                      <a href="/">캡스톤 디자인</a>
                    </li>

                    <li>
                      <a href="/">경남대형 표준현장실습학기제</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenDepth3(!openDepth3);
                    }}
                  >
                    미래산학교육
                    {openDepth3 ? (
                      <FiChevronUp
                        role={'img'}
                        aria-label={'위 화살표 아이콘'}
                      />
                    ) : (
                      <FiChevronDown
                        role={'img'}
                        aria-label={'아래 화살표 아이콘'}
                      />
                    )}
                  </button>

                  <ul
                    className={`${style.depth_3} ${
                      openDepth3 ? style.open : ''
                    }`}
                  >
                    <li>
                      <a href="/">산학맞춤형트랙</a>
                    </li>

                    <li>
                      <a href="/">신산업 기반 융·복합형 교육</a>
                    </li>

                    <li>
                      <a href="/">신산업 기반 융·복합형 교육</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenDepth3(!openDepth3);
                    }}
                  >
                    창업교육
                    {openDepth3 ? (
                      <FiChevronUp
                        role={'img'}
                        aria-label={'위 화살표 아이콘'}
                      />
                    ) : (
                      <FiChevronDown
                        role={'img'}
                        aria-label={'아래 화살표 아이콘'}
                      />
                    )}
                  </button>

                  <ul
                    className={`${style.depth_3} ${
                      openDepth3 ? style.open : ''
                    }`}
                  >
                    <li>
                      <a href="/">창업역량강화 프로그램</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <button
                type="button"
                onClick={() => {
                  setOpenDepth2(!openDepth2);
                }}
              >
                기업지원
                {openDepth2 ? (
                  <FiChevronUp role={'img'} aria-label={'위 화살표 아이콘'} />
                ) : (
                  <FiChevronDown
                    role={'img'}
                    aria-label={'아래 화살표 아이콘'}
                  />
                )}
              </button>

              <ul
                className={`${style.depth_2} ${openDepth2 ? style.open : ''}`}
              >
                <li>
                  <a href="/">창업역량강화 프로그램</a>
                </li>
              </ul>
            </li>

            <li>
              <button
                type="button"
                onClick={() => {
                  setOpenDepth2(!openDepth2);
                }}
              >
                지산학연협력 DB
                {openDepth2 ? (
                  <FiChevronUp role={'img'} aria-label={'위 화살표 아이콘'} />
                ) : (
                  <FiChevronDown
                    role={'img'}
                    aria-label={'아래 화살표 아이콘'}
                  />
                )}
              </button>

              <ul
                className={`${style.depth_2} ${openDepth2 ? style.open : ''}`}
              >
                <li>
                  <a href="/">창업역량강화 프로그램</a>
                </li>
              </ul>
            </li>

            <li>
              <button
                type="button"
                onClick={() => {
                  setOpenDepth2(!openDepth2);
                }}
              >
                커뮤니티
                {openDepth2 ? (
                  <FiChevronUp role={'img'} aria-label={'위 화살표 아이콘'} />
                ) : (
                  <FiChevronDown
                    role={'img'}
                    aria-label={'아래 화살표 아이콘'}
                  />
                )}
              </button>

              <ul
                className={`${style.depth_2} ${openDepth2 ? style.open : ''}`}
              >
                <li>
                  <a href="/">공지사항</a>
                </li>

                <li>
                  <a href="/">온라인 신청</a>
                </li>

                <li>
                  <a href="/">성과홍보</a>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenDepth3(!openDepth3);
                    }}
                  >
                    사업단 뉴스
                    {openDepth3 ? (
                      <FiChevronUp
                        role={'img'}
                        aria-label={'위 화살표 아이콘'}
                      />
                    ) : (
                      <FiChevronDown
                        role={'img'}
                        aria-label={'아래 화살표 아이콘'}
                      />
                    )}
                  </button>

                  <ul
                    className={`${style.depth_3} ${
                      openDepth3 ? style.open : ''
                    }`}
                  >
                    <li>
                      <a href="/">어드벤처 디자인</a>
                    </li>

                    <li>
                      <a href="/">일머리 PBL</a>
                    </li>

                    <li>
                      <a href="/">캡스톤 디자인</a>
                    </li>

                    <li>
                      <a href="/">경남대형 표준현장실습학기제</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/">메타버스</a>
                </li>

                <li>
                  <a href="/">사업단 주요일정</a>
                </li>

                <li>
                  <a href="/">만족도 조사</a>
                </li>

                <li>
                  <a href="/">자료실</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
