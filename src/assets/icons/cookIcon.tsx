import * as React from "react";
import {IconType} from "./icon.type";

export const CookIcon = (props:IconType) => {
    return (
        <svg className={`${props.className}Icon`} width={`${props.width}px`} height={`${props.height}px`} viewBox="0 0 186 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65.0417 92.9167L92.9167 55.75L120.792 97.5625V83.625H157.958V18.5833C157.958 8.33463 149.624 0 139.375 0H18.5833C8.33463 0 0 8.33463 0 18.5833V130.083C0 140.332 8.33463 148.667 18.5833 148.667H92.9167V111.5H27.875L55.75 74.3333L65.0417 92.9167Z" fill="#1B1B1F"/>
        <path d="M157.958 102.208H139.375V130.083H111.5V148.667H139.375V176.542H157.958V148.667H185.833V130.083H157.958V102.208Z" fill="#1B1B1F"/>
        </svg>
    );
};










