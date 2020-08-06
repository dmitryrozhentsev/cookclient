import * as React from "react";
import {SyntheticEvent} from "react";

export interface IMenuButtonType {
    icon: React.ReactElement
    active: boolean
    onClick: (e: SyntheticEvent) => void
    dataValue: number
    link: string
}