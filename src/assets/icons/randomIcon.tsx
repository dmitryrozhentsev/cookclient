import * as React from 'react';
import {IconType} from "./icon.type";

export const RandomIcon = (props:IconType) => {
    return (
        <svg className={`${props.className}Icon`} width={props.width} height={props.height} viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 0C5.1589 0 0 4.34581 0 9.6875H4.6C4.6 6.48287 7.6958 3.875 11.5 3.875C15.3042 3.875 18.4 6.48287 18.4 9.6875C18.4 11.7587 17.3558 12.5259 14.9937 14.0566C14.1151 14.6262 13.1238 15.2694 12.1739 16.0677C9.1563 18.6077 9.1885 21.1129 9.2 21.3125V25.1875H13.8V21.2951C13.8 21.2486 13.8529 20.1306 15.4261 18.8073C16.1621 18.1873 16.9947 17.6487 17.7974 17.1275C20.2354 15.5465 23 13.7562 23 9.6875C23 4.34581 17.8411 0 11.5 0ZM9.2 27.125H13.8V31H9.2V27.125Z" fill="#192230"/>
        </svg>
    );
};






