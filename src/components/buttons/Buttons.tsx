import React, { Dispatch, SetStateAction } from 'react'
import Inc from './Inc'
import Reset from './Reset'
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

  const styleButtonInc = (props.count > 4) ? (s.maxVal) : s.inc
  const styleButtonReset = (props.count === 0) ? (s.maxVal) : s.reset

  return (
    <div className={s.buttons}>
      <Inc count={props.count} onClickUpHandler={onClickUpHandler} />
      <Reset count={props.count}  onResetHandler={onResetHandler} />

      {/* ====================== универсальная кнопка =============================== */}

      <UniversalButton title='Inc' onClickHandler={onClickUpHandler} style={styleButtonInc}/>
      <UniversalButton title='Reset' onClickHandler={onResetHandler} style={styleButtonReset}/>
    </div>
  )
}

