import {SyntheticEvent} from "react";

export interface InputTypes {
    placeholder?: string
    className?: string
    height?: number
    value: string
    onChange: (event: SyntheticEvent<Element, Event>) => void;
}