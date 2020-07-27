import * as React from 'react';
import './menuButton.css';
import { IMenuButtonType } from "./menuButton.type";

export const MenuButton = (props:IMenuButtonType)=> {
    return (
        <>
            <button className={`${props.active ? 'menu__button menu__button-active' : 'menu__button'}`} onClick={props.onClick} data-value={props.dataValue}>
                {props.icon}
                <span className={`${props.className}-text`}>{props.value}</span>
            </button>
        </>
    );
};
