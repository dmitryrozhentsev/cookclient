import * as React from 'react';
import {IconType} from "./icon.type";

export const ListIcon = (props:IconType) => {
    return (
        <svg className={`${props.className}Icon`} width={props.width} height={props.height} viewBox="0 0 64 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H8V6.16667H0V0ZM0 15.4167H8V21.5833H0V15.4167ZM0 30.8333H8V37H0V30.8333ZM64 6.16667V0H59.2H20.8H16.092V6.16667H20.8H59.2H64ZM16 15.4167H64V21.5833H16V15.4167ZM16 30.8333H64V37H16V30.8333Z" fill="#1B1B1F"/>
        </svg>
);
};






