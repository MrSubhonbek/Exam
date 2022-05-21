import s from './Buttons.module.css'


interface IProps {
  onResetHandler: ()=>void
  count:number
}

export default function Reset(props:IProps) {
  return (
    <div className={(props.count === 0) ? (s.maxVal) : s.reset}>
      <div onClick={props.onResetHandler}>Reset</div>
    </div>
  )
}
