import React, {ChangeEvent, useState} from 'react';


export type buttonData = {
    id: string
    title: string
};

type propsTypeButton = {
    count: number
    clickedButton: (id: string) => void
    minCount: number
    maxCount: number
    buttonData: buttonData[]
    onChangeValue: (e:string) => void
    onChangeValueTwo: (e:string) => void
};

const WindowRestriction = (props: propsTypeButton) => {

    const [value,setValue]=useState<string>('0')
    const [value1,setValue1]=useState<string>('0')


    const onClickButtonHandler = (id: string) => {
        props.clickedButton(id)
    };

    const allButtons = props.buttonData.map(t => t.title === 'set' ?
            <button
                key={t.id}
                onClick={() => onClickButtonHandler(t.id)}
                 >
                {t.title}
            </button> : '')

    const onChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        props.onChangeValue(e.currentTarget.value)
    }
    const onChangedTwo = (e: ChangeEvent<HTMLInputElement>) => {
        setValue1(e.currentTarget.value)
        props.onChangeValueTwo(e.currentTarget.value)
    }


    return (
        <div className='wrapper'>
            <div>Max Count
                <input
                    type="number"
                    value={value}
                    onChange={onChanged}
                />
            </div>
            <div>Min Count
                <input
                    type="number"
                    value={value1}
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