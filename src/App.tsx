import React, {useState} from 'react';
import {WindowCount} from "./components/window";
import WindowRestriction from "./components/windowRestriction";
import {v1} from "uuid";
import './App.css';


const App = () => {

    let minCount = Number(sessionStorage.getItem('minValue'))
    let maxCount = Number(sessionStorage.getItem('maxValue'))

    const [count, setCount] = useState<number>(minCount)

    const [value,setValue]=useState<string>('maxValue')
    const [value1,setValue1]=useState<string>('minValue')

    const buttonsData = [
        {title: '-', id: v1()},
        {title: 'reset', id: v1()},
        {title: '+', id: v1()},
        {title: 'set', id: v1()}
    ];


    const ClickedButton = (id: string) => {
        if (id === buttonsData[0].id && count > minCount) {
            setCount(count - 1)
        }
        if (id === buttonsData[1].id) {
            setCount(0)
            sessionStorage.clear()
        }
        if (id === buttonsData[2].id && count < maxCount) {
            setCount(count + 1)
        }
        if (id === buttonsData[3].id) {
            maxCount = (Number(sessionStorage.getItem('maxValue')))
            minCount = (Number(sessionStorage.getItem('minValue')))
            setCount(minCount)
            AllClearInput('0')
            AllClearInput1('0')
        }
    };

    const OnchangeValue = (e: string) => {
        sessionStorage.setItem('maxValue', e)
    }
    const OnchangeValueTwo = (e: string) => {
        sessionStorage.setItem('minValue', e)
    }
    const AllClearInput = (e:string)=>{
        setValue(e)
    }
    const AllClearInput1 = (e:string)=>{
        setValue1(e)
    }

    return (
        <div className="App">
            <WindowCount
                count={count}
                clickedButton={ClickedButton}
                buttonsData={buttonsData}
                maxCount={maxCount}
                minCount={minCount}
            />
            <WindowRestriction
                count={count}
                clickedButton={ClickedButton}
                buttonData={buttonsData}
                maxCount={maxCount}
                minCount={minCount}
                onChangeValue={OnchangeValue}
                onChangeValueTwo={OnchangeValueTwo}
                clearInput = {AllClearInput}
                clearInput1 = {AllClearInput1}
                value = {value}
                value1 = {value1}

            />

        </div>
    );
}

export default App;
