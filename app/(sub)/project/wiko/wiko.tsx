'use client';

import style from './wiko.module.scss';
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

export default function Wiko() {
  // sub_top ---------------------------------
  const rollingItem1: { string: string; tag: JSX.Element }[] = [
    { string: '123123123', tag: <></> },
    { string: '', tag: <MdFlight role="img" aria-label="비행기 아이콘" /> },
    { string: 'axdjh1', tag: <></> },
    { string: 'alsald', tag: <></> },
    {
      string: '',
      tag: <TbWorld role="img" aria-label="세계 아이콘" />,
    },
    { string: 'bdfbsvxcv', tag: <></> },
    { string: 'csvsu7l', tag: <></> },
    { string: '26md f', tag: <></> },
    { string: '', tag: <MdFactory role="img" aria-label="공장 아이콘" /> },
    { string: 'sdfe wgw', tag: <></> },
  ];

  const rollingItem2: { string: string; tag: JSX.Element }[] = [
    { string: '', tag: <MdFlight role="img" aria-label="비행기 아이콘" /> },
    { string: 'axdjh1', tag: <></> },
    { string: '123123123', tag: <></> },
    { string: 'alsald', tag: <></> },
    {
      string: '',
      tag: <TbWorld role="img" aria-label="세계 아이콘" />,
    },
    { string: 'bdfbsvxcv', tag: <></> },
    { string: '', tag: <MdFactory role="img" aria-label="공장 아이콘" /> },
    { string: 'csvsu7l', tag: <></> },
    { string: '26md f', tag: <></> },
    { string: 'sdfe wgw', tag: <></> },
  ];

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
          'rkskrkskrkrsm saja <br />jsgd asgd gasgd asg asdasdajsdh asjdha s'
        }
        linkBtn={{
          href: 'http://wiko.co.kr',
          title: 'view stie',
          id: 'btnWiko',
          className: style.btn_link,
        }}
        bgColor="var(--main-blue-1)"
      >
        <div className={`flex_start ${style.sub_top_inner}`}>
          <Rolling hoverStop={false} speed="120s">
            {rollingItem1.map((item, idx: number) => {
              if (item.string === '') {
                return (
                  <div
                    key={`ico_${idx}`}
                    className={`${style.rolling_item} ${style.rolling_ico}`}
                  >
                    {item.tag}
                  </div>
                );
              } else {
                return (
                  <div
                    key={`txt_${idx}`}
                    className={`${style.rolling_item} ${style.rolling_txt}`}
                  >
                    {item.string}
                  </div>
                );
              }
            })}
          </Rolling>

          <Rolling hoverStop={false} deirection="right" speed="120s">
            {rollingItem2.map((item, idx: number) => {
              if (item.string === '') {
                return (
                  <div
                    key={`ico_${idx}`}
                    className={`${style.rolling_item} ${style.rolling_ico}`}
                  >
                    {item.tag}
                  </div>
                );
              } else {
                return (
                  <div
                    key={`txt_${idx}`}
                    className={`${style.rolling_item} ${style.rolling_txt}`}
                  >
                    {item.string}
                  </div>
                );
              }
            })}
          </Rolling>
        </div>
      </SubTop>

      {/* bg_section --------------------------------- */}
      <section className={style.bg_section}></section>

      {/* explain_section --------------------------------- */}
      <section className={`section_padding ${style.explain_section}`}>
        <div className={`top_box`}>
          <h3>주조 어쩌고 저쩌고 짠</h3>
        </div>

        <div className={`wrap ${style.explain_box}`}>
          <div className={style.bg_top}>
            <span></span>
            <span></span>
          </div>

          <div className={`flex_start ${style.bg_bottom}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* skill_sections --------------------------------- */}
      <section className={`section_padding ${style.skill_section}`}>
        <div className={`top_box`}>
          <p>Technology Stack</p>
          <span>가나다 나다 가가라</span>
        </div>

        <div className={`wrap ${style.skill_box}`}>
          <div className={`flex_center ${style.skill_main}`}>사이트</div>
          <div className={`${style.skill} ${style.skill_1}`}>REACT</div>
          <div className={`${style.skill} ${style.skill_2}`}>REACT</div>
          <div className={`${style.skill} ${style.skill_3}`}>REACT</div>
          <div className={`${style.skill} ${style.skill_4}`}>REACT</div>
          <div className={`${style.skill} ${style.skill_5}`}>REACT</div>
          <div className={`${style.skill} ${style.skill_6}`}>REACT</div>
        </div>
      </section>

      {/* code_section --------------------------------- */}
      <section className={`section_padding ${style.code_section}`}>
        <div className={`top_box`}>
          <p>code</p>
          <span>코드 어쩌고 저쩌고</span>
        </div>

        <div className={`wrap flex_start ${style.code_box}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      {/* point_code_section --------------------------------- */}
      <section className={`section_padding ${style.point_code_section}`}>
        <div className={`top_box`}>
          <p>point code</p>
          <span>코드 어쩌고 저쩌고</span>
        </div>

        <div className={`wrap flex_start ${style.point_code_box}`}>
          <div></div>
          <div></div>
        </div>
      </section>

      {/* data_section --------------------------------- */}
      <section className={`section_padding ${style.data_section}`}>
        <div className={`top_box`}>
          <p>database</p>
          <span>data 어쩌고 저쩌고</span>
        </div>

        <div className={`wrap ${style.data_box}`}>
          <Rolling hoverStop={false} speed="90s">
            <div className={style.data_item}>1123</div>
            <div className={style.data_item}>sdf</div>
            <div className={style.data_item}>135346</div>
            <div className={style.data_item}>dfhg43</div>
            <div className={style.data_item}>@$&^*</div>
            <div className={style.data_item}>sdfv</div>
            <div className={style.data_item}>125ygbe</div>
            <div className={style.data_item}>1f4f</div>
            <div className={style.data_item}>gn576</div>
          </Rolling>
        </div>
      </section>

      {/* data_code_section --------------------------------- */}
      <section className={`section_padding ${style.data_code_section}`}>
        <div className={`top_box`}>
          <p>database</p>
          <span>data 어쩌고 저쩌고</span>
        </div>

        <div className={`wrap ${style.data_code_box}`}>
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
