'use client';

import style from './page.module.scss';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';
import { menuType } from '@/type/menu/menuType';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LastSection from '@/component/lastSection/LastSection';
import Btn from '@/component/common/btn/Btn';
import Image from 'next/image';

// dummyData ---------------------------------
import menuData from '@/dummyData/menu.json';
import { RiNotionFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';

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
        <div className={`top_box ${style.top_box}`}>
          <h3>SKILLS ABILITY</h3>
          <p>Framework | Language | Library</p>
        </div>
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
              <span>123</span>
              <div className="flex_start">
                <span></span>
                <span></span>
              </div>
              <span>123</span>
            </div>
            <div
              ref={scroll2UpRef}
              className={`flex_center ${style.scroll_up}`}
            >
              <span>asd</span>
              <span>123</span>
              <span>123</span>
              <span>dsfsad</span>
              <span>123</span>
            </div>
          </div>
          <div className={`top_box ${style.top_box}`}>
            <h3>WIKO</h3>
            <p>가나다라 가나 가나다라가나다라 가나 가나다라</p>
            <span>가나다 나다 가가라</span>
            <Btn
              title={'자세히 보기'}
              id={'viewDetail'}
              className={style.btn_go_page}
              color="black"
              border="br_round"
            >
              view detail
            </Btn>
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
        <div className={`top_box ${style.top_box}`}>
          <h3>TOGETHER</h3>
          <p>총 경력 : 4년 5개월 | 2019년 2월 ~ </p>
          <span>(2024년 5월 기준)</span>
          {/* <span>(2024년 5월 기준 | 공백 : 2019년 11월 ~ 2020년 11월)</span> */}
        </div>

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
                                  <></>
                                ) : (
                                  <a href={project.site} target="_blank">
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
                              <div className={style.project_desc}>
                                {project.menu === 'WISDOM' ? (
                                  <>
                                    경남대학과 지역산업의 공생 발전을 위한
                                    산학연 플랫폼(LINC 사업). 학생과 교수 등
                                    다양한 사람들이 접속하여 교육을 신청하고
                                    공간을 대여 할 수 있는 사이트.
                                  </>
                                ) : project.menu === 'GNCAR' ? (
                                  <>
                                    경남 TP 버추얼 개발 기술 지원 플랫폼. 경남도
                                    부품사들의 미래차 전환을 위한 프로세스 및
                                    장비 구축을 위한 사이트로 지도 기반으로
                                    자동자 부품 기업 및 정보를 검색 하고, 3D
                                    부품 정보를 확인.
                                  </>
                                ) : project.menu === 'GNWP' ? (
                                  <>
                                    경상남도 통합 일자리 플랫폼으로 지도기반으로
                                    주변 구인 기업을 검색하고, AI 컨설팅으로
                                    매칭하여 경남 내의 청년 구직 활동을 활성화
                                    시키려는 목적의 사이트.
                                  </>
                                ) : project.menu === 'GNHOME' ? (
                                  <>
                                    경남 공동 주택 관리 통합 플랫폼. 아파트
                                    관리비 투명화하고, 아파트 관리자들과 지자체,
                                    아파트 임원들과 공문을 주고 받는 결재
                                    시스템이 있으며, 상황전파 방송을 통하여
                                    아파트 거주자들과 관리자들과의 원할한 소통.
                                  </>
                                ) : project.menu === 'SANDAN' ? (
                                  <>
                                    경남 공단 내 키오스크 설치하여 주변 환경에
                                    대해 알려주는 플랫폼. 지도로 각 키오스크
                                    위치를 알려주고 주변 환경에 대해 얼려줌.
                                  </>
                                ) : project.menu === 'HOMEPAGE' ? (
                                  <>자사 브랜드 리뉴얼 사이트.</>
                                ) : project.menu === 'STX' ? (
                                  <>
                                    STX엔진 내 SSC 시스템. 회사 내 부품 정보를
                                    등록하고 관리하는 사이트.
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
