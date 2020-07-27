import {Dispatch, SetStateAction} from "react";

export interface IHeaderMenuType {
    active: number
    setActive: Dispatch<SetStateAction<number>>
}