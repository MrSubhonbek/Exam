import React, { useState } from 'react'
import Bottom from './components/buttons/Buttons'
import Windows from './components/Windows'
import s from './styles/App.module.css'
export default function App() {
    const [count, setCount] = useState<number>(0)


    return (
        <div className={s.wrapper}>
            <div className={s.app}>
                <Windows count={count} />
                <Bottom
                    setCount={setCount}
                    count={count} />
            </div>
        </div>
    )
}
