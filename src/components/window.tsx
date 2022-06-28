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

            {(props.count !== 0 )?
                <div className={props.count === props.maxCount || props.count === props.minCount ? 'maxWindow' : 'window'}>{props.count}</div>
                :
                <div className={'maxWindow'}>{'please enter number'}</div>

            }




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