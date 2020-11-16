import * as React from 'react';
import {SERVERIPPORT} from "../../../constants/backend";
import {ICookItemFromServer} from "../../features/cookList/cookList.types";
import {useEffect, useState} from "react";
import {CookItem} from "../cookItem/cookItem";
import {Input} from "../input/Input";


interface iCookDescriptionProps {
    match: any;
    location: any;
    pathname:string,
    id: string
}

interface iCookDescription {
    date: string,
    description:string
    img: string | undefined
    ingredients: Array<string>
    title:string
    worktime: number
}

export const CookDescription = (props:iCookDescriptionProps) => {
    const cookId = props.match.params.cookId;
    const [cookDescription, setCookDescription] = useState<iCookDescription>({
        date: "",
        description: "",
        img: "",
        ingredients: [],
        title: "",
        worktime: 0
    });
    useEffect(()=>{
        fetch(`http://${SERVERIPPORT}/${cookId}`)
            .then((response) => {
                return response.json();
            })
            .then((cooksData:ICookItemFromServer) => {
                setCookDescription({
                    date: cooksData.date,
                    description: cooksData.description,
                    img: cooksData.img,
                    ingredients: cooksData.ingredients,
                    title: cooksData.title,
                    worktime: cooksData.worktime
                });
            })
            .catch((err)=>{
                console.log(err);
            })
    }, []);

    return (
        <div className={'addCook__content'}>
            <div className={'addCook__wrapper'}>
                <div className={'addCook__dataSend'}>
                    <form className={'addCook__form'} method="post" encType="multipart/form-data">
                        <Input placeholder={'Название:'} height={70} value={cookDescription.title} />
                        <Input placeholder={'Ингредиенты:'} height={70} value={cookDescription.ingredients} />
                        <Input placeholder={'Рецепт:'} height={180} value={cookDescription.description}/>
                        <Input placeholder={'Время готовки:'} value={cookDescription.worktime} />
                    </form>
                </div>
            </div>
        </div>
    );
};
