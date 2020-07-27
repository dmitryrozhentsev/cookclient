import * as React from 'react';
import {IconType} from "./icon.type";

export const AddIcon = (props:IconType) => {
    return (
        <svg className={`${props.className}Icon`} width={props.width} height={props.height} viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.9282 2V30" stroke="#192230" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.89551 16H25.1019" stroke="#192230" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};






