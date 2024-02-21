'use client';

import style from './Search.module.scss';
import { IoClose } from 'react-icons/io5';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Input from '@/component/common/input/Input';

export interface SearchProps {
  stste: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

export default function Search({ stste, setState }: SearchProps) {
  // 링크 이동떄 마다 통합검색 닫기

  // const pathNm = usePathname();

  // useEffect(() => {

  // setSiteMapOpen(false);

  // }, [pathNm]);

  return (
    <>
      <div className={`${style.search_bg} ${stste ? style.open : ''}`}>
        <div className={style.search_wrap}>
          <button
            type="button"
            onClick={() => {
              setState(false);
            }}
          >
            <IoClose role={'img'} aria-label={'닫기 아이콘'} />
          </button>

          <div className={style.search_box}>
            <h3>통합검색</h3>

            <div className={style.search_input_box}>
              <span>
                <Image
                  src={'/img/siteMap/img_search_box_bg.svg'}
                  alt={''}
                  width={10}
                  height={10}
                />
              </span>

              <Input id={''} labelNm={''} type={''} value={''} ref={null} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
