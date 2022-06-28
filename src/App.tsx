import React, {useState} from 'react';
import {WindowCount} from "./components/window";
import WindowRestriction from "./components/windowRestriction";
import {v1} from "uuid";
import './App.css';

const App = () => {




    const [value,setValue] = useState<number>(0)
    const [value1,setValue1] = useState<number>(0)

    const [maxCount,setMaxCount] = useState<number>(value)
    const [minCount,setMinCount] = useState<number>(value1)

    const [count, setCount] = useState<number>(minCount);








    const buttonsData = [
        {title: '-', id: v1()},
        {title: 'reset', id: v1()},
        {title: '+', id: v1()},
        {title: 'set', id: v1()}
    ];


    const ClickedButton = (id: string) => {
        if (id === buttonsData[0].id && count > minCount) {
            setCount(count-1)
        }
        if (id === buttonsData[1].id) {
            setCount(0)
        }
        if (id === buttonsData[2].id && count < maxCount) {
            setCount(count+1)
        }
        if (id === buttonsData[3].id ){
            setMinCount(value1)
            setMaxCount(value)
            setCount(minCount)
        }
    };


    const OnchangeValue = (e:string)=>{
        setValue(Number(e))
    }
    const OnchangeValueTwo = (e:string)=>{
        setValue1(Number(e))
    }


    console.log(count)
    console.log(value1)
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
                onChangeValue = {OnchangeValue}
                onChangeValueTwo = {OnchangeValueTwo}

            />

        </div>
    );
}

export default App;
