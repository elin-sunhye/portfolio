'use client';

import style from './wiko.module.scss';
import './swiper.scss';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import TopBox from '@/component/topBox/TopBox';
import Btn from '@/component/common/btn/Btn';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

// react-swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import 'swiper/css'; //basic
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// dummyData
import menuData from '@/dummyData/menu.json';

export default function Wiko() {
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
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  };

  return (
    <>
      <section className={`section_padding ${style.sub_top}`}>
        <TopBox explain={'asdas'} desc={'1232'} />

        <div className={`wrap ${style.sub_top_box}`}>
          <Swiper {...swiperParams} ref={carreerRef}>
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
          </Swiper>
          <Btn
            title={`이전 슬라이드 버튼`}
            id={`swiperButtonPrev`}
            className={`swiper-button-prev`}
            border={'br_round'}
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
            border={'br_round'}
          >
            <HiOutlineChevronRight
              role={`img`}
              aria-label={`오른쪽 화살표 아이콘`}
            />
          </Btn>
        </div>
      </section>
      <section className={`section_padding ${style.project_info}`}>
        <TopBox
          direction="left"
          title={' '}
          explain={
            '사이트에 대한 설명을 써요 ㅓㅇ나ㅗㄹㅇ나;ㅓㅗㄹ 사이트에 대한 설명을 써요 ㅓㅇ나ㅗㄹㅇ나;ㅓㅗㄹ 사이트에 대한 설명을 써요ㅓㅇ나ㅗㄹㅇ나;ㅓㅗㄹ 사이트에 대한 설명을 써요 ㅓㅇ나ㅗㄹㅇ나;ㅓㅗㄹ 사이트에 대한 설명을 써요ㅓㅇ나ㅗㄹㅇ나;ㅓㅗㄹ 사이트에 대한 설명을 써요 ㅓㅇ나ㅗㄹㅇ나;ㅓㅗㄹ 사이트에 대한 설명을 써요ㅓㅇ나ㅗㄹㅇ나;ㅓㅗㄹ 주요 기능은 무엇이며, 이러 이러한 기능을 구현하였따, 등등ㅌ'
          }
          desc={'SKILLS | React.js, Next.js, JavaScript, TypeScript, SCSS'}
        />
      </section>

      <section className={`wrap flex_center ${style.detail_box}`}>
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
