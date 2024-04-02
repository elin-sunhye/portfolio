import style from './dialog.module.scss';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Btn } from '../btn/Btn';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface DialogProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  width?: string;
  title: string;
  children: React.ReactNode | React.ReactNode[];
}
export default function Dialog({
  state,
  setState,
  width,
  title,
  children,
}: DialogProps) {
  // 오픈 시 외부 스크롤 막기
  useEffect(() => {
    if (state) {
      document.body.style.cssText = `overflow-y: hidden`;
    } else {
      document.body.style.cssText = `overflow-y: auto`;
    }
  }, [state]);

  return (
    // 이벤트버블링을 막기위해서 배경과 모달의 분리
    <>
      <div
        className={`flex_center ${style.dialog_bg}`}
        style={{ display: state ? 'flex' : 'none' }}
        onClick={() => {
          setState(false);
        }}
      ></div>

      <div
        className={style.dialog}
        style={{
          display: state ? 'block' : 'none',
          width: width ? width : '50vw',
        }}
      >
        <Btn
          className={style.btn_dialog_close}
          type={'button'}
          title={''}
          id={''}
          btnType={'ico'}
          ico={
            <IoIosCloseCircleOutline role={'img'} aria-label={'엑스 아이콘'} />
          }
          hover={false}
          onClick={() => {
            setState(false);
          }}
        />
        <p className={style.title}>{title}</p>
        <div className={style.cont}>{children}</div>
      </div>
    </>
  );
}
