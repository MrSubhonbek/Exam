import React, { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './Buttons.module.css'
import UniversalButton from './UniversalButton'

interface IProps {
  setCount: Dispatch<SetStateAction<number>>
  count: number
  start: number
  end: number
  step:number
}
export default function Bottom(props: IProps) {

  const onClickUpHandler = () => {
    if (props.count < props.end) {
      props.setCount(() => props.count + props.step)
    }
  }

  const onResetHandler = () => props.setCount(props.start)
  const navigate = useNavigate();
  const styleButtonInc = (props.count >= props.end) ? (s.disable + " " + s.button) : s.button
  const styleButtonReset = (props.count === props.start) ? (s.disable + " " + s.button) : s.button

  return (
    <>
      <div className={s.buttons}>
        <UniversalButton title='Inc' onClickHandler={onClickUpHandler} style={styleButtonInc} />
        <UniversalButton title='Reset' onClickHandler={onResetHandler} style={styleButtonReset} />
      </div>
      <UniversalButton title='Setting' onClickHandler={() => navigate('/setting')} style={s.setting} />
    </>
  )
}