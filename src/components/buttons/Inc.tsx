import React from 'react'
import s from './Buttons.module.css'

interface IProps {
  onClickUpHandler: ()=>void
  count:number
}
export default function Inc(props:IProps) {
  return (
    <div className={(props.count > 4) ? (s.maxVal) : s.inc}>
      <div onClick={props.onClickUpHandler}>Inc</div>
    </div>
  )
}
