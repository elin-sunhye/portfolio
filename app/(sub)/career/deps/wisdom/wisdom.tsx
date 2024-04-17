'use client';

import style from './wisdom.module.scss';
import './swiper.scss';
import SubTop from '@/component/common/subTop/SubTop';
import Rolling from '@/component/common/rolling/Rolling';
import { MdFactory, MdFlight } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { Btn } from '@/component/common/btn/Btn';
import LastSection from '@/component/lastSection/LastSection';

// react-swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import 'swiper/css'; //basic
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { useRef } from 'react';
import Switch from '@/component/common/switch/Switch';

export default function Wisdom() {
  // data_section ---------------------------------
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
      {/* sub_top --------------------------------- */}
      <SubTop
        explain={
          '경남대학교와 지역기관, 산업체의 협업체계가 보다 쉽게 이어질 수 있도록 연결합니다.'
        }
        linkBtn={{
          id: 'btnWisdom',
          className: style.btn_link,
          scss: { backgroundColor: 'var(--main-blue-1)' },
        }}
      >
        <Rolling hoverStop={false} speed="120s">
          <div className={`${style.rolling_item} ${style.rolling_first}`}></div>
          <div
            className={`flex_between ${style.rolling_item} ${style.rolling_chart}`}
          >
            <span></span>
            <span></span>
          </div>
          <div
            className={`${style.rolling_item} ${style.rolling_circle}`}
          ></div>
          {/* <div className={`${style.rolling_item} ${style.rolling_}`}></div>
          <div className={`${style.rolling_item} ${style.rolling_}`}></div>
          <div className={`${style.rolling_item} ${style.rolling_}`}></div> */}
        </Rolling>
      </SubTop>

      {/* first_section --------------------------------- */}
      <section className={`section_padding ${style.first_section}`}>
        <div className={`top_box`}>
          <span className="point">dskhf sdjfhsjdk asdfh</span>
          <h3>어쩌고 저쩌고 짠</h3>
          <p>asdasdasdasdasdasdasd</p>
        </div>

        <span className={style.bg_top}></span>

        <div className={`wrap flex_center ${style.first_box}`}>
          <div className={style.left}></div>
          <div className={style.right}>
            <Switch
              id={''}
              labelNm={'관리자'}
              value={''}
              ref={null}
              size="xlg"
              checked={true}
              disabled={true}
            />
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
            type={`button`}
            title={`이전 슬라이드 버튼`}
            id={`swiperButtonPrev`}
            className={`swiper-button-prev`}
            btnType={'ico'}
            ico={
              <HiOutlineChevronLeft
                role={`img`}
                aria-label={`왼쪽 화살표 아이콘`}
              />
            }
            hover={false}
          />
          <Btn
            type={`button`}
            title={`다음 슬라이드 버튼`}
            id={`swiperButtonNext`}
            className={`swiper-button-next`}
            btnType={'ico'}
            ico={
              <HiOutlineChevronRight
                role={`img`}
                aria-label={`오른쪽 화살표 아이콘`}
              />
            }
            hover={false}
          />
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
          type={'link'}
          title={'view site'}
          id={'viewSite'}
          btnType={'text'}
          hover={false}
          className={'btn_go_page'}
          btnBg="var(--black)"
          btnColor="var(--white)"
        />
      </LastSection>
    </>
  );
}
