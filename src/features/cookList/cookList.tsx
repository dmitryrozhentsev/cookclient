import * as React from 'react';
import { CookItem } from "../../components/cookItem/cookItem";
import './cookList.css';
import {useEffect} from "react";
import {ICookItemFromServer, ICookItem} from "./cookList.types";
import {useCookActions} from "../../actions";
import {RootState} from "../../reducers";
import {useDispatch, useSelector} from "react-redux";


export const CookList = () => {
    const dispatch = useDispatch();
    const cookActions = useCookActions(dispatch);
    const { cooks } = useSelector((state: RootState) => {
        //const hash = location?.hash?.replace('#', '');
        return {
            cooks: state.cooks
        };
    });
    const getCooks = ():void=>{
        let cookArray:ICookItem[] = [];
        fetch('http://172.16.2.244:8080')
            .then((response) => {
                return response.json();
            })
            .then((cooksData:ICookItemFromServer[]) => {
                if(cooksData.length > 0 ){
                    cooksData.map((cook:ICookItemFromServer)=>{
                        cookArray.push({
                            img: cook.img ? cook.img : '',
                            id: cook._id,
                            title: cook.title,
                            description: cook.description,
                            date: cook.date
                        });
                    });
                    cookActions.getCooks(cookArray);
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    };
    useEffect(()=>{
        if(!cooks.length){
            getCooks();
        }
    }, [cooks]);

    return (
        <div className={'cookList__content'}>
            <div className={'cookList__wrapper'}>
                    <ul className={'cookList'}>
                        {
                            cooks.map((x, index)=>{
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

