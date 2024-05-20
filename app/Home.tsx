'use client';

import style from './page.module.scss';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';
import { menuType } from '@/type/menu/menuType';
import { useRouter } from 'next/navigation';
import Btn from '@/component/common/btn/Btn';
import Image from 'next/image';

// dummyData ---------------------------------
import menuData from '@/dummyData/menu.json';
import TopBox from '@/component/topBox/TopBox';

export default function Home() {
  // ---------------------------------
  const router = useRouter();

  // 브라우저 크기 ---------------------------------
  const [browserHeight, setBrowserHeight] = useState<number>(0);

  // scroll ---------------------------------
  const scrollTxtRef = useRef<HTMLSpanElement>(null);
  const scroll2UpRef = useRef<HTMLDivElement>(null);
  const scroll2DownRef = useRef<HTMLDivElement>(null);

  // 화면 로드시
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 브라우저 크기
      setBrowserHeight(window.innerHeight);
      window.addEventListener('resize', function () {
        setBrowserHeight(window.innerHeight);
      });

      // 스크롤 초기화
      if (window.scrollY > 0 && scrollTxtRef.current !== null) {
        scrollTxtRef.current.style.setProperty(
          'transform',
          // `translateX(-${String(window.scrollY - window.innerHeight + 1)}px)`
          `translateX(-${String(window.scrollY - window.innerHeight * 1.5)}px)`
        );
      }

      // scroll
      let lastScroll = 0;
      window.addEventListener('scroll', function () {
        let currentScroll = document.documentElement.scrollTop;

        // scrollTxt
        if (
          scrollTxtRef.current !== null &&
          window.scrollY >= 10
          // window.innerHeight <= window.scrollY
        ) {
          if (currentScroll > lastScroll) {
            scrollTxtRef.current.style.setProperty(
              'transform',
              `translateX(-${String(
                window.scrollY - window.innerHeight * 1.5
                // window.scrollY + 1
                // window.scrollY - window.innerHeight + 1
              )}px)`
            );
          } else {
            scrollTxtRef.current.style.setProperty(
              'transform',
              `translateX(-${String(
                window.scrollY - window.innerHeight * 1.5
                // window.scrollY - 1
                // window.scrollY - window.innerHeight - 1
              )}px)`
            );
          }
          lastScroll = currentScroll;
        }

        // scroll wiko
        if (scroll2UpRef.current !== null && scroll2DownRef.current !== null) {
          if (window.scrollY >= window.innerHeight / 2) {
            let num1 = String(
              window.scrollY - window.innerHeight + 0.1
            ).replaceAll('.', '');

            let num2 = String(
              window.scrollY - window.innerHeight - 0.1
            ).replaceAll('.', '');

            let plus =
              num1.length == 1
                ? `0.00${num1}`
                : num1.length == 2
                ? `0.0${num1}`
                : num1.length == 3
                ? `0.${num1}`
                : num1.length == 4
                ? num1.slice(0, 1) + '.' + num1.slice(1)
                : num1.slice(0, 2) + '.' + num1.slice(2);

            let minus =
              num2.length == 1
                ? `0.00${num2}`
                : num2.length == 2
                ? `0.0${num2}`
                : num2.length == 3
                ? `0.${num2}`
                : num2.length == 4
                ? num2.slice(0, 1) + '.' + num2.slice(1)
                : num2.slice(0, 2) + '.' + num2.slice(2);

            if (currentScroll > lastScroll) {
              scroll2UpRef.current.style.setProperty(
                'transform',
                `translateY(-${plus}%)`
              );
              scroll2DownRef.current.style.setProperty(
                'transform',
                `translateY(${minus}%)`
              );
            } else {
              scroll2UpRef.current.style.setProperty(
                'transform',
                `translateY(-${minus}%)`
              );

              scroll2DownRef.current.style.setProperty(
                'transform',
                `translateY(${plus}%)`
              );
            }
            lastScroll = currentScroll;
          }
        }
      });
    }
  }, []);

  // rolling ---------------------------------
  const [rollingITems, setRollingItems] = useState<menuType[]>([]);
  const [rollingDesignITems, setRollingDesignItems] = useState<menuType[]>([]);

  useEffect(() => {
    setRollingItems(
      menuData.filter(
        (mn) =>
          (mn.url.includes('/career/orange/') ||
            mn.url.includes('/career/deps/')) &&
          mn.depth === 3
      )
    );
    setRollingDesignItems(
      menuData.filter(
        (mn) => mn.url.includes('/career/lapcos/') && mn.depth === 3
      )
    );
  }, [menuData]);

  return (
    <main>
      {/* main_visual_section --------------------------------- */}
      <section className={style.main_visual_section}>
        <div className={style.main_visual_box}>
          <span></span>
          <span></span>
          <span></span>
          {/* <span></span> */}

          <div className={`flex_center ${style.main_visual}`}>
            <div className={`top_box flex_center ${style.top_box}`}>
              <span className={style.img_profile}>
                <Image
                  src={'/main/img_profile.svg'}
                  width={0}
                  height={0}
                  alt="프로필 이미지"
                />
              </span>
              <div className={style.right}>
                <h3>김선혜</h3>
                <p>Frontend Developer</p>
                <span>🎂 1996 . 04 . 03</span>
                <a href={'tel:01021620043'} title="이메일 바로가기">
                  🤙 010-2162-0043
                </a>
                <a href={'mailto:tjsgp1401@naver.com'} title="이메일 바로가기">
                  📨 tjsgp1401@naver.com
                </a>
                <a
                  href={'https://github.com/elin-sunhye'}
                  title="깃허브 바로가기"
                >
                  📎 GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <Btn
          title={'컨텐츠'}
          id={'goContent'}
          className={style.btn_go_content}
          color="none"
          onClick={() => {
            window.scrollTo({ top: browserHeight, behavior: 'smooth' });
          }}
        >
          <HiOutlineChevronDoubleDown
            role="img"
            aria-label="더블 아래 화살표"
          />
        </Btn>
      </section>

      {/* introduce_section --------------------------------- */}
      <section className={`section_padding ${style.introduce_section}`}>
        <TopBox
          title={'SKILLS ABILITY'}
          explain={'Framework | Language | Library'}
        />

        <div className={`wrap flex_start ${style.skill_box}`}>
          <p className={`flex_center`}>
            <Image
              src="/main/skill/ico_react.svg"
              alt="react"
              width={0}
              height={0}
            />
            <span>React.js</span>
          </p>
          <p className={`flex_center`}>
            <Image
              src="/main/skill/ico_next.svg"
              alt="react"
              width={0}
              height={0}
            />
            <span>Next.js</span>
          </p>
          <p className={`flex_center`}>
            <Image
              src="/main/skill/ico_github.svg"
              alt="react"
              width={0}
              height={0}
            />
            <span>Github</span>
          </p>
          <p className={`flex_center`}>
            <Image
              src="/main/skill/ico_gitlab.svg"
              alt="react"
              width={0}
              height={0}
            />
            <span>Gitlab</span>
          </p>
          <p className={`flex_center`}>
            <Image
              src="/main/skill/ico_js.svg"
              alt="react"
              width={0}
              height={0}
            />
            <span>JavaScript</span>
          </p>
          <p className={`flex_center`}>
            <Image
              src="/main/skill/ico_ts.svg"
              alt="react"
              width={0}
              height={0}
            />
            <span>TypeScript</span>
          </p>
          <p className={`flex_center`}>
            <Image
              src="/main/skill/ico_html.svg"
              alt="react"
              width={0}
              height={0}
            />
            <span>HTML5</span>
          </p>
          <p className={`flex_center`}>
            <Image
              src="/main/skill/ico_scss.svg"
              alt="react"
              width={0}
              height={0}
            />
            <span>SCSS</span>
          </p>
          <p className={`flex_center`}>
            <Image
              src="/main/skill/ico_css.svg"
              alt="react"
              width={0}
              height={0}
            />
            <span>CSS</span>
          </p>
          <p className={`flex_center`}>
            <Image
              src="/main/skill/ico_react_query.svg"
              alt="react"
              width={0}
              height={0}
            />
            <span>react-query</span>
          </p>
          <p className={`flex_center`}>
            <Image
              src="/main/skill/ico_react_hook_form.svg"
              alt="react"
              width={0}
              height={0}
            />
            <span>react-hook-form</span>
          </p>
          <p className={`flex_center`}>
            <Image
              src="/main/skill/ico_lodash.svg"
              alt="lodash"
              width={0}
              height={0}
            />
            <span>Lodash.js</span>
          </p>
          <p className={`flex_center`}>
            <Image
              src="/main/skill/ico_recoil.svg"
              alt="react"
              width={0}
              height={0}
            />
            <span>recoil</span>
          </p>
        </div>
      </section>

      {/* project_wiko_section --------------------------------- */}
      <section className={`${style.project_wiko_section}`}>
        <div className={`wrap flex_between ${style.wrap}`}>
          <div className={`flex_end ${style.scroll_box}`}>
            <div
              ref={scroll2DownRef}
              className={`flex_center ${style.scroll_down}`}
            >
              <span>asd</span>
              <span>123</span>
              <span className={style.bottom}>
                <Image
                  src={'/main/project/wiko/img_wiko_main.svg'}
                  alt="위코 메인 화면"
                  width={0}
                  height={0}
                />
              </span>
              <div className="flex_start">
                <span></span>
                <span></span>
              </div>
              <span>
                <Image
                  src={'/main/project/wiko/img_wiko_contact.svg'}
                  alt="위코 문의사항 화면"
                  width={0}
                  height={0}
                />
              </span>
            </div>
            <div
              ref={scroll2UpRef}
              className={`flex_center ${style.scroll_up}`}
            >
              <span>
                <Image
                  src={'/main/project/wiko/img_wiko_story.svg'}
                  alt="위코 스토리 화면"
                  width={0}
                  height={0}
                />
              </span>
              <span>
                <Image
                  src={'/main/project/wiko/img_wiko_main.svg'}
                  alt="위코 메인 화면"
                  width={0}
                  height={0}
                />
              </span>
              <span className={style.bottom}>asd</span>
              <span>dsfsad</span>
              <span>123</span>
            </div>
          </div>

          <div className={`top_box ${style.top_box}`}>
            <TopBox
              direction={'right'}
              title={'WIKO'}
              explain={
                '정밀 주조를 다루고 있는 <br />"위코" 회사의 <br />브랜드 사이트 입니다.'
              }
              desc={'2024.01 ~ 2024.06'}
            />

            <div className={`flex_end ${style.btn_box}`}>
              <Btn
                title={'자세히 보기'}
                id={'viewDetail'}
                className={style.btn_go_detail}
                color="black"
                border="br_round"
                onClick={() => {
                  router.push(
                    menuData.find((menu) => menu.menu === 'WIKO')?.url || ''
                  );
                }}
              >
                view detail
              </Btn>
              <Btn
                title={'사이트 바로가기'}
                id={'view냣ㄷ'}
                className={style.btn_go_detail}
                color="black"
                border="br_round"
                href={menuData.find((menu) => menu.menu === 'WIKO')?.site || ''}
              >
                view site
              </Btn>
            </div>
          </div>
        </div>
      </section>

      {/* scroll_txt_section --------------------------------- */}
      <section className={style.scroll_txt_section}>
        <span className={style.scroll_txt} ref={scrollTxtRef}>
          THE PARADISE IS WHERE I AM THE PARADISE IS WHERE I AM THE PARADISE IS
          WHERE I AM THE PARADISE IS WHERE I AM
        </span>
      </section>

      {/* career_section --------------------------------- */}
      <section className={`section_padding ${style.career_section}`}>
        <TopBox
          title={'TOGETHER'}
          explain={'총 경력 : 4년 5개월 | 2019년 2월 ~ '}
          desc={'(2024년 5월 기준)'}
          // desc={'(2024년 5월 기준 | 공백 : 2019년 11월 ~ 2020년 11월)'}
        />

        <div className={`wrap flex_start ${style.career_box}`}>
          {menuData
            .filter((menu) => menu.url.includes('career') && menu.depth === 2)
            .map((item: menuType, itemInd: number) => {
              return (
                <div
                  key={`rolling_item_${item.seq}`}
                  // href={item.url}
                  className={`flex_between ${style.career}`}
                >
                  <p className="flex_center">
                    <Image
                      src={`/main/together/img_${item.menu.toLowerCase()}_logo.svg`}
                      alt={`${item.menu.toLowerCase()} 로고`}
                      width={0}
                      height={0}
                    />
                  </p>

                  <div className={`${style.career_info}`}>
                    <p className={style.comp_name}>{item.menu}</p>
                    <span className={style.period}>
                      {item.menu === 'DEPS' ? (
                        <>2021.12 ~ 재직중 | 개발팀 대리</>
                      ) : item.menu === 'ORANGE' ? (
                        <>2020.11 ~ 2021.11 | 전략기획팀 매니저</>
                      ) : (
                        <>2019.02 ~ 2019.11 | 디자인팀 인턴</>
                      )}
                    </span>
                    <p className={style.comp_desc}>
                      {item.menu === 'DEPS' ? (
                        <>
                          <span>
                            뎁스는 경남 지자체에서 운영하는 응용 소프트웨어 개발
                            및 공급하고 있는 IT 기업입니다.
                          </span>
                          <span>
                            프론트엔드 포지션으로 뎁스의 전체 서비스의 신규 웹
                            개발 및 유지보수를 담당하고 있습니다.
                          </span>
                        </>
                      ) : item.menu === 'ORANGE' ? (
                        <>
                          <span>
                            오렌지 엔터테인먼트는 해외 아티스트 콜라보 앨범을
                            제작해주는 엔터테인먼트입니다.
                          </span>
                          <span>
                            퍼블리셔 포지션으로 오렌지 엔터의 전체 서비스의 신규
                            웹 퍼블리싱 및 기획, 디자인을 담당했습니다.
                          </span>
                        </>
                      ) : (
                        <>
                          <span>
                            렙코스는 화장품 제조 판매하는 화장품 브랜드 입니다.
                          </span>
                          <span>
                            디자이너 포지션으로 랩코스의 도매 사이트 관리 및
                            행사 관련 담당했습니다.
                          </span>
                        </>
                      )}
                    </p>

                    {item.menu === 'DEPS' ? (
                      menuData
                        .filter(
                          (menu) =>
                            menu.url.includes('deps') && menu.depth === 3
                        )
                        .map((project: menuType, projectIndex: number) => {
                          return (
                            <div
                              key={`${project.menu}_${projectIndex}`}
                              className={style.project_box}
                            >
                              <p className={style.project_nm}>
                                {project.menu}
                                {project.menu === 'SANDAN' ||
                                project.menu === 'STX' ? (
                                  // <a
                                  //   href={project.url}
                                  //   title="상세페이지 바로가기"
                                  // >
                                  //   view detail
                                  // </a>
                                  <></>
                                ) : (
                                  <a
                                    href={project.site}
                                    target="_blank"
                                    title="사이트 바로가기"
                                  >
                                    site
                                  </a>
                                )}
                              </p>
                              <span className={style.project_period}>
                                {project.menu === 'WISDOM' ? (
                                  <>2024.01 ~ 2024.04</>
                                ) : project.menu === 'GNCAR' ? (
                                  <>2023.08 ~ 2024.01</>
                                ) : project.menu === 'GNWP' ? (
                                  <>2023.01 ~ 2023.06</>
                                ) : project.menu === 'GNHOME' ? (
                                  <>2022.10 ~ 2023.03</>
                                ) : project.menu === 'SANDAN' ? (
                                  <>2022.08 ~ 2022.10</>
                                ) : project.menu === 'HOMEPAGE' ? (
                                  <>2022.04 ~ 2022.06</>
                                ) : project.menu === 'STX' ? (
                                  <>2022.02 ~ 2022.08</>
                                ) : (
                                  <></>
                                )}
                              </span>
                              <div
                                className={`flex_start ${style.project_desc}`}
                              >
                                {project.menu === 'WISDOM' ? (
                                  <>
                                    <span>
                                      경남대학과 지역산업의 공생 발전을 위한
                                      산학연 플랫폼(LINC 사업)
                                    </span>
                                    <span>
                                      SKILLS | React.js, Next.js, JavaScript,
                                      TypeScript, SCSS, CSS
                                    </span>
                                  </>
                                ) : project.menu === 'GNCAR' ? (
                                  <>
                                    <span>
                                      경남 TP 버추얼 개발 기술 지원 플랫폼
                                    </span>
                                    <span>
                                      SKILLS | React.js, Next.js, JavaScript,
                                      TypeScript, SCSS, CSS
                                    </span>
                                  </>
                                ) : project.menu === 'GNWP' ? (
                                  <>
                                    <span>경상남도 통합 일자리 플랫폼</span>
                                    <span>
                                      SKILLS | React.js, Next.js, JavaScript,
                                      TypeScript, SCSS, CSS
                                    </span>
                                  </>
                                ) : project.menu === 'GNHOME' ? (
                                  <>
                                    <span>
                                      {' '}
                                      경남 공동 주택 관리 통합 플랫폼
                                    </span>
                                    <span>
                                      SKILLS | React.js, Next.js, JavaScript,
                                      TypeScript, SCSS, CSS
                                    </span>
                                  </>
                                ) : project.menu === 'SANDAN' ? (
                                  <>
                                    <span>
                                      경남 공단 내 키오스크 설치하여 주변 환경에
                                      대해 알려주는 플랫폼
                                    </span>
                                    <span>
                                      SKILLS | HTML5, CSS, JavaScript, jQuery
                                    </span>
                                  </>
                                ) : project.menu === 'HOMEPAGE' ? (
                                  <>자사 브랜드 리뉴얼 사이트</>
                                ) : project.menu === 'STX' ? (
                                  <>
                                    <span>STX엔진 내 SSC 시스템</span>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                              <div
                                className={`flex_start ${style.project_func}`}
                              >
                                {project.menu === 'WISDOM' ? (
                                  <>
                                    <span>
                                      카카오 맵 API를 활용한 마커 위치 구현
                                    </span>
                                    <span>시간별 공간 대여 기능 구현</span>
                                    <span>공통 게시판 모듈 구현</span>
                                    <span>권한별 메뉴 관리 시스템 개발</span>
                                    <span>
                                      html2canvas 라이브러리 및 react-to-print
                                      라이브러리를 활용한 프린트 기능 구현
                                    </span>
                                    <span>
                                      xlsx 라이브러리를 활용한 엑셀 다운로드
                                      기능 구현
                                    </span>
                                    <span>
                                      html2canvas 라이브러리를 활용한 PDF
                                      다운로드 기능 구현
                                    </span>
                                    <span>
                                      react-pdf 라이브러리를 활용한 PDF 내용
                                      보기 구현
                                    </span>
                                    <span>
                                      게시판 CRUD 기본적인 데이터 처리 기능 구현
                                    </span>
                                    <span>
                                      카카오, 라인, 페이스북 공유 기능 구현
                                    </span>
                                    <span>chart.js를 활용한 데이터 시각화</span>
                                    <span>localStorage를 이용한 팝업 구현</span>
                                    <span>
                                      Radix ux/ui 라이브러리를 활용한 컴포넌트
                                      개발
                                    </span>
                                    <span>
                                      미디어쿼리를 이용한 반응형/적응형 구현
                                    </span>
                                  </>
                                ) : project.menu === 'GNCAR' ? (
                                  <>
                                    <span>
                                      카카오 맵 API를 활용한 부품 장비 기업 검색
                                      기능 구현
                                    </span>
                                    <span>
                                      협약, 수행 등 단계별 지원 사업 관리 구현
                                    </span>
                                    <span>ㅇㅇ을 활용한 프린트 기능 구현</span>
                                    <span>
                                      xlsx 라이브러리를 활용한 엑셀 다운로드
                                      기능 구현
                                    </span>
                                    <span>
                                      html2canvas 라이브러리를 활용한 PDF
                                      다운로드 기능 구현
                                    </span>
                                    <span>
                                      html2canvas 라이브러리 및 react-to-print
                                      라이브러리를 활용한 프린트 기능 구현
                                    </span>
                                    <span>권한별 메뉴 관리 시스템 개발</span>
                                    <span>
                                      게시판 CRUD 기본적인 데이터 처리 기능 구현
                                    </span>
                                    <span>localStorage를 이용한 팝업 구현</span>
                                    <span>
                                      Radix ux/ui 라이브러리를 활용한 컴포넌트
                                      개발
                                    </span>
                                    <span>
                                      미디어쿼리를 이용한 반응형/적응형 구현
                                    </span>
                                  </>
                                ) : project.menu === 'GNWP' ? (
                                  <>
                                    <span>
                                      카카오 맵 API를 활용한 내 주변 채용 정보
                                      및 검색 구현
                                    </span>
                                    <span>
                                      xlsx 라이브러리를 활용한 엑셀 다운로드
                                      기능 구현
                                    </span>
                                    <span>
                                      html2canvas 라이브러리를 활용한 PDF
                                      다운로드 기능 구현
                                    </span>
                                    <span>
                                      html2canvas 라이브러리 및 react-to-print
                                      라이브러리를 활용한 프린트 기능 구현
                                    </span>
                                    <span>채용 정보 검색 필터링 구현</span>
                                    <span>챗봇 기능 구현</span>
                                    <span>
                                      미디어쿼리를 이용한 반응형/적응형 구현
                                    </span>
                                  </>
                                ) : project.menu === 'GNHOME' ? (
                                  <>
                                    <span>CMS 공문 서식 등록 기능 개발</span>
                                    <span>
                                      CMS 공문 등록 및 결재 시스템 개발
                                    </span>
                                    <span>
                                      xlsx 라이브러리를 활용한 엑셀 다운로드
                                      기능 구현
                                    </span>
                                    <span>
                                      html-docx-js-typescript 라이브러리를
                                      이용한 활용한 PDF 다운로드 기능 구현
                                    </span>
                                    <span>
                                      html2canvas 라이브러리 및 react-to-print
                                      라이브러리를 활용한 프린트 기능 구현
                                    </span>
                                    <span>
                                      게시판 CRUD 기본적인 데이터 처리 기능 구현
                                    </span>
                                    <span>지역별 필터링 기능 구현</span>
                                    <span>
                                      미디어쿼리를 이용한 반응형/적응형 구현
                                    </span>
                                  </>
                                ) : project.menu === 'SANDAN' ? (
                                  <>
                                    <span>
                                      카카오 API를 이용한 공단 내 키오스크 위치
                                      구현
                                    </span>
                                    <span>환경 단위별 필터링 기능 구현</span>
                                    <span>환경 수치에 대한 데이터 시각화</span>
                                  </>
                                ) : project.menu === 'HOMEPAGE' ? (
                                  <>
                                    <span>
                                      JavaScript로 영상 및 스크립트 싱크 구현
                                    </span>
                                    <span>
                                      fullpage.js 라이브러리를 활용한 풀페이지
                                      구현
                                    </span>
                                    <span>
                                      keyframe을 이용한 애니메이션 구현
                                    </span>
                                    <span>
                                      AOS.js 라이브러리를 활용한 스크롤
                                      애니매이션 구현
                                    </span>
                                    <span>
                                      미디어쿼리를 이용한 반응형/적응형 구현
                                    </span>
                                  </>
                                ) : project.menu === 'STX' ? (
                                  <>
                                    <span>grid 테이블 구현</span>
                                    <span>
                                      미디어쿼리를 이용한 반응형/적응형 구현
                                    </span>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                          );
                        })
                    ) : item.menu === 'ORANGE' ? (
                      menuData
                        .filter(
                          (menu) =>
                            menu.url.includes('orange') && menu.depth === 3
                        )
                        .map((project: menuType, projectIndex: number) => {
                          return (
                            <div
                              key={`${project.menu}_${projectIndex}`}
                              className={style.project_box}
                            >
                              <p className={style.project_nm}>{project.menu}</p>
                              <span className={style.project_period}>
                                {project.menu === 'FANPICK' ? (
                                  <>2021.05 ~ 2021.11</>
                                ) : project.menu === 'HOMEPAGE' ? (
                                  <>2020.11 ~ 2021.03</>
                                ) : project.menu === 'NFT SHOWCASE' ? (
                                  <>2021.04 ~ 2021.06</>
                                ) : project.menu === 'BASIC COLLABO EVENT' ? (
                                  <>2021.06 ~ 2021.10</>
                                ) : (
                                  <></>
                                )}
                              </span>
                              <div className={style.project_desc}>
                                {project.menu === 'FANPICK' ? (
                                  <>
                                    투표를 통해 선정된 아티스트들의 콜라보
                                    앨범을 만들어 주는 어플리케이션.
                                  </>
                                ) : project.menu === 'HOMEPAGE' ? (
                                  <>미라클 토큰 브랜드 리뉴얼 사이트.</>
                                ) : project.menu === 'NFT SHOWCASE' ? (
                                  <>
                                    랜디 저커버그가 참석한 쇼케이스에서 배너 등
                                    디자인.
                                  </>
                                ) : project.menu === 'BASIC COLLABO EVENT' ? (
                                  <>BASIC 회사와의 NFT 콜라보 이벤트 페이지.</>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                          );
                        })
                    ) : item.menu === 'LAPCOS' ? (
                      menuData
                        .filter(
                          (menu) =>
                            menu.url.includes('lapcos') && menu.depth === 3
                        )
                        .map((project: menuType, projectIndex: number) => {
                          return (
                            <div
                              key={`${project.menu}_${projectIndex}`}
                              className={style.project_box}
                            >
                              <p className={style.project_nm}>{project.menu}</p>
                              <span className={style.project_period}>
                                {project.menu === 'COSTCO' ? (
                                  <>2019.09 ~ 2019.11</>
                                ) : project.menu === 'TRADESHOW' ? (
                                  <>2019.04 ~ 2019.09</>
                                ) : project.menu === 'CATALOG' ? (
                                  <>2019.02 ~ 2019.11</>
                                ) : (
                                  <></>
                                )}
                              </span>
                              <div className={style.project_desc}>
                                {project.menu === 'COSTCO' ? (
                                  <>
                                    미국 COSTCO 하반기 & 유럽 COSTCO 상반기 제품
                                    패키지 디자인 유지 보수
                                  </>
                                ) : project.menu === 'TRADESHOW' ? (
                                  <>
                                    바이어 초대장 디자인, 카탈로그 제작, 쇼룸 내
                                    DP 디자인, 제품 사인 디자인
                                  </>
                                ) : project.menu === 'CATALOG' ? (
                                  <>자사 제품 카탈로그 디자인</>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                          );
                        })
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* support_section --------------------------------- */}
      {/* <section className={`section_padding ${style.support_section}`}>
        <div className={`top_box ${style.top_box}`}>
          <h3>SUPPORT +</h3>
        </div>

        <div className={`wrap flex_center ${style.support_box}`}>
          <Link
            href={
              'https://www.notion.so/thunhye/dde0ea1679e5421e868e63a9410ccbcf?pvs=4'
            }
            className={'flex_center'}
          >
            이력서 바로 가기
            <RiNotionFill role="img" aria-label="노션 아이콘" />
          </Link>
          <Link
            href={'https://github.com/elin-sunhye'}
            target="_blank"
            className={'flex_center'}
          >
            github 바로 가기
            <FaGithub role="img" aria-label="깃허브 아이콘" />
          </Link>
        </div>
      </section> */}
      {/* view_more_section --------------------------------- */}
      {/* <LastSection
        title="김선혜"
        subTitle="🤙 010-2162-0043"
        explain="📎 GitHub"
      /> */}
    </main>
  );
}
