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
          `translateX(-${String(window.scrollY - window.innerHeight * 3.5)}px)`
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
                window.scrollY - window.innerHeight * 3.5
                // window.scrollY + 1
                // window.scrollY - window.innerHeight + 1
              )}px)`
            );
          } else {
            scrollTxtRef.current.style.setProperty(
              'transform',
              `translateX(-${String(
                window.scrollY - window.innerHeight * 3.5
                // window.scrollY - 1
                // window.scrollY - window.innerHeight - 1
              )}px)`
            );
          }
          lastScroll = currentScroll;
        }

        // scroll wiko
        if (scroll2UpRef.current !== null && scroll2DownRef.current !== null) {
          if (window.scrollY >= window.innerHeight * 2) {
            let num1 = String(
              window.scrollY - window.innerHeight * 2 + 0.1
            ).replaceAll('.', '');

            let num2 = String(
              window.scrollY - window.innerHeight * 2 - 0.1
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

  // info_section ---------------------------------
  // dialog
  const [contactMeDialog, setContactMeDialog] = useState<boolean>(false);

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

            <div className={style.skill_box}></div>
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
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
        </div>
      </section>

      {/* career_section --------------------------------- */}
      <section className={`section_padding ${style.career_section}`}>
        <div className={`top_box ${style.top_box}`}>
          <h3>TOGETHER</h3>
          <p>총 경력 : 4년 5개월 | 2019년 2월 ~ </p>
          <span>(2024년 5월 기준 | 공백 : 2019년 11월 ~ 2020년 11월)</span>
        </div>

        <div className={`wrap flex_center ${style.career_box}`}>
          {menuData
            .filter((menu) => menu.url.includes('career') && menu.depth === 2)
            .map((item: menuType, itemInd: number) => {
              return (
                <a
                  key={`rolling_item_${item.seq}`}
                  href={item.url}
                  className={`flex_center ${style.career_slides} ${
                    itemInd % 2 === 0 ? style.polygon : ''
                  } ${itemInd % 3 === 0 ? style.circle : ''} ${
                    itemInd % 2 == 0 ? style.red : ''
                  } ${itemInd % 3 == 0 ? style.blue : ''} ${
                    itemInd % 5 == 0 ? style.black : ''
                  }`}
                >
                  <p>
                    <Image
                      src={`/main/together/img_${item.menu.toLowerCase()}_logo.svg`}
                      alt={`${item.menu.toLowerCase()} 로고`}
                      width={0}
                      height={0}
                    />
                  </p>

                  <div
                    className={`flex_center ${style.career_rolling_hover_card}`}
                  >
                    <span>
                      {item.menu === 'DEPS'
                        ? '2021.12 ~ 재직중'
                        : item.menu === 'ORANGE'
                        ? '2020.11 ~ 2021.11'
                        : '2019.02 ~ 2019.11'}
                    </span>
                    <p>{item.menu}</p>
                    <span>
                      {item.menu === 'DEPS'
                        ? '응용 소프트웨어 개발 및 공급'
                        : item.menu === 'ORANGE'
                        ? '해외 아티스트 콜라보앨범 재작'
                        : '화장품'}
                    </span>
                  </div>
                </a>
              );
            })}
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

      {/* support_section --------------------------------- */}
      <section className={`section_padding ${style.support_section}`}>
        <div className={`top_box ${style.top_box}`}>
          <h3>SUPPORT +</h3>
          {/* <p>가나다라 가나 가나다라가나다라 가나 가나다라</p>
          <span>가나다 나다 가가라</span> */}
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
      </section>

      {/* scroll_txt_section --------------------------------- */}
      <section className={style.scroll_txt_section}>
        <span className={style.scroll_txt} ref={scrollTxtRef}>
          THE PARADISE IS WHERE I AM THE PARADISE IS WHERE I AM THE PARADISE IS
          WHERE I AM THE PARADISE IS WHERE I AM
        </span>
      </section>

      {/* view_more_section --------------------------------- */}
      <LastSection
        title="김선혜"
        subTitle="🤙 010-2162-0043"
        explain="📎 GitHub"
      />
    </main>
  );
}
