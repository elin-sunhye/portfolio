import style from './switch.module.scss';
import {
  ChangeEventHandler,
  Ref,
  forwardRef,
  useEffect,
  useState,
} from 'react';

interface SwitchProps {
  size?: 'sm' | 'md' | 'xlg';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  // 웹접근성
  id: string;
  labelNm: string;
  value: string;
  checked: boolean;
  disabled?: boolean;
  backgroundColor?: 'blue' | 'orange';
}
/**
 * @param size?: 버튼의 사이즈 기본 lg
 *
 * @param onChange?
 *
 * @param checked: 체크여부
 * @returns boolean
 *
 * @param backgroundColor?: active 시 배경 컬러 기본 gray
 * @returns 'blue' | 'orange'
 *
 * @param disabled?
 *
 * @param checked
 *
 * * 접근성
 *
 * @param id: id
 *
 * @param labelNm:  인풋 이름 라벨
 *
 * @param value: value
 */

const Switch = forwardRef(
  (
    {
      size,
      id,
      labelNm,
      value,
      backgroundColor,
      checked,
      disabled,
      onChange,
      ...props
    }: SwitchProps & React.InputHTMLAttributes<HTMLInputElement>,
    ref: Ref<HTMLInputElement>
  ) => {
    // check
    const [check, setCheck] = useState(checked);
    useEffect(() => {
      setCheck(checked);
    }, [checked]);
    return (
      <div className={`flex_start ${style.switch_box}`}>
        <input
          ref={ref}
          type={'checkbox'}
          checked={check}
          id={id}
          className={style.input}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <label
          htmlFor={id}
          className={`${size ? style[size] : style.lg} ${
            backgroundColor ? style[backgroundColor] : ''
          }`}
          onClick={() => {
            if (!disabled) {
              setCheck(!check);
            }
          }}
        >
          <span className="screen_out">{labelNm}</span>
        </label>
      </div>
    );
  }
);

Switch.displayName = 'Input';
export default Switch as <T extends {}>(
  props: SwitchProps & {
    ref: Ref<HTMLInputElement>;
  }
) => JSX.Element;
