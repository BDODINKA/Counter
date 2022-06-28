import React from 'react';


export type buttonData = {
    id: string
    title: string
};

type propsTypeButton = {
    count: number
    clickedButton: (id: string) => void
    buttonData: buttonData[]
    minCount:number
    maxCount:number
};

export const Buttons = (props: propsTypeButton) => {

    const onClickButtonHandler = (id: string) => {
        props.clickedButton(id)
    };


    const allButtons = props.buttonData.map(t =>

        <button
            key={t.id}
            onClick={() => onClickButtonHandler(t.id)}
            className=
                {`btn 
                ${props.count === props.minCount && t.title === '-' && 'disabled'}
                ${props.count === props.maxCount && t.title === '+' && 'disabled'}
                ${t.title === 'reset' && 'reset'}
                `}
        >
            {t.title}

        </button>
    );

    return (
        <div className='buttons'>
            {allButtons}
        </div>
    );


};

