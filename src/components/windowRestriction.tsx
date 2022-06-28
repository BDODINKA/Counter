import React, {ChangeEvent} from 'react';


type buttonData = {
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
            <div>Max Count
                <input
                    type="number"
                    value={props.value}
                    onChange={onChanged}
                />
            </div>
            <div>Min Count
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