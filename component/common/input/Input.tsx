'use client';

import { ChangeEventHandler, Ref, forwardRef } from 'react';
import style from './input.module.scss';
interface InputProps {
  size?: 'sm' | 'md' | 'xlg';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  // 웹접근성
  id: string;
  labelNm: string;
  type: string;
  value: string;
}

/**
 * @size ?: 버튼의 사이즈 기본 lg
 *
 * @onChange ?:
 *
 * * 접근성
 *
 * @id : id
 *
 * @labelNm :  인풋 이름 라벨
 *
 * @type : 인풋 타입
 *
 * @value : value
 */
const Input = forwardRef(
  (
    {
      size,
      id,
      labelNm,
      type,
      value,
      onChange,
      ...props
    }: InputProps & React.InputHTMLAttributes<HTMLInputElement>,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <>
        <label htmlFor={id} className="screen_out">
          {labelNm}
        </label>
        <input
          ref={ref}
          type={type}
          value={value}
          id={id}
          className={`${style.input} ${size ? style[size] : style.lg}`}
          onChange={onChange}
          {...props}
        />
      </>
    );
  }
);

Input.displayName = 'Input';
export default Input as <T extends {}>(
  props: InputProps & {
    ref: Ref<HTMLInputElement>;
  }
) => JSX.Element;
