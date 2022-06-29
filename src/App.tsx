import React, {useState} from 'react';
import {WindowCount} from "./components/window";
import WindowRestriction from "./components/windowRestriction";
import './App.css';
import {RootStateType} from "./state/state";


export type State ={
    appState:RootStateType
}


const App = (props:State) => {


    let minCount = Number(sessionStorage.getItem('minValue'))
    let maxCount = Number(sessionStorage.getItem('maxValue'))

    const [count, setCount] = useState<number>(minCount)

    const [value, setValue] = useState<string>('maxValue')
    const [value1, setValue1] = useState<string>('minValue')





    const ClickedButton = (id: string) => {
        if (id === props.appState.buttonData.buttons[0].id && count > minCount) {
            setCount(count - 1)
        }
        if (id === props.appState.buttonData.buttons[1].id) {
            setCount(0)
            sessionStorage.clear()
        }
        if (id === props.appState.buttonData.buttons[2].id && count < maxCount) {
            setCount(count + 1)
        }
        if (id === props.appState.buttonData.buttonRestriction[0].id) {
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
    const AllClearInput = (e: string) => {
        setValue(e)
    }
    const AllClearInput1 = (e: string) => {
        setValue1(e)
    }

    return (
        <div className="App">
            <WindowCount
                count={count}
                clickedButton={ClickedButton}
                buttonsData={props.appState.buttonData.buttons}
                maxCount={maxCount}
                minCount={minCount}
                value={value}
                value1={value1}
            />
            <WindowRestriction
                count={count}
                clickedButton={ClickedButton}
                buttonData={props.appState.buttonData.buttonRestriction}
                maxCount={maxCount}
                minCount={minCount}
                onChangeValue={OnchangeValue}
                onChangeValueTwo={OnchangeValueTwo}
                clearInput={AllClearInput}
                clearInput1={AllClearInput1}
                value={value}
                value1={value1}

            />

        </div>
    );
}

export default App;
