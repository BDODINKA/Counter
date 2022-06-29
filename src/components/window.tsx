import React from 'react';
import { Buttons} from "./button";
import {btnType} from "../state/state";


type propsTypeButton = {
    count: number
    clickedButton: (id: string) => void
    minCount: number
    maxCount: number
    value:string
    value1:string
    buttonsData:btnType[]
};

export const WindowCount = (props:propsTypeButton) => {

    const first = <div className={props.count === props.maxCount || props.count === props.minCount ?
        'maxWindow' : 'window'}>{props.count}</div>

    const second = <div className={'maxWindow'}>{'Please Enter Number'}</div>


    const third = <div className={'maxWindow'}>{'Please Correct Number'}</div>

    console.log(Number(props.value1))
    return (
        <div className='wrapper'>

                {(props.minCount || props.maxCount) ?
                    (Number(props.value) <= Number(props.value1)|| props.maxCount < 0 || isNaN(Number(props.value) || props.minCount)) ?
                        third
                        :
                        first
                    :
                    (Number(props.value) === Number(props.value1)) ?
                        third
                        :
                        second

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