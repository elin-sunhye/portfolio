"use client";

import Input from "@/component/common/input/Input";
import style from "./deps.module.scss";
import SubTop from "@/component/common/subTop/SubTop";
import { useState } from "react";
import Btn from "@/component/common/btn/Btn";
import { CiSearch } from "react-icons/ci";

export default function DepsPage() {
  // 프로젝트 검색
  const [searchPj, setSearchPj] = useState("");
  return (
    <>
      {/* sub_top --------------------------------- */}
      <SubTop
        explain={"소프트웨어 개발 전문기업 주식회사 DEPS <br />2021.12 ~"}
      >
        {/* search_box */}
        <div className={`flex_between ${style.search_box}`}>
          <div className={style.inp_box}>
            <Input
              title={"프로젝트 겁색"}
              color="none"
              inpSize="xlg"
              border="br_round"
              value={searchPj}
              onChange={(e) => {
                const value = e.currentTarget.value;

                setSearchPj(value);
              }}
            />
          </div>
          <Btn
            title={"프로젝트 검색하기"}
            id={"btnSearch"}
            color="none"
            className={style.btn_search}
          >
            <CiSearch role="img" aria-label="검색 아이콘" />
          </Btn>
        </div>
      </SubTop>
    </>
  );
}
