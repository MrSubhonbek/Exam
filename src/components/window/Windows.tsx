import s from './Windows.module.css'
interface IProps {
  count: number
  end: number
}

export default function Window(props: IProps) {
  return (
    <div className={(props.count >= props.end) ? s.maxVal : s.window}>
      <p>{props.count}</p>
    </div>
  )
}
