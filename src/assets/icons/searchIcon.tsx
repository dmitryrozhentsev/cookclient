import * as React from 'react';
import {IconType} from "./icon.type";

export const SearchIcon = (props:IconType) => {
    return (
        <svg className={`${props.className}Icon`} width={props.width} height={props.height} viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6103 30.2533C20.1505 30.2533 25.4524 23.9837 25.4524 16.2496C25.4524 8.51559 20.1505 2.24591 13.6103 2.24591C7.07017 2.24591 1.76831 8.51559 1.76831 16.2496C1.76831 23.9837 7.07017 30.2533 13.6103 30.2533Z" stroke="#192230" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.4127 33.7541L21.9736 26.1396" stroke="#192230" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};






