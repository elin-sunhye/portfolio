'use client';

import Input from '@/component/common/input/Input';
import style from './deps.module.scss';
import SubTop from '@/component/common/subTop/SubTop';
import { useEffect, useState } from 'react';
import Btn from '@/component/common/btn/Btn';
import { CiSearch } from 'react-icons/ci';
import { menuType } from '@/type/menu/menuType';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface DepsProps {
  // menuData: menuType;
  menuData: any;
}

export default function Deps({ menuData }: DepsProps) {
  // pathNm
  const pathNm = usePathname();

  // menu
  const [depth3, setDeps3] = useState<menuType[]>([]);
  useEffect(() => {
    const array = menuData.filter(
      (projects: menuType) =>
        projects.url.includes(pathNm) && projects.depth === 3
    );

    setDeps3(array);
  }, [menuData]);

  // 프로젝트 검색
  const [searchPj, setSearchPj] = useState('');
  const [btnSearch, setBtnSearch] = useState<menuType[]>([]);

  return (
    <>
      {/* sub_top --------------------------------- */}
      <SubTop
        explain={'소프트웨어 개발 전문기업 주식회사 DEPS <br />2021.12 ~'}
      >
        {/* search_box */}
        <div className={`flex_between ${style.search_box}`}>
          <div className={style.inp_box}>
            <Input
              title={'프로젝트 겁색'}
              color="none"
              inpSize="xlg"
              border="br_round"
              value={searchPj}
              placeholder="프로젝트 또는 tag 검색"
              onChange={(e) => {
                const value = e.currentTarget.value;

                setSearchPj(value);
              }}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  if (searchPj.includes('#')) {
                    // # 지우기
                    const removeShap = searchPj.replaceAll('#', '');
                    // 띄어쓰기 지우기
                    const removeSpace = removeShap.replaceAll(' ', '');
                    // ,로 나누기
                    const splitComma = removeSpace.split(',');

                    const array =
                      depth3.filter((dd) =>
                        dd.tag.some((tag) => splitComma.includes(tag))
                      ).length === 0
                        ? [
                            {
                              menu: '데이터가 없습니다.',
                              seq: 0,
                              parentSeq: null,
                              url: '',
                              site: '',
                              title: '',
                              tag: [],
                              hasChild: false,
                              depth: 0,
                              sort: 0,
                            },
                          ]
                        : depth3.filter((dd) =>
                            dd.tag.some((tag) => splitComma.includes(tag))
                          );

                    setBtnSearch(array);
                  } else {
                    const array =
                      depth3.filter((search: menuType) =>
                        search.title
                          .toUpperCase()
                          .includes(searchPj.toUpperCase())
                      ).length === 0
                        ? [
                            {
                              menu: '데이터가 없습니다.',
                              seq: 0,
                              parentSeq: null,
                              url: '',
                              site: '',
                              title: '',
                              tag: [],
                              hasChild: false,
                              depth: 0,
                              sort: 0,
                            },
                          ]
                        : depth3.filter((search: menuType) =>
                            search.title
                              .toUpperCase()
                              .includes(searchPj.toUpperCase())
                          );

                    setBtnSearch(array);
                  }
                }
              }}
            />
          </div>
          <Btn
            title={'프로젝트 검색하기'}
            id={'btnSearch'}
            color="none"
            className={style.btn_search}
            onClick={() => {
              if (searchPj.includes('#')) {
                // # 지우기
                const removeShap = searchPj.replaceAll('#', '');
                // 띄어쓰기 지우기
                const removeSpace = removeShap.replaceAll(' ', '');
                // ,로 나누기
                const splitComma = removeSpace.split(',');

                const array =
                  depth3.filter((dd) =>
                    dd.tag.some((tag) => splitComma.includes(tag))
                  ).length === 0
                    ? [
                        {
                          menu: '데이터가 없습니다.',
                          seq: 0,
                          parentSeq: null,
                          url: '',
                          site: '',
                          title: '',
                          tag: [],
                          hasChild: false,
                          depth: 0,
                          sort: 0,
                        },
                      ]
                    : depth3.filter((dd) =>
                        dd.tag.some((tag) => splitComma.includes(tag))
                      );

                setBtnSearch(array);
              } else {
                const array =
                  depth3.filter((search: menuType) =>
                    search.title.toUpperCase().includes(searchPj.toUpperCase())
                  ).length === 0
                    ? [
                        {
                          menu: '데이터가 없습니다.',
                          seq: 0,
                          parentSeq: null,
                          url: '',
                          site: '',
                          title: '',
                          tag: [],
                          hasChild: false,
                          depth: 0,
                          sort: 0,
                        },
                      ]
                    : depth3.filter((search: menuType) =>
                        search.title
                          .toUpperCase()
                          .includes(searchPj.toUpperCase())
                      );

                setBtnSearch(array);
              }
            }}
          >
            <CiSearch role="img" aria-label="검색 아이콘" />
          </Btn>
        </div>
      </SubTop>

      {/* project_list --------------------------------- */}
      <div className={`wrap flex_start ${style.project_list}`}>
        {btnSearch.length === 0 ? (
          depth3.map((project: menuType) => {
            return (
              <a
                key={`${project.menu}_${project.seq}`}
                href={project.url}
                className={`flex_center ${style.project} ${
                  style[project.menu.toLowerCase()]
                }`}
              >
                <p className={style.project_name}>{project.title}</p>
                <div className={`flex_center ${style.project_tag}`}>
                  {project.tag.map((tag: string, index: number) => {
                    if (project.tag.length - 1 === index) {
                      return <span key={`${project.menu}_${tag}`}>#{tag}</span>;
                    } else {
                      return (
                        <span key={`${project.menu}_${tag}`}>#{tag},</span>
                      );
                    }
                  })}
                </div>

                <span className={`flex_center ${style.img_project}`}>
                  <Image
                    src={`/career/deps/img_${project.menu.toLowerCase()}_logo.svg`}
                    alt={`${project.menu.toLowerCase()} 로고`}
                    width={0}
                    height={0}
                  />
                </span>
              </a>
            );
          })
        ) : btnSearch[0].menu.includes('없습니다.') ? (
          <p>{btnSearch[0].menu}</p>
        ) : (
          btnSearch.map((project: menuType) => {
            return (
              <a
                key={`${project.menu}_${project.seq}`}
                href={project.url}
                className={`flex_center ${style.project} ${
                  style[project.menu.toLowerCase()]
                }`}
              >
                <p className={style.project_name}>{project.title}</p>
                <div className={`flex_center ${style.project_tag}`}>
                  {project.tag.map((tag: string, index: number) => {
                    if (project.tag.length - 1 === index) {
                      return <span key={`${project.menu}_${tag}`}>#{tag}</span>;
                    } else {
                      return (
                        <span key={`${project.menu}_${tag}`}>#{tag},</span>
                      );
                    }
                  })}
                </div>
                <span className={`flex_center ${style.img_project}`}>
                  <Image
                    src={`/career/deps/img_${project.menu.toLowerCase()}_logo.svg`}
                    alt={`${project.menu.toLowerCase()} 로고`}
                    width={0}
                    height={0}
                  />
                </span>
              </a>
            );
          })
        )}
      </div>
    </>
  );
}
