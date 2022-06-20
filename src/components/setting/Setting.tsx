import { useNavigate } from 'react-router-dom';
import UniversalButton from '../buttons/UniversalButton'
import s from './Setting.module.css'
export function Setting() {
  const navigate = useNavigate();
  return (
    <div className={s.setting}>
      <p>Setting</p>
      <div className={s.wrapper}>
        <div className={s.formField}>
          <input className={s.input} type="number" name="start" placeholder='Start' />
        </div>
        <div className={s.formField}>
          <input className={s.input} type="number" name="end" placeholder='End' />
        </div>
        <div className={s.formField}>
          <input className={s.input} type="number" name="step" placeholder='Step' />
        </div>
      </div>
      <UniversalButton title='Save Setting' onClickHandler={() => navigate('/')} style={s.setSetting} />
    </div>
  )
}

