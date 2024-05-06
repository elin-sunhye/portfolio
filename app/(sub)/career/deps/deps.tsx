'use client';

import Input from '@/component/common/input/Input';
import style from './deps.module.scss';
import SubTop from '@/component/common/subTop/SubTop';
import { useEffect, useState } from 'react';
import Btn from '@/component/common/btn/Btn';
import { CiSearch } from 'react-icons/ci';
import { menuType } from '@/type/menu/menuType';
import { usePathname } from 'next/navigation';

interface DepsProps {
  // menuData: menuType;
  menuData: any;
}

export default function Deps({ menuData }: DepsProps) {
  // pathNm
  const pathNm = usePathname();

  // menu
  const [deps3, setDeps3] = useState<menuType[]>([]);
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
              onChange={(e) => {
                const value = e.currentTarget.value;

                setSearchPj(value);
              }}
              onKeyUp={(e) => {
                console.log(e.key);
                if (e.key === 'Enter') {
                  const array =
                    deps3.filter((search: menuType) =>
                      search.menu.includes(searchPj)
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
                      : deps3.filter((search: menuType) =>
                          search.menu.includes(searchPj)
                        );

                  setBtnSearch(array);
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
              const array =
                deps3.filter((search: menuType) =>
                  search.menu.includes(searchPj)
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
                  : deps3.filter((search: menuType) =>
                      search.menu.includes(searchPj)
                    );

              setBtnSearch(array);
            }}
          >
            <CiSearch role="img" aria-label="검색 아이콘" />
          </Btn>
        </div>
      </SubTop>

      {/* project_list --------------------------------- */}
      <div className={`wrap flex_start ${style.project_list}`}>
        {btnSearch.length === 0 ? (
          deps3.map((project: menuType) => {
            return (
              <a
                key={`${project.menu}_${project.seq}`}
                href={project.url}
                className={`flex_center ${style.project}`}
              >
                <span className={style.img_project}></span>
                <p className={style.project_name}>{project.menu}</p>
                <div className={style.project_tag}>
                  {project.tag.map((tag: string, index: number) => {
                    if (project.tag.length - 1 === index) {
                      return <span key={`${project.menu}_${tag}`}>#{tag}</span>;
                    } else {
                      return (
                        <span key={`${project.menu}_${tag}`}>#{tag}, </span>
                      );
                    }
                  })}
                </div>
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
                className={`flex_center ${style.project}`}
              >
                <span className={style.img_project}></span>
                <p className={style.project_name}>{project.menu}</p>
                <div className={style.project_tag}>
                  {project.tag.map((tag: string, index: number) => {
                    if (project.tag.length - 1 === index) {
                      return <span key={`${project.menu}_${tag}`}>#{tag}</span>;
                    } else {
                      return (
                        <span key={`${project.menu}_${tag}`}>#{tag}, </span>
                      );
                    }
                  })}
                </div>
              </a>
            );
          })
        )}
      </div>
    </>
  );
}
