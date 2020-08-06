import * as React from 'react';
import {IconType} from "./icon.type";

export const LikeIcon = (props:IconType) => {
    return (
        <svg className={`${props.className}Icon`} width={props.width} height={props.height} viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.1875 29.6605H4.64557C4.00883 29.6667 3.39565 29.4192 2.94065 28.9721C2.48565 28.5251 2.22601 27.9152 2.21875 27.2763V15.1468C2.21875 13.8293 3.30934 12.7604 4.64557 12.7604H10.1875C11.53 12.7604 12.6185 13.8293 12.6185 15.1468V27.2763C12.6185 28.5938 11.5279 29.6605 10.1875 29.6605Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M31.6332 23.2665V25.57H34.8393C34.6784 28.0053 33.4459 29.6011 31.1546 29.6011H21.7819C20.325 29.6011 19.6029 26.8131 16.0664 26.8131L14.8848 26.8535V14.197C14.8848 14.197 17.1358 13.8443 17.8897 11.4536C17.8897 11.4536 20.9624 3.03652 23.3321 2.19714C24.7255 2.19714 25.8542 2.09727 25.8542 4.58777L24.5942 8.44252C24.5942 8.44252 23.8466 12.7605 29.1259 12.7605H33.6683C35.1252 12.7605 35.913 13.6615 35.913 14.9896C35.913 14.9896 35.9426 15.7483 35.9278 16.8936H31.6353V19.1971H35.8495C35.7745 20.5622 35.6203 21.9216 35.3878 23.2686H31.6332V23.2665Z" fill="white"/>
        </svg>
);
};





