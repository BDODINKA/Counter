import {v1} from "uuid";





export type btnType = {
    id:string
    title:string
}

export type btnnsPageType = {
    buttons:Array<btnType>
    buttonRestriction:Array<btnType>
}

export type RootStateType = {
    buttonData:btnnsPageType
}


export let State = {
    buttonData:{
        buttons :[
            {title: '-', id: v1()},
            {title: 'reset', id: v1()},
            {title: '+', id: v1()},
        ],
        buttonRestriction :[
            {title: 'set', id: v1()}
        ]
    }


}

