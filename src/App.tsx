import { ChangeEvent, useState } from 'react'
import Bottom from './components/buttons/Buttons'
import { Setting } from './components/setting/Setting'
import Windows from './components/window/Windows'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import s from './styles/App.module.css'
export default function App() {
    const [count, setCount] = useState<number>(0)
    const [start, setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(5);
    const [step, setStep] = useState<number>(1);

    const onChangeStartHandler = (event: ChangeEvent<HTMLInputElement>) => setStart(Number(event.currentTarget.value))
    const onChangeEndHandler = (event: ChangeEvent<HTMLInputElement>) => setEnd(Number(event.currentTarget.value))
    const onChangeStepHandler = (event: ChangeEvent<HTMLInputElement>) => setStep(Number(event.currentTarget.value))


    return (
        <div className={s.wrapper}>
            <div className={s.app}>
                <Routes>
                    <Route path="/" element={<>
                        <Windows count={count} end={end}/>
                        <Bottom setCount={setCount} count={count} end={end} start = {start} step={step} />
                    </>} />
                    <Route path="/setting"
                        element={
                            <Setting
                                end={end}
                                start={start}
                                step={step}
                                onChangeEndHandler={onChangeEndHandler}
                                onChangeStartHandler={onChangeStartHandler}
                                onChangeStepHandler={onChangeStepHandler}
                            />}
                    />
                </Routes>
            </div>
        </div>
    )
}
