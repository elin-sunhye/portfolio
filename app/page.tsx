'use client';

import style from './page.module.scss';
import { Btn } from '@/component/common/btn/Btn';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';
import { menuType } from '@/type/menu/menuType';
import Rolling from '@/component/common/rolling/Rolling';

// dummyData
import menuData from '@/dummyData/menu.json';

export default function Home() {
  // 브라우저 크기
  const [browserHeight, setBrowserHeight] = useState<number>(0);

  // scroll
  const scrollTxtRef = useRef<HTMLSpanElement>(null);

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
          `translateX(-${String(window.scrollY - window.innerHeight + 1)}px)`
        );
      }

      // scroll
      let lastScroll = 0;
      window.addEventListener('scroll', function () {
        let currentScroll = document.documentElement.scrollTop;
        if (
          scrollTxtRef.current !== null &&
          window.scrollY >= 10
          // window.innerHeight <= window.scrollY
        ) {
          if (currentScroll > lastScroll) {
            scrollTxtRef.current.style.setProperty(
              'transform',
              `translateX(-${String(
                window.scrollY + 1
                // window.scrollY - window.innerHeight + 1
              )}px)`
            );
          } else {
            scrollTxtRef.current.style.setProperty(
              'transform',
              `translateX(-${String(
                window.scrollY - 1
                // window.scrollY - window.innerHeight - 1
              )}px)`
            );
          }
          lastScroll = currentScroll;
        }
      });
    }
  }, []);

  // rolling
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
      <section className={style.main_visual_box}>
        <div className={style.main_visual}></div>
        <Btn
          className={style.btn_go_content}
          type={'button'}
          title={'컨텐츠'}
          id={'goContent'}
          btnType={'ico'}
          hover={false}
          ico={
            <HiOutlineChevronDoubleDown
              role="img"
              aria-label="더블 아래 화살표"
            />
          }
          onClick={() =>
            window.scrollTo({ top: browserHeight, behavior: 'smooth' })
          }
        />
      </section>
      <section className={style.scroll_txt_section}>
        <span className={style.scroll_txt} ref={scrollTxtRef}>
          THE PARADISE IS WHERE I AM THE PARADISE IS WHERE I AM
        </span>
      </section>
      <section className={`section_padding ${style.introduce_section}`}>
        <div className={style.top_box}>
          <h3>김선혜</h3>
          <p>가나다라 가나 가나다라가나다라 가나 가나다라</p>
          <span>가나다 나다 가가라</span>
          <Btn
            type={'button'}
            title={'contact me'}
            id={'contactMe'}
            btnType={'text'}
            hover={false}
            className={style.btn_go_page}
            btnBg="var(--black)"
            btnColor="var(--white)"
          />
        </div>

        <div className={`wrap flex_start ${style.skill_box}`}>
          <div>
            <span>
              <img src="/main/skill/img_react.svg" alt="react" />
            </span>
            <span>
              <img src="/main/skill/img_react-query.svg" alt="react" />
            </span>
            <span>
              <img src="/main/skill/img_react-hook-form.png" alt="react" />
            </span>
            <span>
              <img src="/main/skill/img_react-icons.svg" alt="react" />
            </span>
          </div>
          <div>
            <span>
              <img src="/main/skill/img_nextjs.svg" alt="react" />
            </span>
            <span>
              <img src="/mainskill/img_recoil.svg" alt="react" />
            </span>
            <span>
              <img src="/mainskill/img_js.svg" alt="react" />
            </span>
            <span>
              <img src="/main/skill/img_ts.svg" alt="react" />
            </span>
          </div>
          <div>
            <span>
              <img src="/main/skill/img_html.svg" alt="react" />
            </span>
            <span>
              <img src="/main/skill/img_css.svg" alt="react" />
            </span>
            <span>
              <img src="/main/skill/img_scss.svg" alt="react" />
            </span>
            <span>
              <img src="/main/skill/img_github.svg" alt="react" />
            </span>
            <span>
              <img src="/main/skill/img_gitlab.svg" alt="react" />
            </span>
          </div>
        </div>
      </section>

      <section className={`section_padding ${style.career_section}`}>
        <div className={style.top_box}>
          <h3>TOGETHER</h3>
          <p>총 경력 : 4년 (5년차) | 2019년 2월 ~ </p>
          <span>(2024년 2월 기준 | 공백 : 2019년 11월 ~ 2020년 11월)</span>
        </div>

        <div className={`flex_start ${style.career_box}`}>
          {/* https://velog.io/@kimbangul/React-SCSS-%EC%B4%88%EA%B0%84%EB%8B%A8-%EB%AC%B4%ED%95%9C%EC%9E%AC%EC%83%9D-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0  */}
          <Rolling>
            {rollingITems.map((item, itemInd) => {
              return (
                <a
                  key={`rolling_item_${item.seq}`}
                  href={item.url}
                  className={`flex_center ${style.career_slides} ${
                    itemInd % 2 === 0 ? style.polygon : ''
                  } ${itemInd % 3 === 0 ? style.circle : ''} `}
                >
                  <p>개발 사진</p>

                  <div
                    className={`flex_center ${
                      style.career_rolling_hover_card
                    } ${itemInd % 2 == 0 ? style.red : ''} ${
                      itemInd % 4 == 0 ? style.blue : ''
                    } ${itemInd % 5 == 0 ? style.black : ''}`}
                  >
                    <span>
                      {menuData.find((seq) => seq.seq === item.parentSeq)?.menu}
                    </span>
                    <p>{item.menu}</p>
                    <span>
                      {item.menu === 'STX'
                        ? '2022.02 ~ 2022.08'
                        : item.menu === 'HOMEPAGE'
                        ? '2022.04 ~ 2022.06'
                        : item.menu === '3DSANDAN'
                        ? '2022.08 ~ 2022.10'
                        : item.menu === 'GAPT'
                        ? '2022.10 ~ 2023.03'
                        : item.menu === 'GNTP'
                        ? '2023.01 ~ 2023.07'
                        : item.menu === 'GNCAR'
                        ? '2023.08 ~ 2024.02'
                        : '2024.01 ~ 2024.03'}
                    </span>
                  </div>
                </a>
              );
            })}
          </Rolling>
          <Rolling deirection={'right'}>
            {rollingDesignITems.map((item, itemInd) => {
              return (
                <a
                  key={`rolling_design_item_${item.seq}`}
                  href={item.url}
                  className={`flex_center ${style.career_slides} ${
                    itemInd % 2 === 0 ? style.polygon : ''
                  } ${itemInd % 3 === 0 ? style.circle : ''} `}
                >
                  <p>디자인 사진</p>

                  <div
                    className={`flex_center ${
                      style.career_rolling_hover_card
                    } ${itemInd % 2 == 0 ? style.red : ''} ${
                      itemInd % 4 == 0 ? style.blue : ''
                    } ${itemInd % 5 == 0 ? style.black : ''}`}
                  >
                    <span>
                      {menuData.find((seq) => seq.seq === item.parentSeq)?.menu}
                    </span>
                    <p>{item.menu}</p>
                    <span>
                      {item.menu === 'CATALOG'
                        ? '2019.02 ~ 2019.04'
                        : item.menu === 'TRADESHOW'
                        ? '2019.04 ~ 2019.10'
                        : '2024.09 ~ 2024.11'}
                    </span>
                  </div>
                </a>
              );
            })}
            {rollingDesignITems.map((item, itemInd) => {
              return (
                <a
                  key={`rolling_design_item_${item.seq}`}
                  href={item.url}
                  className={`flex_center ${style.career_slides} ${
                    itemInd % 2 === 0 ? style.polygon : ''
                  } ${itemInd % 3 === 0 ? style.circle : ''} `}
                >
                  <p>디자인 사진</p>

                  <div
                    className={`flex_center ${
                      style.career_rolling_hover_card
                    } ${itemInd % 2 == 0 ? style.red : ''} ${
                      itemInd % 4 == 0 ? style.blue : ''
                    } ${itemInd % 5 == 0 ? style.black : ''}`}
                  >
                    <span>
                      {menuData.find((seq) => seq.seq === item.parentSeq)?.menu}
                    </span>
                    <p>{item.menu}</p>
                    <span>기간 | 설명설명ㅆㅡ</span>
                  </div>
                </a>
              );
            })}
          </Rolling>
        </div>
      </section>
      <section className={`${style.project_wiko_section}`}>
        <div className={`wrap flex_between ${style.wrap}`}>
          <div className={style.top_box}>
            <h3>WIKO</h3>
            <p>가나다라 가나 가나다라가나다라 가나 가나다라</p>
            <span>가나다 나다 가가라</span>
            <Btn
              type={'button'}
              title={'view detail'}
              id={'viewDetail'}
              btnType={'text'}
              hover={false}
              className={style.btn_go_page}
              btnBg="var(--black)"
              btnColor="var(--white)"
            />
          </div>
          <div className={`flex_end ${style.scroll_box}`}>
            <div className={`flex_center ${style.scroll_up}`}>
              <span>asd</span>
              <div>123</div>
              <span>123</span>
              <span>dsfsad</span>
              <div>123</div>
            </div>
            <div className={`flex_center ${style.scroll_down}`}>
              <span>asd</span>
              <div>123</div>
              <span>123</span>
              <span>dsfsad</span>
              <div>123</div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.project_2_section}`}>
        <div className={`wrap flex_between ${style.wrap}`}>
          <div className={`flex_end ${style.scroll_box}`}>
            <div className={`flex_center ${style.scroll_up}`}>
              <span>asd</span>
              <div>123</div>
              <span>123</span>
              <span>dsfsad</span>
              <div>123</div>
            </div>
            <div className={`flex_center ${style.scroll_down}`}>
              <span>asd</span>
              <div>123</div>
              <span>123</span>
              <span>dsfsad</span>
              <div>123</div>
            </div>
          </div>
          <div className={style.top_box}>
            <h3>WIKO</h3>
            <p>가나다라 가나 가나다라가나다라 가나 가나다라</p>
            <span>가나다 나다 가가라</span>
            <Btn
              type={'button'}
              title={'view detail'}
              id={'viewDetail'}
              btnType={'text'}
              hover={false}
              className={style.btn_go_page}
              btnBg="var(--black)"
              btnColor="var(--white)"
            />
          </div>
        </div>
      </section>
      <section className={`${style.project_3_section}`}>
        <div className={`wrap flex_between ${style.wrap}`}>
          <div className={style.top_box}>
            <h3>WIKO</h3>
            <p>가나다라 가나 가나다라가나다라 가나 가나다라</p>
            <span>가나다 나다 가가라</span>
            <Btn
              type={'button'}
              title={'view detail'}
              id={'viewDetail'}
              btnType={'text'}
              hover={false}
              className={style.btn_go_page}
              btnBg="var(--black)"
              btnColor="var(--white)"
            />
          </div>
          <div className={`flex_end ${style.scroll_box}`}>
            <div className={`flex_center ${style.scroll_up}`}>
              <span>asd</span>
              <div>123</div>
              <span>123</span>
              <span>dsfsad</span>
              <div>123</div>
            </div>
            <div className={`flex_center ${style.scroll_down}`}>
              <span>asd</span>
              <div>123</div>
              <span>123</span>
              <span>dsfsad</span>
              <div>123</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
