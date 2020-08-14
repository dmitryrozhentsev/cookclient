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
                            date: cook.date,
                            worktime: cook.worktime
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
            getCooks();
    }, []);
    return (
        <div className={'cookList__content'}>
            <div className={'cookList__wrapper'}>
                    <ul className={'cookList'}>
                          {
                            cooks.map((x, index)=>{
                                return (
                                    <li className={'cookList_item'} key={index}>
                                        <CookItem
                                        title={cooks[index].title}
                                        worktime={cooks[index].worktime}
                                        img={cooks[index].img}
                                        isPreview={false}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
            </div>
        </div>
    );
};

