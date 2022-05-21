import React from 'react'
import s from './Windows.module.css'
interface IProps {
  count: number
}

export default function Window(props: IProps) {
  return (
    <div className={(props.count > 4) ? s.maxVal : s.window}>
      {props.count}
    </div>
  )
}
