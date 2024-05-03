"use client";

import { useEffect, useState } from "react";
import style from "./Sitemap.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { useAutoAlert } from "@/hooks/alert/useAutoAlert";
import { menuByDepth } from "@/utils/utils";
import Btn from "../btn/Btn";

interface SitemapProps {
  // TODO: 타입설정
  menuData: any[];
  btnDirection?: "center" | "left" | "right";
  sitemapDirection?: "left" | "right" | "bottom";
  session: any;
}

/**
 * @param menuData: 메뉴 데이터
 *
 * @param btnDirection?: site map button 모양의 방향 (기본: full)
 * @returns "left" | "right";
 *
 * @param sitemapDirection?: site map 열기 방향 (기본: top)
 * @returns "left" | "right" | "bottom";
 */

export default function Sitemap({
  menuData,
  btnDirection,
  sitemapDirection,
  session,
}: SitemapProps) {
  const { setIsChange, setStatus, setText } = useAutoAlert();
  const router = useRouter();

  // 사이트맵 열기
  const [open, setOpen] = useState<boolean>(false);

  // 페이지 이동 시 사이트맵 닫기
  const pathNm = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathNm]);

  // 사이트맵 오픈 시 외부 스크롤 막기
  useEffect(() => {
    if (open) {
      document.body.style.cssText = `
      overflow: hidden`;
    } else {
      document.body.style.cssText = `
      overflow: auto`;
    }
  }, [open]);

  //
  const { depth1Menu, depth2Menu, depth3Menu } = menuByDepth(menuData);

  // pc

  // mobile
  const [depth1Seq, setDepth1Seq] = useState<number>(0);
  const [depth2Seq, setDepth2Seq] = useState<number>(0);
  useEffect(() => {
    setDepth2Seq(0);
  }, [depth1Seq]);

  const [searchKeyWord, setSearchKeyWord] = useState<string>("");

  const [baseUrl, setBaseUrl] = useState<string>("");
  useEffect(() => {
    if (window) {
      if (window.location && window.location.href) {
        if (window.location.href.includes("localhost")) {
          setBaseUrl("http://localhost:3000/lg/login");
        } else {
          setBaseUrl(
            process.env.NEXT_PUBLIC_HOST
              ? process.env.NEXT_PUBLIC_HOST + "/lg/login"
              : "http://http://wisdom.lksmart.co.kr/lg/login"
          );
        }
      }
    } else {
      setBaseUrl(
        process.env.NEXT_PUBLIC_HOST
          ? process.env.NEXT_PUBLIC_HOST + "/lg/login"
          : "http://wisdom.lksmart.co.kr/lg/login"
      );
    }
  }, []);

  return (
    <>
      {/* btn_sitemap --------------------- */}
      <div
        className={`${style.btn_sitemap} ${
          btnDirection ? style[btnDirection] : ""
        } ${open ? style.open : ""}`}
      >
        <Btn
          id={"siteMap"}
          color={"none"}
          btnSize={"xsm"}
          onClick={() => {
            setOpen(!open);
          }}
          title={""}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Btn>
      </div>

      {/* sitemap --------------------- */}
      <div
        className={`${style.sitemap} ${
          sitemapDirection ? style[sitemapDirection] : ""
        } ${open ? style.open : ""}`}
      >
        {/* 피씨 */}
        <div className={`pc ${style.sitemap_pc}`}>피씨</div>

        {/* 모바일 */}
        <div className={`mobile ${style.sitemap_mobile}`}>모바일</div>
      </div>
    </>
  );
}
