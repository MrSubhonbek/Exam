import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import UniversalButton from '../buttons/UniversalButton'
import s from './Setting.module.css'
interface IProps {
  start: number
  end: number
  step: number
  errorEnter: boolean
  setCount: Dispatch<SetStateAction<number>>
  onChangeStartHandler: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeEndHandler: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeStepHandler: (event: ChangeEvent<HTMLInputElement>) => void
}
export function Setting(props: IProps) {
  const navigate = useNavigate();
  const routerHandler = () => {
    props.setCount(props.start)
    navigate('/')
  };

  return (
    <div className={s.setting}>
      <p>Setting</p>
      <div className={s.wrapper}>
        <div className={s.formField}>
          <input value={props.start} className={s.input} onChange={props.onChangeStartHandler} type="number" name="start" placeholder='Start' />
          <p className={s.text}>Start</p>
        </div>
        <div className={s.formField}>
          <input value={props.end} className={s.input} onChange={props.onChangeEndHandler} type="number" name="end" placeholder='End' />
          <p className={s.text}>End</p>
        </div>
        <div className={s.formField}>
          <input value={props.step} className={s.input} onChange={props.onChangeStepHandler} type="number" name="step" placeholder='Step' />
          <p className={s.text}>Step</p>
        </div>
      </div>

      <UniversalButton title='Save Setting' onClickHandler={routerHandler} style={s.setSetting} />
      {props.errorEnter && <p className={s.error}>Incorrect data!</p>}
    </div>
  )
}

