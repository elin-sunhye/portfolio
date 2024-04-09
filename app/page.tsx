/* eslint-disable @next/next/no-img-element */
"use client";

import style from "./page.module.scss";
import { Btn } from "@/component/common/btn/Btn";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { menuType } from "@/type/menu/menuType";
import Rolling from "@/component/common/rolling/Rolling";
import Link from "next/link";
import { FiDownloadCloud, FiExternalLink } from "react-icons/fi";

// dummyData ---------------------------------
import menuData from "@/dummyData/menu.json";
import Dialog from "@/component/common/dialog/Dialog";
import { useRouter } from "next/navigation";

export default function Home() {
  // ---------------------------------
  const router = useRouter();

  // 브라우저 크기 ---------------------------------
  const [browserHeight, setBrowserHeight] = useState<number>(0);

  // scroll ---------------------------------
  const scrollTxtRef = useRef<HTMLSpanElement>(null);
  const scrollWikoUpRef = useRef<HTMLDivElement>(null);
  const scrollWikoDownRef = useRef<HTMLDivElement>(null);
  const scroll2UpRef = useRef<HTMLDivElement>(null);
  const scroll2DownRef = useRef<HTMLDivElement>(null);
  const scroll3UpRef = useRef<HTMLDivElement>(null);
  const scroll3DownRef = useRef<HTMLDivElement>(null);

  // 스크롤 시 애니메이션
  const [viewMoreBg, setViewMoreBg] = useState<boolean>(false);

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

        // scrollTxt
        if (
          scrollTxtRef.current !== null &&
          window.scrollY >= 10
          // window.innerHeight <= window.scrollY
        ) {
          if (currentScroll > lastScroll) {
            scrollTxtRef.current.style.setProperty(
              "transform",
              `translateX(-${String(
                window.scrollY + 1
                // window.scrollY - window.innerHeight + 1
              )}px)`
            );
          } else {
            scrollTxtRef.current.style.setProperty(
              "transform",
              `translateX(-${String(
                window.scrollY - 1
                // window.scrollY - window.innerHeight - 1
              )}px)`
            );
          }
          lastScroll = currentScroll;
        }

        // scroll wiko
        if (
          scrollWikoUpRef.current !== null &&
          scrollWikoDownRef.current !== null
        ) {
          if (window.scrollY >= window.innerHeight * 2.5) {
            let num1 = String(
              window.scrollY - window.innerHeight * 2.5 + 0.1
            ).replaceAll(".", "");

            let num2 = String(
              window.scrollY - window.innerHeight * 2.5 - 0.1
            ).replaceAll(".", "");

            let plus =
              num1.length == 1
                ? `0.00${num1}`
                : num1.length == 2
                ? `0.0${num1}`
                : num1.length == 3
                ? `0.${num1}`
                : num1.length == 4
                ? num1.slice(0, 1) + "." + num1.slice(1)
                : num1.slice(0, 2) + "." + num1.slice(2);

            let minus =
              num2.length == 1
                ? `0.00${num2}`
                : num2.length == 2
                ? `0.0${num2}`
                : num2.length == 3
                ? `0.${num2}`
                : num2.length == 4
                ? num2.slice(0, 1) + "." + num2.slice(1)
                : num2.slice(0, 2) + "." + num2.slice(2);

            if (currentScroll > lastScroll) {
              scrollWikoUpRef.current.style.setProperty(
                "transform",
                `translateY(-${plus}%)`
              );
              scrollWikoDownRef.current.style.setProperty(
                "transform",
                `translateY(${minus}%)`
              );
            } else {
              scrollWikoUpRef.current.style.setProperty(
                "transform",
                `translateY(-${minus}%)`
              );

              scrollWikoDownRef.current.style.setProperty(
                "transform",
                `translateY(${plus}%)`
              );
            }
            lastScroll = currentScroll;
          }
        }

        // scroll 2
        if (scroll2UpRef.current !== null && scroll2DownRef.current !== null) {
          if (window.scrollY >= window.innerHeight * 3.5) {
            let num1 = String(
              window.scrollY - window.innerHeight * 3.5 + 0.1
            ).replaceAll(".", "");

            let num2 = String(
              window.scrollY - window.innerHeight * 3.5 - 0.1
            ).replaceAll(".", "");

            let plus =
              num1.length == 1
                ? `0.00${num1}`
                : num1.length == 2
                ? `0.0${num1}`
                : num1.length == 3
                ? `0.${num1}`
                : num1.length == 4
                ? num1.slice(0, 1) + "." + num1.slice(1)
                : num1.slice(0, 2) + "." + num1.slice(2);

            let minus =
              num2.length == 1
                ? `0.00${num2}`
                : num2.length == 2
                ? `0.0${num2}`
                : num2.length == 3
                ? `0.${num2}`
                : num2.length == 4
                ? num2.slice(0, 1) + "." + num2.slice(1)
                : num2.slice(0, 2) + "." + num2.slice(2);

            if (currentScroll > lastScroll) {
              scroll2UpRef.current.style.setProperty(
                "transform",
                `translateY(-${plus}%)`
              );
              scroll2DownRef.current.style.setProperty(
                "transform",
                `translateY(${minus}%)`
              );
            } else {
              scroll2UpRef.current.style.setProperty(
                "transform",
                `translateY(-${minus}%)`
              );

              scroll2DownRef.current.style.setProperty(
                "transform",
                `translateY(${plus}%)`
              );
            }
            lastScroll = currentScroll;
          }
        }

        // scroll 3
        if (scroll3UpRef.current !== null && scroll3DownRef.current !== null) {
          if (window.scrollY >= window.innerHeight * 4.5) {
            let num1 = String(
              window.scrollY - window.innerHeight * 4.5 + 0.1
            ).replaceAll(".", "");

            let num2 = String(
              window.scrollY - window.innerHeight * 4.5 - 0.1
            ).replaceAll(".", "");

            let plus =
              num1.length == 1
                ? `0.00${num1}`
                : num1.length == 2
                ? `0.0${num1}`
                : num1.length == 3
                ? `0.${num1}`
                : num1.length == 4
                ? num1.slice(0, 1) + "." + num1.slice(1)
                : num1.slice(0, 2) + "." + num1.slice(2);

            let minus =
              num2.length == 1
                ? `0.00${num2}`
                : num2.length == 2
                ? `0.0${num2}`
                : num2.length == 3
                ? `0.${num2}`
                : num2.length == 4
                ? num2.slice(0, 1) + "." + num2.slice(1)
                : num2.slice(0, 2) + "." + num2.slice(2);

            if (currentScroll > lastScroll) {
              scroll3UpRef.current.style.setProperty(
                "transform",
                `translateY(-${plus}%)`
              );
              scroll3DownRef.current.style.setProperty(
                "transform",
                `translateY(${minus}%)`
              );
            } else {
              scroll3UpRef.current.style.setProperty(
                "transform",
                `translateY(-${minus}%)`
              );

              scroll3DownRef.current.style.setProperty(
                "transform",
                `translateY(${plus}%)`
              );
            }
            lastScroll = currentScroll;
          }
        }

        // viwe_more_bg
        if (window.scrollY >= window.innerHeight * 6.5) {
          setViewMoreBg(true);
        } else {
          setViewMoreBg(false);
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
          (mn.url.includes("/career/orange/") ||
            mn.url.includes("/career/deps/")) &&
          mn.depth === 3
      )
    );
    setRollingDesignItems(
      menuData.filter(
        (mn) => mn.url.includes("/career/lapcos/") && mn.depth === 3
      )
    );
  }, [menuData]);

  // info section ---------------------------------
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
          <span></span>

          <div className={style.main_visual}></div>
        </div>

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

      {/* scroll_txt_section --------------------------------- */}
      <section className={style.scroll_txt_section}>
        <span className={style.scroll_txt} ref={scrollTxtRef}>
          THE PARADISE IS WHERE I AM THE PARADISE IS WHERE I AM
        </span>
      </section>

      {/* introduce_section --------------------------------- */}
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
            onClick={() => {
              setContactMeDialog(true);
            }}
          />
        </div>

        {/* dialog */}
        <Dialog
          state={contactMeDialog}
          setState={setContactMeDialog}
          title={"contact me"}
          width={"50rem"}
        >
          <>
            <p>
              연락처 : <span>010-2162-0043</span>
            </p>
            <br />
            <p>
              이메일 : <span>tjsgp1041@naver.com</span>
            </p>
          </>
        </Dialog>

        <div className={`wrap flex_start ${style.skill_box}`}>
          <div className={`flex_start ${style.bg_circle}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

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
              <img src="/main/skill/img_recoil.svg" alt="react" />
            </span>
            <span>
              <img src="/main/skill/img_js.svg" alt="react" />
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

        <div className={style.bg_triangle}></div>
      </section>

      {/* career_section --------------------------------- */}
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
                    itemInd % 2 === 0 ? style.polygon : ""
                  } ${itemInd % 3 === 0 ? style.circle : ""} `}
                >
                  <p>개발 사진</p>

                  <div
                    className={`flex_center ${
                      style.career_rolling_hover_card
                    } ${itemInd % 2 == 0 ? style.red : ""} ${
                      itemInd % 4 == 0 ? style.blue : ""
                    } ${itemInd % 5 == 0 ? style.black : ""}`}
                  >
                    <span>
                      {menuData.find((seq) => seq.seq === item.parentSeq)?.menu}
                    </span>
                    <p>{item.menu}</p>
                    <span>
                      {item.menu === "STX"
                        ? "2022.02 ~ 2022.08"
                        : item.menu === "HOMEPAGE"
                        ? "2022.04 ~ 2022.06"
                        : item.menu === "3DSANDAN"
                        ? "2022.08 ~ 2022.10"
                        : item.menu === "GAPT"
                        ? "2022.10 ~ 2023.03"
                        : item.menu === "GNTP"
                        ? "2023.01 ~ 2023.07"
                        : item.menu === "GNCAR"
                        ? "2023.08 ~ 2024.02"
                        : "2024.01 ~ 2024.03"}
                    </span>
                  </div>
                </a>
              );
            })}
          </Rolling>
          <Rolling deirection={"right"}>
            {rollingDesignITems.map((item, itemInd) => {
              return (
                <a
                  key={`rolling_design_item_${item.seq}`}
                  href={item.url}
                  className={`flex_center ${style.career_slides} ${
                    itemInd % 2 === 0 ? style.polygon : ""
                  } ${itemInd % 3 === 0 ? style.circle : ""} `}
                >
                  <p>디자인 사진</p>

                  <div
                    className={`flex_center ${
                      style.career_rolling_hover_card
                    } ${itemInd % 2 == 0 ? style.red : ""} ${
                      itemInd % 4 == 0 ? style.blue : ""
                    } ${itemInd % 5 == 0 ? style.black : ""}`}
                  >
                    <span>
                      {menuData.find((seq) => seq.seq === item.parentSeq)?.menu}
                    </span>
                    <p>{item.menu}</p>
                    <span>
                      {item.menu === "CATALOG"
                        ? "2019.02 ~ 2019.04"
                        : item.menu === "TRADESHOW"
                        ? "2019.04 ~ 2019.10"
                        : "2024.09 ~ 2024.11"}
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
                    itemInd % 2 === 0 ? style.polygon : ""
                  } ${itemInd % 3 === 0 ? style.circle : ""} `}
                >
                  <p>디자인 사진</p>

                  <div
                    className={`flex_center ${
                      style.career_rolling_hover_card
                    } ${itemInd % 2 == 0 ? style.red : ""} ${
                      itemInd % 4 == 0 ? style.blue : ""
                    } ${itemInd % 5 == 0 ? style.black : ""}`}
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

      {/* project_wiko_section --------------------------------- */}
      <section className={`${style.project_wiko_section}`}>
        <div className={`wrap flex_between ${style.wrap}`}>
          <div className={style.top_box}>
            <h3>WIKO</h3>
            <p>가나다라 가나 가나다라가나다라 가나 가나다라</p>
            <span>가나다 나다 가가라</span>
            <Btn
              type={"button"}
              title={"view detail"}
              id={"viewDetail"}
              btnType={"text"}
              hover={false}
              className={style.btn_go_page}
              btnBg="var(--black)"
              btnColor="var(--white)"
              onClick={() => {
                router.push(`/project/wiko`);
              }}
            />
          </div>
          <div className={`flex_end ${style.scroll_box}`}>
            <div
              ref={scrollWikoUpRef}
              className={`flex_center ${style.scroll_up}`}
            >
              <span>asd</span>
              <span>123</span>
              <span>123</span>
              <span>dsfsad</span>
              <span>123</span>
            </div>
            <div
              ref={scrollWikoDownRef}
              className={`flex_center ${style.scroll_down}`}
            >
              <span>asd</span>
              <span>123</span>
              <span>123</span>
              <div className="flex_between">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>123</span>
            </div>
          </div>
        </div>
      </section>

      {/* project_2_section --------------------------------- */}
      <section className={`${style.project_2_section}`}>
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
          <div className={style.top_box}>
            <h3>WIKO</h3>
            <p>가나다라 가나 가나다라가나다라 가나 가나다라</p>
            <span>가나다 나다 가가라</span>
            <Btn
              type={"button"}
              title={"view detail"}
              id={"viewDetail"}
              btnType={"text"}
              hover={false}
              className={style.btn_go_page}
              btnBg="var(--black)"
              btnColor="var(--white)"
            />
          </div>
        </div>
      </section>

      {/* project_3_section --------------------------------- */}
      <section className={`${style.project_3_section}`}>
        <div className={`wrap flex_between ${style.wrap}`}>
          <div className={style.top_box}>
            <h3>WIKO</h3>
            <p>가나다라 가나 가나다라가나다라 가나 가나다라</p>
            <span>가나다 나다 가가라</span>
            <Btn
              type={"button"}
              title={"view detail"}
              id={"viewDetail"}
              btnType={"text"}
              hover={false}
              className={style.btn_go_page}
              btnBg="var(--black)"
              btnColor="var(--white)"
            />
          </div>
          <div className={`flex_end ${style.scroll_box}`}>
            <div
              ref={scroll3UpRef}
              className={`flex_center ${style.scroll_up}`}
            >
              <span>asd</span>
              <span>123</span>
              <span>123</span>
              <span>dsfsad</span>
              <span>123</span>
            </div>
            <div
              ref={scroll3DownRef}
              className={`flex_center ${style.scroll_down}`}
            >
              <span>asd</span>
              <span>123</span>
              <span>123</span>
              <div className="flex_start">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>123</span>
            </div>
          </div>
        </div>
      </section>

      {/* support_section --------------------------------- */}
      <section className={`section_padding ${style.support_section}`}>
        <div className={style.top_box}>
          <h3>SUPPORT +</h3>
          <p>가나다라 가나 가나다라가나다라 가나 가나다라</p>
          <span>가나다 나다 가가라</span>
        </div>

        <div className={`wrap flex_center ${style.support_box}`}>
          <Link href="/" download={""} className={"flex_center"}>
            자기 소개서 다운
            <FiDownloadCloud role="img" aria-label="다운로드 아이콘" />
          </Link>
          <Link
            href={"https://github.com/elin-sunhye"}
            target="_blank"
            className={"flex_center"}
          >
            github 바로 가기
            <FiExternalLink role="img" aria-label="새창 아이콘" />
          </Link>
        </div>
      </section>

      {/* view_more_section --------------------------------- */}
      <section
        className={`section_padding flex_center ${style.view_more_section} ${
          viewMoreBg ? style.scroll : ""
        }`}
      >
        <div className={style.top_box}>
          <h3>12312312323123</h3>
          <p>가나다라 가나 가나다라가나다라 가나 가나다라</p>
          <span>가나다 나다 가가라</span>
          {/* <Btn
            type={'button'}
            title={'contact me'}
            id={'contactMe'}
            btnType={'text'}
            hover={false}
            className={style.btn_go_page}
            btnBg="var(--black)"
            btnColor="var(--white)"
          /> */}
        </div>
      </section>
    </main>
  );
}
