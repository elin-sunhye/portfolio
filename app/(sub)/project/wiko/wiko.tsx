"use client";

import style from "./wiko.module.scss";
import SubTop from "@/component/common/subTop/SubTop";
import Rolling from "@/component/common/rolling/Rolling";
import { MdFactory, MdFlight } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

// tree gragh
import { Tree } from "react-tree-graph";
import "react-tree-graph/dist/style.css";

export default function Wiko() {
  // sub_top ---------------------------------
  const rollingItem1: { string: string; tag: JSX.Element }[] = [
    { string: "123123123", tag: <></> },
    { string: "", tag: <MdFlight role="img" aria-label="비행기 아이콘" /> },
    { string: "axdjh1", tag: <></> },
    { string: "alsald", tag: <></> },
    {
      string: "",
      tag: <TbWorld role="img" aria-label="세계 아이콘" />,
    },
    { string: "bdfbsvxcv", tag: <></> },
    { string: "csvsu7l", tag: <></> },
    { string: "26md f", tag: <></> },
    { string: "", tag: <MdFactory role="img" aria-label="공장 아이콘" /> },
    { string: "sdfe wgw", tag: <></> },
  ];

  const rollingItem2: { string: string; tag: JSX.Element }[] = [
    { string: "", tag: <MdFlight role="img" aria-label="비행기 아이콘" /> },
    { string: "axdjh1", tag: <></> },
    { string: "123123123", tag: <></> },
    { string: "alsald", tag: <></> },
    {
      string: "",
      tag: <TbWorld role="img" aria-label="세계 아이콘" />,
    },
    { string: "bdfbsvxcv", tag: <></> },
    { string: "", tag: <MdFactory role="img" aria-label="공장 아이콘" /> },
    { string: "csvsu7l", tag: <></> },
    { string: "26md f", tag: <></> },
    { string: "sdfe wgw", tag: <></> },
  ];

  // point_section ---------------------------------

  return (
    <>
      {/* sub_top --------------------------------- */}
      <SubTop
        explain={
          "rkskrkskrkrsm saja <br />jsgd asgd gasgd asg asdasdajsdh asjdha s"
        }
        linkBtn={{
          href: "http://wiko.co.kr",
          title: "사이트",
          id: "btnWiko",
          className: style.btn_link,
        }}
        bgColor="var(--main-blue-1)"
      >
        <div className={`flex_start ${style.sub_top_inner}`}>
          <Rolling hoverStop={false} speed="120s">
            {rollingItem1.map((item, idx: number) => {
              if (item.string === "") {
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
              if (item.string === "") {
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
        <div className={style.top_box}>
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

      {/* point_section --------------------------------- */}
      <section className={`section_padding ${style.point_section}`}>
        <div className={style.top_box}>
          <p>code point</p>
          <span>가나다 나다 가가라</span>
        </div>

        <div className={style.point_box}>
          <Tree
            data={{
              name: "Parent",
              children: [
                {
                  name: "Child One",
                },
                {
                  name: "Child Two",
                },
              ],
            }}
            height={400}
            width={400}
          />
        </div>
      </section>
    </>
  );
}
