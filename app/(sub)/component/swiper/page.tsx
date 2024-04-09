"use client";

import style from "./page.module.scss";
import "./swiper.scss";
import { Btn } from "@/component/common/btn/Btn";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { menuType } from "@/type/menu/menuType";

// react-swiper
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css"; //basic
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// dummyData
import menuData from "@/dummyData/menu.json";

export default function Home() {
  // 브라우저 크기
  const [browserHeight, setBrowserHeight] = useState<number>(0);

  // scroll
  const scrollTxtRef = useRef<HTMLSpanElement>(null);

  // 화면 로드시
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 브라우저 크기
      setBrowserHeight(window.innerHeight);
      window.addEventListener("resize", function () {
        setBrowserHeight(window.innerHeight);
      });

      // 스크롤 초기화
      if (window.scrollY > 0 && scrollTxtRef.current !== null) {
        scrollTxtRef.current.style.setProperty(
          "transform",
          `translateX(-${String(window.scrollY - window.innerHeight + 1)}px)`
        );
      }

      // scroll
      let lastScroll = 0;
      window.addEventListener("scroll", function () {
        let currentScroll = document.documentElement.scrollTop;
        if (
          scrollTxtRef.current !== null &&
          window.innerHeight <= window.scrollY
        ) {
          if (currentScroll > lastScroll) {
            scrollTxtRef.current.style.setProperty(
              "transform",
              `translateX(-${String(
                window.scrollY - window.innerHeight + 1
              )}px)`
            );
          } else {
            scrollTxtRef.current.style.setProperty(
              "transform",
              `translateX(-${String(
                window.scrollY - window.innerHeight - 1
              )}px)`
            );
          }
          lastScroll = currentScroll;
        }
      });
    }
  }, []);

  // swiper
  const carreerRef = useRef(null);
  // setting
  const swiperParams = {
    modules: [Autoplay],
    spaceBetween: 20, // 슬라이드 사이 여백
    speed: 3000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: "auto", //  한 슬라이드에 보여줄 개수
    centeredSlides: true, // center 정렬
    autoplay: {
      // 자동 슬라이드 설정 , 비 활성화 시 false, true 설정 시   import {Autoplay from "swiper/modules" 추가
      delay: 0, // 시간 설정
      disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    allowTouchMove: false, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능
  };

  // swiper item
  const [swiperItems, setSiwerItems] = useState<menuType[]>([]);
  useEffect(() => {
    setSiwerItems(
      menuData.filter((mn) => mn.url.includes("/career/") && mn.depth === 3)
    );
  }, [menuData]);

  return (
    <main>
      <section className={style.main_visual_box}>
        <div className={style.main_visual}></div>
        <Btn
          className={style.btn_go_content}
          type={"button"}
          title={"컨텐츠"}
          id={"goContent"}
          btnType={"ico"}
          hover={false}
          ico={
            <HiOutlineChevronDoubleDown
              role="img"
              aria-label="더블 아래 화살표"
            />
          }
          onClick={() =>
            window.scrollTo({ top: browserHeight, behavior: "smooth" })
          }
        />
      </section>

      <section className={`section_padding ${style.introduce_section}`}>
        <div className={style.top_box}>
          <h3>김선혜</h3>
          <p>가나다라 가나 가나다라가나다라 가나 가나다라</p>
          <span>가나다 나다 가가라</span>
          <Btn
            type={"button"}
            title={"contact me"}
            id={"contactMe"}
            btnType={"text"}
            hover={false}
            className={style.btn_go_page}
            btnBg="var(--black)"
            btnColor="var(--white)"
          />
        </div>

        <div className={`wrap flex_start ${style.skill_box}`}>
          <div>
            <span>
              <img src="/skill/img_react.svg" alt="react" />
            </span>
            <span>
              <img src="/skill/img_react-query.svg" alt="react" />
            </span>
            <span>
              <img src="/skill/img_react-hook-form.png" alt="react" />
            </span>
            <span>
              <img src="/skill/img_react-icons.svg" alt="react" />
            </span>
          </div>
          <div>
            <span>
              <img src="/skill/img_nextjs.svg" alt="react" />
            </span>
            <span>
              <img src="/skill/img_recoil.svg" alt="react" />
            </span>
            <span>
              <img src="/skill/img_js.svg" alt="react" />
            </span>
            <span>
              <img src="/skill/img_ts.svg" alt="react" />
            </span>
          </div>
          <div>
            <span>
              <img src="/skill/img_html.svg" alt="react" />
            </span>
            <span>
              <img src="/skill/img_css.svg" alt="react" />
            </span>
            <span>
              <img src="/skill/img_scss.svg" alt="react" />
            </span>
            <span>
              <img src="/skill/img_github.svg" alt="react" />
            </span>
            <span>
              <img src="/skill/img_gitlab.svg" alt="react" />
            </span>
          </div>
        </div>
      </section>
      <section className={style.scroll_txt_section}>
        <span className={style.scroll_txt} ref={scrollTxtRef}>
          THE PARADISE IS WHERE I AM THE PARADISE IS WHERE I AM
        </span>
      </section>
      <section className={`section_padding ${style.career_section}`}>
        <div className={style.top_box}>
          <h3>TOGETHER</h3>
          <p>총 경력 : 4년 (5년차) | 2019년 2월 ~ </p>
          <span>(2024년 2월 기준 | 공백 : 2019년 11월 ~ 2020년 11월)</span>
          <Btn
            type={"button"}
            title={"view more"}
            id={"viewMore"}
            btnType={"text"}
            hover={false}
            className={style.btn_go_page}
            btnBg="var(--black)"
            btnColor="var(--white)"
          />
        </div>

        {/* TODO: 롤링배너 swiper 빼고 다시 만들기 */}
        {/* https://velog.io/@kimbangul/React-SCSS-%EC%B4%88%EA%B0%84%EB%8B%A8-%EB%AC%B4%ED%95%9C%EC%9E%AC%EC%83%9D-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0  */}
        <div
          className={style.career_box}
          onMouseEnter={() => {
            if (carreerRef.current) {
              // @ts-ignore
              carreerRef.current.swiper.autoplay.stop();
            }
          }}
          onMouseLeave={() => {
            if (carreerRef.current) {
              // @ts-ignore
              carreerRef.current.swiper.autoplay.start();
            }
          }}
        >
          {/* @ts-ignore */}
          <Swiper {...swiperParams} ref={carreerRef}>
            {swiperItems.map((item, itemInd) => {
              return (
                <SwiperSlide
                  key={`swiper_item_${item.seq}`}
                  className={`${style.career_slides} ${
                    itemInd % 2 === 0 ? style.two : ""
                  } ${
                    itemInd % 2 === 0 && itemInd % 3 === 0 ? style.three : ""
                  } `}
                >
                  <p>사진</p>

                  <div className={`flex_center ${style.career_slides_hover}`}>
                    <span>
                      {menuData.find((seq) => seq.seq === item.parentSeq)?.menu}
                    </span>
                    <p>{item.menu}</p>
                    <span>기간 | 설명설명ㅆ,</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </main>
  );
}
