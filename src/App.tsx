import { ChangeEvent, useState } from 'react'
import Bottom from './components/buttons/Buttons'
import { Setting } from './components/setting/Setting'
import Windows from './components/window/Windows'
import { Route, Routes } from "react-router-dom";
import s from './styles/App.module.css'
export default function App() {
    const [count, setCount] = useState<number>(0)
    const [start, setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(5);
    const [step, setStep] = useState<number>(1);
    const [errorEnter, setErrorEnter] = useState(false)

    const onChangeStartHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(event.currentTarget.value));
        validDataStart(Number(event.currentTarget.value));
    }
    const onChangeEndHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnd(Number(event.currentTarget.value));
        validDataEnd(Number(event.currentTarget.value));
    }
    const onChangeStepHandler = (event: ChangeEvent<HTMLInputElement>) => setStep(Number(event.currentTarget.value))

    function validDataStart(count: number) {
        (count >= end || count < 0)
            ? setErrorEnter(true)
            : setErrorEnter(false);
    }
    function validDataEnd(count: number) {
        (count <= start || count < 0)
            ? setErrorEnter(true)
            : setErrorEnter(false);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.app}>
                <Routes>
                    <Route path="/" element={<>
                        <Windows count={count} end={end} />
                        <Bottom setCount={setCount} count={count} end={end} start={start} step={step} />
                    </>} />
                    <Route path="/setting"
                        element={
                            <Setting
                                end={end}
                                errorEnter={errorEnter}
                                start={start}
                                step={step}
                                setCount = {setCount}
                                onChangeEndHandler={onChangeEndHandler}
                                onChangeStartHandler={onChangeStartHandler}
                                onChangeStepHandler={onChangeStepHandler}
                            />
                        }
                    />
                </Routes>
            </div>
        </div>
    )
}
