import * as React from 'react';
import {useEffect, useState} from "react";
import {ICookItemFromServer, ICookItem} from "./cook-item.types";
import './cook-list.css';

export const CookList: React.FunctionComponent = ()=>{
    const [cookList, setCookList] = useState<ICookItem[]>([]);

    const getCooks = ():void=>{
        let cookArray:ICookItem[] = [];
        fetch('http://172.16.2.244:8080')
            .then((response) => {
                return response.json();
            })
            .then((cooks:ICookItemFromServer[]) => {
                if(cooks.length > 0 ){
                    cooks.map((cook:ICookItemFromServer)=>{
                        console.log(cook);
                        cookArray.push( {
                            id: cook._id,
                            title: cook.title,
                            description: cook.description,
                            date: cook.date
                        })
                    });
                    setCookList(cookArray);
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    };

    useEffect(()=>{
        getCooks();
    }, []);

    return (
        <>
        <div className={'cook-list__wrapper'}>
            <ul className={'cook-list'}>
            {cookList.length !== 0
            ? cookList.map((cook)=>{
                return <li className={'cook-list__item'}>{cook.title}</li>
            })
            : null
        }
            </ul>
        </div>
        </>
    )
};