import * as React from "react";
import {SyntheticEvent} from "react";

export interface IMenuButtonType {
    icon: React.ReactElement
    active: boolean
    dataValue: number
    link: string
    onClick: (e: SyntheticEvent) => void
}