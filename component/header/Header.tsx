'use client';

import { usePathname } from 'next/navigation';
import style from './header.module.scss';
import { useEffect, useState } from 'react';
import {
  FiExternalLink,
  FiMinusCircle,
  FiPlusCircle,
  FiSearch,
} from 'react-icons/fi';
import SiteMap from '../siteMap/SiteMap';
import Search from './search/Search';
// import { useRecoilState } from 'recoil';
// import { headerState } from '@/recoil/headerState';

interface HeaderClientProps {
  /**
   * @param session: 로그인 세션
   */
  session: any;
  /**
   * @param menuData: 메뉴 데이터
   */
  menuData: any[];
}

export default function HeaderClient({ session, menuData }: HeaderClientProps) {
  // 메인 서버 헤더 스타일 분리
  const pathName = usePathname();

  // 메인 스크롤 시
  // const [remove, setRemove] = useRecoilState<boolean | ''>(headerState);

  // 헤더 호버 state
  const [menuHover, setMenuHover] = useState<boolean>(false);

  // 2차 메뉴 클릭 시 3치 메뉴 오픈
  const [depth3Open, setDepth3Open] = useState<boolean>(false);

  // 메뉴 리브 할 시 3차 메뉴 닫기
  useEffect(() => {
    if (!menuHover) {
      setDepth3Open(false);
    }
  }, [menuHover]);

  // 통합검색 버튼 클릭
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  // 통합검색 오픈 시 외부 스크롤 막기
  useEffect(() => {
    if (searchOpen) {
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
  }, [searchOpen]);
  return (
    <header id={style.header} className={`${style.menu_hover}`}>
      <div className={style.t_link}>
        <ul>
          <li>
            <a
              href="https://github.com/elin-sunhye?tab=repositories"
              target="_blank"
              title="포트폴리오 더 보기"
            >
              gitHub
              <FiExternalLink
                role={'img'}
                aria-label={'링크 아이콘'}
                size={16}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.t_menu}>
        <a href={'/'} className={style.t_logo_l}></a>
        <nav
          id={style.gnb}
          onMouseOver={() => {
            setMenuHover(true);
          }}
          onMouseLeave={() => {
            setMenuHover(false);
          }}
        >
          <ul className={style.depth_1}>
            <li>
              <p>WISE LINC 3.0 사업단</p>
              <ul className={style.depth_2}>
                <li>
                  <a href="/fc/greeting">인사말</a>
                </li>
                <li>
                  <a href="/fc/bizgroup">사업단소개</a>
                </li>
                <li>
                  <a href="/fc/orgfunction">조직 및 기능</a>
                </li>
                <li>
                  <a href="/fc/department">사업참여학과</a>
                </li>
                <li>
                  <a href="/fc/location">찾아오는길</a>
                </li>
              </ul>
            </li>
            <li>
              <p>인력양성</p>
              <ul className={style.depth_2}>
                <li>
                  <button
                    type="button"
                    className={depth3Open ? style.open : ''}
                    onClick={() => {
                      setDepth3Open(!depth3Open);
                    }}
                  >
                    일머리교육특성화과정
                    {depth3Open ? (
                      <FiMinusCircle
                        className={style.depth_3_close}
                        role={'img'}
                        aria-label={'3차 메뉴 닫기 마이너스 아이콘'}
                      />
                    ) : (
                      <FiPlusCircle
                        className={style.depth_3_open}
                        role={'img'}
                        aria-label={'3차 메뉴 열기 플러스 아이콘'}
                      />
                    )}
                  </button>
                  <ul className={style.depth_3}>
                    <li>
                      <a href="/mp/competency/adventure">어드벤처 디자인</a>
                    </li>
                    <li>
                      <a href="/mp/competency/wepbl">일머리 PBL</a>
                    </li>
                    <li>
                      <a href="/mp/competency/capstone">캡스톤 디자인</a>
                    </li>
                    <li>
                      <a href="/mp/competency/kslem">
                        경남대형 표준현장실습학기제
                      </a>
                    </li>
                    <li>
                      <a href="/mp/competency/indacademia">산학맞춤형트랙</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className={depth3Open ? style.open : ''}
                    onClick={() => {
                      setDepth3Open(!depth3Open);
                    }}
                  >
                    미래산학교육
                    {depth3Open ? (
                      <FiMinusCircle
                        className={style.depth_3_close}
                        role={'img'}
                        aria-label={'3차 메뉴 닫기 마이너스 아이콘'}
                      />
                    ) : (
                      <FiPlusCircle
                        className={style.depth_3_open}
                        role={'img'}
                        aria-label={'3차 메뉴 열기 플러스 아이콘'}
                      />
                    )}
                  </button>
                  <ul className={style.depth_3}>
                    <li>
                      <a href="/mp/education/newindustry">
                        신산업 기반 융·복합형 교육
                      </a>
                    </li>
                    <li>
                      <a href="/mp/education/nftfedu">비대면/글로벌 교육</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className={depth3Open ? style.open : ''}
                    onClick={() => {
                      setDepth3Open(!depth3Open);
                    }}
                  >
                    창업교육
                    {depth3Open ? (
                      <FiMinusCircle
                        className={style.depth_3_close}
                        role={'img'}
                        aria-label={'3차 메뉴 닫기 마이너스 아이콘'}
                      />
                    ) : (
                      <FiPlusCircle
                        className={style.depth_3_open}
                        role={'img'}
                        aria-label={'3차 메뉴 열기 플러스 아이콘'}
                      />
                    )}
                  </button>

                  <ul className={style.depth_3}>
                    <li>
                      <a href="/mp/startup/program">창업역량강화 프로그램</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <button
                    type="button"
                    className={depth3Open ? style.open : ''}
                    onClick={() => {
                      setDepth3Open(!depth3Open);
                    }}
                  >
                    공유협업 프로젝트
                    {depth3Open ? (
                      <FiMinusCircle
                        className={style.depth_3_close}
                        role={'img'}
                        aria-label={'3차 메뉴 닫기 마이너스 아이콘'}
                      />
                    ) : (
                      <FiPlusCircle
                        className={style.depth_3_open}
                        role={'img'}
                        aria-label={'3차 메뉴 열기 플러스 아이콘'}
                      />
                    )}
                  </button>

                  <ul className={style.depth_3}>
                    <li>
                      <a href="/mp/sharecollabo/program">공유협업 프로그램</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <p>기업지원</p>

              <ul className={style.depth_2}>
                <li>
                  <a href="/cs/fcmembership">가족회사 유료멤버십</a>
                </li>

                <li>
                  <a href="/cs/joinindaca">산학공동기술개발과제</a>
                </li>

                <li>
                  <a href="/cs/prototype">시제품제작 지원사업</a>
                </li>

                <li>
                  <a href="/cs/tectransfer">기술이전 및 사업화</a>
                </li>

                <li>
                  <a href="/cs/cuscorsupp">맞춤형 기업지원</a>
                </li>

                <li>
                  <a href="/cs/indcoucc">3대 특화분야 ICC</a>
                </li>

                <li>
                  <a href="/cs/indemployee">산업체 재직자교육</a>
                </li>
              </ul>
            </li>

            <li>
              <p>지산학연협력 DB</p>

              <ul className={style.depth_2}>
                <li>
                  <button
                    type="button"
                    className={depth3Open ? style.open : ''}
                    onClick={() => {
                      setDepth3Open(!depth3Open);
                    }}
                  >
                    인프라
                    {depth3Open ? (
                      <FiMinusCircle
                        className={style.depth_3_close}
                        role={'img'}
                        aria-label={'3차 메뉴 닫기 마이너스 아이콘'}
                      />
                    ) : (
                      <FiPlusCircle
                        className={style.depth_3_open}
                        role={'img'}
                        aria-label={'3차 메뉴 열기 플러스 아이콘'}
                      />
                    )}
                  </button>

                  <ul className={style.depth_3}>
                    <li>
                      <a href="/db/infra/researcher">연구자정보</a>
                    </li>

                    <li>
                      <a href="/db/infra/equipment">공용장비활용 정보</a>
                    </li>

                    <li>
                      <a href="/db/infra/bgspace">사업단 공간 정보</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <button
                    type="button"
                    className={depth3Open ? style.open : ''}
                    onClick={() => {
                      setDepth3Open(!depth3Open);
                    }}
                  >
                    네트워크
                    {depth3Open ? (
                      <FiMinusCircle
                        className={style.depth_3_close}
                        role={'img'}
                        aria-label={'3차 메뉴 닫기 마이너스 아이콘'}
                      />
                    ) : (
                      <FiPlusCircle
                        className={style.depth_3_open}
                        role={'img'}
                        aria-label={'3차 메뉴 열기 플러스 아이콘'}
                      />
                    )}
                  </button>

                  <ul className={style.depth_3}>
                    <li>
                      <a href="/db/network/fcbiz">가족회사 현황 정보</a>
                    </li>

                    <li>
                      <a href="/db/network/mou">MOU 현황 정보</a>
                    </li>

                    <li>
                      <a href="/db/network/consultative">협의체 현황 정보</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/db/indacamileage">산학협력 마일리지</a>
                </li>

                <li>
                  <a href="/db/patent">지식재산권(특허) 정보</a>
                </li>

                <li>
                  <a href="/db/rdtask">정부 R&D과제 정보</a>
                </li>
              </ul>
            </li>

            <li>
              <p>커뮤니티</p>

              <ul className={style.depth_2}>
                <li>
                  <a href="/cm/question">산학협력정보담당관 Q&A</a>
                </li>

                <li>
                  <button
                    type="button"
                    className={depth3Open ? style.open : ''}
                    onClick={() => {
                      setDepth3Open(!depth3Open);
                    }}
                  >
                    공지사항
                    {depth3Open ? (
                      <FiMinusCircle
                        className={style.depth_3_close}
                        role={'img'}
                        aria-label={'3차 메뉴 닫기 마이너스 아이콘'}
                      />
                    ) : (
                      <FiPlusCircle
                        className={style.depth_3_open}
                        role={'img'}
                        aria-label={'3차 메뉴 열기 플러스 아이콘'}
                      />
                    )}
                  </button>

                  <ul className={style.depth_3}>
                    <li>
                      <a href="/cm/notice/notiList">공지사항</a>
                    </li>

                    <li>
                      <a href="/cm/notice/schedule">사업단 주요일정</a>
                    </li>

                    <li>
                      <a href="/cm/notice/doc">자료실</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <button
                    type="button"
                    className={depth3Open ? style.open : ''}
                    onClick={() => {
                      setDepth3Open(!depth3Open);
                    }}
                  >
                    온라인 신청
                    {depth3Open ? (
                      <FiMinusCircle
                        className={style.depth_3_close}
                        role={'img'}
                        aria-label={'3차 메뉴 닫기 마이너스 아이콘'}
                      />
                    ) : (
                      <FiPlusCircle
                        className={style.depth_3_open}
                        role={'img'}
                        aria-label={'3차 메뉴 열기 플러스 아이콘'}
                      />
                    )}
                  </button>

                  <ul className={style.depth_3}>
                    <li>
                      <a href="/cm/application/space">공간 신청(창업공간)</a>
                    </li>

                    <li>
                      <a href="/cm/application/program">비교과 프로그램 신청</a>
                    </li>

                    <li>
                      <a href="/cm/application/indemployee">
                        산업체 재직자교육 신청
                      </a>
                    </li>

                    <li>
                      <a href="/cm/application/fcmembership">
                        가족회사 유료멤버십 신청
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <button
                    type="button"
                    className={depth3Open ? style.open : ''}
                    onClick={() => {
                      setDepth3Open(!depth3Open);
                    }}
                  >
                    사업단 성과
                    {depth3Open ? (
                      <FiMinusCircle
                        className={style.depth_3_close}
                        role={'img'}
                        aria-label={'3차 메뉴 닫기 마이너스 아이콘'}
                      />
                    ) : (
                      <FiPlusCircle
                        className={style.depth_3_open}
                        role={'img'}
                        aria-label={'3차 메뉴 열기 플러스 아이콘'}
                      />
                    )}
                  </button>

                  <ul className={style.depth_3}>
                    <li>
                      <a href="/cm/bgresult/article">보도자료</a>
                    </li>

                    <li>
                      <a href="/cm/bgresult/lincnews">
                        이주의 전국대학 LINC 3.0 소식
                      </a>
                    </li>

                    <li>
                      <a href="/cm/bgresult/fcarticle">가족회사 기사</a>
                    </li>

                    <li>
                      <a href="/cm/bgresult/exresearcher">우수 연구자</a>
                    </li>

                    <li>
                      <a href="/cm/bgresult/excase">우수 사례</a>
                    </li>

                    <li>
                      <a href="/cm/bgresult/movie">동영상</a>
                    </li>

                    <li>
                      <a href="/cm/bgresult/businessgroup">사업단</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <button
                    type="button"
                    className={depth3Open ? style.open : ''}
                    onClick={() => {
                      setDepth3Open(!depth3Open);
                    }}
                  >
                    메타버스
                    {depth3Open ? (
                      <FiMinusCircle
                        className={style.depth_3_close}
                        role={'img'}
                        aria-label={'3차 메뉴 닫기 마이너스 아이콘'}
                      />
                    ) : (
                      <FiPlusCircle
                        className={style.depth_3_open}
                        role={'img'}
                        aria-label={'3차 메뉴 열기 플러스 아이콘'}
                      />
                    )}
                  </button>

                  <ul className={style.depth_3}>
                    <li>
                      <a href="/" target="_blank">
                        전시관
                      </a>
                    </li>

                    <li>
                      <a href="/" target="_blank">
                        게더타운
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/">만족도 조사</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* */}

        <div className={style.t_menu_r}>
          <button
            type="button"
            onClick={() => {
              setSearchOpen(!searchOpen);
            }}
          >
            <FiSearch role={'img'} aria-label={'검색 아이콘'} />
          </button>

          <SiteMap menuData={menuData} session={session} />
        </div>
        <Search stste={searchOpen} setState={setSearchOpen} />
      </div>
    </header>
  );
}
