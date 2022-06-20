import React, { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './Buttons.module.css'
import UniversalButton from './UniversalButton'

interface IProps {
  setCount: Dispatch<SetStateAction<number>>
  count: number
}
export default function Bottom(props: IProps) {

  const onClickUpHandler = () => {
    if (props.count < 5) {
      props.setCount(() => props.count + 1)
    }
  }

  const onResetHandler = () => props.setCount(0)
  const navigate = useNavigate();
  const styleButtonInc = (props.count > 4) ? (s.disable + " " + s.button) : s.button
  const styleButtonReset = (props.count === 0) ? (s.disable + " " + s.button) : s.button

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
/*
export function Setting() {
  const navigate = useNavigate();
  return (
    <div className={s.setting} onClick={()=>navigate('/setting')}>
      <p>Setting</p>
    </div>
  )
}
*/ 