import * as React from 'react';
import {IconType} from "./icon.type";

export const TimeIcon = (props:IconType) => {
    return (
        <svg className={props.className ? `${props.className}Icon` : ''} width={props.width} height={props.height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 27C21.1797 27 27 21.1797 27 14C27 6.8203 21.1797 1 14 1C6.8203 1 1 6.8203 1 14C1 21.1797 6.8203 27 14 27Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 6.20001V14L19.2 16.6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
);
};










