import * as React from 'react';
import {IconType} from "./icon.type";

export const AddIcon = (props:IconType) => {
    return (
        <svg className={`${props.className}Icon`} width={props.width} height={props.height} viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.5714 18.0714H29.1429V3.28571C29.1429 1.47138 27.6075 0 25.7143 0H22.2857C20.3925 0 18.8571 1.47138 18.8571 3.28571V18.0714H3.42857C1.53536 18.0714 0 19.5428 0 21.3571V24.6429C0 26.4572 1.53536 27.9286 3.42857 27.9286H18.8571V42.7143C18.8571 44.5286 20.3925 46 22.2857 46H25.7143C27.6075 46 29.1429 44.5286 29.1429 42.7143V27.9286H44.5714C46.4646 27.9286 48 26.4572 48 24.6429V21.3571C48 19.5428 46.4646 18.0714 44.5714 18.0714Z" fill="#1B1B1F"/>
        </svg>
);
};






