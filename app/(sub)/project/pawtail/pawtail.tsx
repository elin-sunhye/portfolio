"use client";

import style from "./pawtail.module.scss";
import "./swiper.scss";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import TopBox from "@/component/topBox/TopBox";
import Btn from "@/component/common/btn/Btn";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

// react-swiper
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css"; //basic
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// dummyData
import menuData from "@/dummyData/menu.json";

export default function Pawtail() {
  //
  const router = useRouter();

  // swiper
  const carreerRef = useRef(null);
  // setting
  const swiperParams = {
    modules: [Navigation],
    spaceBetween: 0, // 슬라이드 사이 여백
    speed: 1000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 1, //  한 슬라이드에 보여줄 개수
    allowTouchMove: false, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능

    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  };

  return (
    <>
      <section className={`section_padding ${style.sub_top}`}>
        <TopBox
          explain={""}
          // explain={"react 언어를 사용하여 개발한 브랜드 사이트"}
          desc={"강아지 유치원 알림장"}
        />

        <div className={`wrap ${style.sub_top_inner}`}>
          <div className={`${style.expl_box}`}>
            <div className={`flex_start ${style.info}`}>
              <p>
                <span>PERIOD</span>
                2024.06 ~
              </p>
              <p>
                <span>SKILLS</span>
                React.js, Next.js, JavaScript, TypeScript, SCSS
              </p>
            </div>
            <p className={style.expl}>
              React 기반의 Next.js 프레임워크를 활용하여 개발한 웹 & 앱입니다.
              <br />
              NextAuth 라이브러리를 통해 사용자들이 간편하게 로그인 및
              로그아웃할 수 있는 기능을 제공하며,
              <br />
              사용자 친화적이고 직관적인 인터페이스를 제공하며, 웹과 모바일 환경
              모두에서 원활하게 사용할 수 있도록 설계하였습니다. <br />
              {/* 강아지의 중요한 일정을 놓치지 않고 관리할 수 있는 완벽한 도구가 될
              것입니다. */}
            </p>
          </div>

          <Swiper
            {...swiperParams}
            ref={carreerRef}
            className={style.sub_swiper}
          >
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>

            <Btn
              title={`이전 슬라이드 버튼`}
              id={`swiperButtonPrev`}
              className={`swiper-button-prev`}
              border={"br_round"}
            >
              <HiOutlineChevronLeft
                role={`img`}
                aria-label={`왼쪽 화살표 아이콘`}
              />
            </Btn>
            <Btn
              title={`다음 슬라이드 버튼`}
              id={`swiperButtonNext`}
              className={`swiper-button-next`}
              border={"br_round"}
            >
              <HiOutlineChevronRight
                role={`img`}
                aria-label={`오른쪽 화살표 아이콘`}
              />
            </Btn>
          </Swiper>
        </div>
      </section>

      <section className={`flex_center ${style.detail_box}`}>
        <div className={`flex_between ${style.row}`}>
          <div></div>
          <div></div>
        </div>
        <div className={`flex_between ${style.row}`}>
          <div></div>
          <div></div>
        </div>
        <div className={`flex_between ${style.row}`}>
          <div></div>
          <div></div>
        </div>
        <div className={`flex_between ${style.row}`}>
          <div></div>
          <div></div>
        </div>
        <div className={`flex_between ${style.row}`}>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
}
