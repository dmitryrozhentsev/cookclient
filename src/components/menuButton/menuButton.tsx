import * as React from 'react';
import './menuButton.css';
import { IMenuButtonType } from "./menuButton.type";
import {Link} from "react-router-dom";

export const MenuButton = (props:IMenuButtonType)=> {
    return (
        <>
            <Link to={props.link} className={`${props.active ? 'menu__button menu__button-active' : 'menu__button'}`} onClick={props.onClick} data-value={props.dataValue}>
                {props.icon}
            </Link>
        </>
    );
};
