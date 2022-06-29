import React, {ChangeEvent} from 'react';
import {btnType} from "../state/state";
import {Buttons} from "./button";



type buttonData = {
    id: string
    title: string
};

type propsTypeButton = {
    count: number
    clickedButton: (id: string) => void
    minCount: number
    maxCount: number
    buttonData: btnType[]
    onChangeValue: (e:string) => void
    onChangeValueTwo: (e:string) => void
    clearInput:(e:string)=>void
    clearInput1:(e:string)=>void
    value:string
    value1:string
};

const WindowRestriction = (props: propsTypeButton) => {




    const onClickButtonHandler = (id: string) => {
        props.clickedButton(id)
    };

    const allButtons = props.buttonData.map(t => t.title === 'set' ?
            <button
                key={t.id}
                onClick={() => onClickButtonHandler(t.id)}
                className=
                    {`set
                ${props.minCount >= props.maxCount && t.title === 'set' && 'dis'}         
                ${props.maxCount < 0  && t.title === 'set' && 'dis'}         
                ${props.value >= props.value1 && t.title === 'set' && 'set'}         
                `}
                disabled={!Number(props.value) >= !Number(props.value1)}
                 >
                {t.title}
            </button> : '')

    const onChanged = (e: ChangeEvent<HTMLInputElement>) => {
        props.clearInput(e.currentTarget.value)
        props.onChangeValue(e.currentTarget.value)
    }
    const onChangedTwo = (e: ChangeEvent<HTMLInputElement>) => {
        props.clearInput1(e.currentTarget.value)
        props.onChangeValueTwo(e.currentTarget.value)
    }



    return (
        <div className='wrapper'>
            <div className='windowRestriction'>
                    <span>Max Count</span>
                    <input
                        type="number"
                        value={props.value}
                        onChange={onChanged}
                    />

                    <span>Min Count</span>
                    <input
                        type="number"
                        value={props.value1}
                        onChange={onChangedTwo}
                    />

            </div>

            <div className='buttons'>
                {allButtons}
            </div>
        </div>

    )
};

export default WindowRestriction;