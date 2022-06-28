import React from 'react';
import {buttonData, Buttons} from "./button";


export type AllPropsType = {
    clickedButton: (id: string) => void
    count: number
    buttonsData: buttonData[]
    maxCount: number
    minCount: number

};


export const WindowCount = (props: AllPropsType) => {

    return (
        <div className='wrapper'>
            <div className={props.count === props.maxCount ? 'maxWindow' : 'window'}>{props.count}</div>
            <Buttons
                count={props.count}
                clickedButton={props.clickedButton}
                buttonData={props.buttonsData}
                maxCount={props.maxCount}
                minCount={props.minCount}
            />

        </div>
    )
};