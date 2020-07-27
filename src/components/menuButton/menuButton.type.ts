import * as React from "react";
import {SyntheticEvent} from "react";

export interface IMenuButtonType {
    value: string
    className: string
    icon: React.ReactElement
    active: boolean
    onClick: (e: SyntheticEvent) => void
    dataValue: number
}