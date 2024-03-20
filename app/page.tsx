'use client';

import style from './page.module.scss';
import { Btn } from '@/component/common/btn/Btn';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';

// react-swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import 'swiper/css'; //basic
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

export default function Home() {
  // swiper setting
  // const swiperParams = {
  //   modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
  //   slidesOffsetBefore: 0, // 슬라이드 시작 부분 여백
  //   slidesOffsetAfter: 0, // 슬라이드 끝 부분 여백
  //   spaceBetween: 0, // 슬라이드 사이 여백
  //   loop: true,
  //   slidesPerView: 1, //  한 슬라이드에 보여줄 개수

  //   initialSlide: 0, // 시작 위치 값
  //   centeredSlides: true, // center 정렬

  //   autoplay: {
  //     // 자동 슬라이드 설정 , 비 활성화 시 false, true 설정 시   import {Autoplay from "swiper/modules" 추가
  //     delay: 7000, // 시간 설정
  //     disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  //   },
  //   allowTouchMove: false, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능
  // };

  // scroll
  const [currentScrollY, setCurrentScrollY] = useState<number>(0);
  const scrollTxtRef = useRef<HTMLSpanElement>(null);

  // 화면 로드시
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 스크롤 초기화
      // window.scrollTo({ top: 0 });
      if (window.scrollY >= 10 && scrollTxtRef.current !== null) {
        scrollTxtRef.current.style.setProperty(
          'transform',
          `translateX(-${String(window.scrollY + 1)}px)`
        );
      }

      // wheel
      window.addEventListener('wheel', function (e) {
        if (window.scrollY >= 50 && scrollTxtRef.current !== null) {
          if (e.deltaY > 0) {
            scrollTxtRef.current.style.setProperty(
              'transform',
              `translateX(-${String(window.scrollY + 1)}px)`
            );
          } else {
            scrollTxtRef.current.style.setProperty(
              'transform',
              `translateX(-${String(window.scrollY - 1)}px)`
            );
          }
        }
      });

      // scroll
      window.addEventListener('scroll', function (e) {
        setCurrentScrollY(window.scrollY);
      });
    }
  }, []);

  // scrollY 변경할떄 마다
  useEffect(() => {
    window.addEventListener('scroll', function (e) {
      if (scrollTxtRef.current !== null) {
        if (window.scrollY >= currentScrollY) {
          console.log('올라간다');
        } else {
          console.log('내려간다');
        }
      }
    });
  }, [currentScrollY]);

  return (
    <main>
      <section className={style.main_visual_box}>
        {/* <Swiper {...swiperParams}>
          <SwiperSlide>
            <div className={`flex_center ${style.slide_1}`}>1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`flex_center ${style.slide_2}`}>2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`flex_center ${style.slide_3}`}>3</div>
          </SwiperSlide>
        </Swiper> */}
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
          onClick={() => {}}
        />
      </section>

      <section className={`section_padding ${style.introduce_section}`}>
        <span className={style.scroll_txt} ref={scrollTxtRef}>
          THE PARADISE IS WHERE I AM
        </span>
      </section>
    </main>
  );
}
