'use client';

import style from './wisdom.module.scss';
import './swiper.scss';
import SubTop from '@/component/common/subTop/SubTop';
import Rolling from '@/component/common/rolling/Rolling';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import LastSection from '@/component/lastSection/LastSection';
import { useEffect, useRef, useState } from 'react';
import Switch from '@/component/common/switch/Switch';
import Image from 'next/image';

// react-swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // basics
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper/modules';
import 'swiper/css'; //basic
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Btn from '@/component/common/btn/Btn';

export default function Wisdom() {
  // data_section ---------------------------------
  // swiper
  const technologyRef = useRef(null);
  const carreerRef = useRef(null);
  // setting
  const swiperAutoParams = {
    modules: [Autoplay, EffectFade],
    spaceBetween: 0, // 슬라이드 사이 여백
    speed: 1000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 1, //  한 슬라이드에 보여줄 개수
    effect: 'fade',
    allowTouchMove: false, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능
    autoplay: {
      // 자동 슬라이드 설정 , 비 활성화 시 false, true 설정 시   import {Autoplay from "swiper/modules" 추가
      delay: 2500, // 시간 설정
      disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
  };

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

  // active index
  const [idx, setIdx] = useState<number>(0);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  // useEffect(() => {
  //   if (document) {
  //     const cn = document.getElementsByClassName('slick-active');

  //     for (var i = 0; i < cn.length; i++) {
  //       cn[i].classList.remove(`active_${i}`);
  //       cn[i].classList.add(`active_${i}`);
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   if (document && technologyRef && technologyRef.current) {
  //     const cn = document.getElementsByClassName('slick_active');

  //     for (var i = 0; 1 < cn.length; i++) {
  //       if (document.getElementsByClassName(`active_${i}`)) {
  //         cn[i].classList.remove(`active_0`);
  //         cn[i].classList.remove(`active_1`);
  //         cn[i].classList.remove(`active_2`);
  //         cn[i].classList.remove(`active_3`);
  //         cn[i].classList.remove(`active_4`);

  //         cn[i].classList.add(`active_${i}`);
  //       } else {
  //         cn[i].classList.add(`active_${i}`);
  //       }
  //     }
  //   }
  // }, [idx, technologyRef.current]);

  return (
    <>
      {/* sub_top --------------------------------- */}
      <SubTop
        explain={'경남대학교와 지역기관, 산업체의 협업체계를 위한 개발 사이트'}
        linkBtn={{
          id: 'btnWisdom',
          className: style.btn_link,
          scss: { backgroundColor: 'var(--main-blue-1)' },
          tartget: '_blank',
        }}
      >
        <Rolling hoverStop={false} speed="120s">
          <div
            className={`${style.rolling_item} ${style.rolling_circle}`}
          ></div>
          <div className={`${style.rolling_item} ${style.rolling_half_circle}`}>
            <span></span>
            <span></span>
          </div>
          <div className={`${style.rolling_item} ${style.rolling_won}`}></div>
          <div
            className={`flex_between ${style.rolling_item} ${style.rolling_chart}`}
          >
            <span></span>
            <span></span>
          </div>

          <div
            className={`flex_center ${style.rolling_item} ${style.rolling_four_circle}`}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Rolling>
      </SubTop>

      {/* first_section --------------------------------- */}
      <section className={`section_padding ${style.first_section}`}>
        <div className={`top_box`}>
          {/* <span className="point">Technology Stack</span> */}
          <h3>Technology Stack</h3>
          {/* <p>asdasdasdasdasdasdasd</p> */}
        </div>

        <span className={style.bg_top}></span>

        <div className={`wrap flex_center ${style.first_box}`}>
          <div className={`swiper_left ${style.left}`}>
            <Swiper
              {...swiperAutoParams}
              ref={technologyRef}
              onSlideChange={(e) => {
                console.log('e', e.activeIndex);
                //   setIdx(e.activeIndex);
              }}
            >
              <SwiperSlide>
                <Image
                  src={'/career/deps/wisdom/img_main_all.png'}
                  alt={'wisdom main all 이미지'}
                  width={100}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                />
              </SwiperSlide>
              <SwiperSlide className="front">
                <Image
                  src={'/career/deps/wisdom/img_sub_front.png'}
                  alt={'wisdom sub 이미지'}
                  width={100}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={'/career/deps/wisdom/img_sub_all.png'}
                  alt={'wisdom sub 이미지'}
                  width={100}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={'/career/deps/wisdom/img_cms_all.png'}
                  alt={'wisdom cms 이미지'}
                  width={100}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={`flex_center ${style.right}`}>
            <div className={`flex_start`}>
              <span>front-end</span>
              <Switch
                title={''}
                id={''}
                value={''}
                ref={null}
                inpSize="xlg"
                color="blue"
                checked={true}
                disabled={true}
                border={'br_round'}
              />
            </div>

            <div className={`flex_start`}>
              <span>back-end</span>
              <Switch
                title={''}
                id={''}
                value={''}
                ref={null}
                inpSize="xlg"
                color="blue"
                checked={true}
                disabled={true}
                border={'br_round'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* sec_sections --------------------------------- */}
      <section className={`section_padding ${style.sec_sections}`}>
        <div className={`top_box`}>
          <span className="point">dskhf sdjfhsjdk asdfh</span>
          <h3>어쩌고 저쩌고 짠</h3>
          <p>asdasdasdasdasdasdasd</p>
        </div>

        <div className={`wrap flex_center ${style.sec_box}`}>
          <div className={style.row}>
            <div></div>
            <div></div>
          </div>
          <div className={style.row}>
            <div></div>
            <div></div>
          </div>
          <div className={style.row}>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>

      {/* third_section --------------------------------- */}
      <section className={`section_padding ${style.third_section}`}>
        <div className={`wrap flex_center ${style.third_box}`}>
          <div className={`top_box ${style.top_box}`}>
            <p>code</p>
            <span>코드 어쩌고 저쩌고</span>
          </div>
        </div>
      </section>

      {/* fourth_section --------------------------------- */}
      <section className={`section_padding ${style.fourth_section}`}>
        <div className={`top_box`}>
          <p>database</p>
          <span>data 어쩌고 저쩌고</span>
        </div>

        <div className={`wrap ${style.fourth_box}`}>
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
          >
            <HiOutlineChevronRight
              role={`img`}
              aria-label={`오른쪽 화살표 아이콘`}
            />
          </Btn>
        </div>
      </section>

      {/* sec_sections --------------------------------- */}
      <section className={`section_padding ${style.sec_sections}`}>
        <div className={`top_box`}>
          <span className="point">dskhf sdjfhsjdk asdfh</span>
          <h3>어쩌고 저쩌고 짠</h3>
          <p>asdasdasdasdasdasdasd</p>
        </div>

        <div className={`wrap flex_center ${style.sec_box}`}>
          <div className={style.row}>
            <div></div>
            <div></div>
          </div>
          <div className={style.row}>
            <div></div>
            <div></div>
          </div>
          <div className={style.row}>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>

      {/* view_site_section --------------------------------- */}
      <LastSection title="주조 어쩌고 저쩌고 짠" explain="보러고고">
        <Btn
          href={'http://wiko.co.kr'}
          title={'자세히 보기'}
          id={'viewSite'}
          className={'btn_go_page'}
          color="var(--black)"
        >
          view site
        </Btn>
      </LastSection>
    </>
  );
}
