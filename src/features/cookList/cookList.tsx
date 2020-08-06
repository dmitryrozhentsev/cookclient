import * as React from 'react';
import { CookItem } from "../../components/cookItem/cookItem";
import './cookList.css';
import {useState} from "react";

export const CookList = () => {
    const [count, setCount] = useState([1,2,3,4,5,6,7]);
    return (
        <div className={'cookList__content'}>
            <div className={'cookList__wrapper'}>
                    <ul className={'cookList'}>
                        {
                            count.map((x, index)=>{
                                return (
                                    <li className={'cookList_item'} key={index}>
                                        <CookItem />
                                    </li>
                                )
                            })
                        }
                    </ul>
            </div>
        </div>
    );
};

