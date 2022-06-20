import { useState } from 'react'
import Bottom from './components/buttons/Buttons'
import { Setting } from './components/setting/Setting'
import Windows from './components/window/Windows'
import {BrowserRouter,Route, Routes} from "react-router-dom";
import s from './styles/App.module.css'
export default function App() {
    const [count, setCount] = useState<number>(0)


    return (
        <div className={s.wrapper}>
            <div className={s.app}>
                <Routes>
                    <Route path="/" element={<>
                    <Windows count={count} />
                    <Bottom setCount={setCount} count={count} />
                </>} />
                    <Route path="/setting" element={<Setting/>} />
                </Routes>              
            </div>
        </div>
    )
}
