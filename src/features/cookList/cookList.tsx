import * as React from 'react';
import { CookItem } from "../../components/cookItem/cookItem";
import './cookList.css';
import {useEffect} from "react";
import {ICookItemFromServer, ICookItem} from "./cookList.types";
import {useCookActions} from "../../actions";
import {RootState} from "../../reducers";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"
import { SERVERIPPORT } from '../../../constants/backend';

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
        fetch(`http://${SERVERIPPORT}`)
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
                            cooks.map((cook, index)=>{
                                return (
                                    <li className={'cookList_item'} key={index} id={cook.id}>
                                        <Link to={`/item/${cook.id}`}
                                              className={'routerLink'}
                                        >
                                            <CookItem
                                            title={cook.title}
                                            worktime={cook.worktime}
                                            img={cook.img}
                                            isPreview={false}
                                            />
                                        </Link>
                                    </li>

                                )
                            })
                        }
                    </ul>
            </div>
        </div>
    );
};

