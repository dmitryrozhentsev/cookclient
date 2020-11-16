import * as React from 'react';
import './CookInfo.css';
import { CookItem } from "../../components/cookItem/cookItem";
import { Input } from "../../components/input/Input";
import {SyntheticEvent, useRef, useState} from "react";
import {SERVERIPPORT} from '../../../constants/backend';
// interface HTMLInputEvent extends SyntheticEvent {
//     target: HTMLInputElement & EventTarget;
// }
import { CookInfoTypes } from './CookInfo.types';

export const CookInfo = (props:CookInfoTypes) => {

    const [nameInput, setNameInput] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [recipe, setRecipe] = useState('');
    const [time, setTime] = useState('');
    const [fileInputUrl, setfileInputUrl] = useState('');
    const fileRef = useRef(null);


    const handleNameChange = (event: SyntheticEvent) => {
        // @ts-ignore
        setNameInput(`${event.target.value}`);
    };
    const handleIngredientsChange = (event: SyntheticEvent) => {
        // @ts-ignore
        setIngredients(`${event.target.value}`);
    };

    const handleRecipeChange = (event: SyntheticEvent) => {
        // @ts-ignore
        setRecipe(`${event.target.value}`);
    };

    const handleTimeChange = (event: SyntheticEvent) => {
        // @ts-ignore
        setTime(`${event.target.value}`);
    };

    const handleFileInput = (event: SyntheticEvent) => {
        // @ts-ignore
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onloadend = function(){
           // document.getElementById('clock').style.backgroundImage = "url(" + reader.result + ")";
            setfileInputUrl(`url("${reader.result}")`);
            console.log(`url("${reader.result}")`);
        };

        if(file){
            reader.readAsDataURL(file);
        }
        console.log(1);
        console.log(fileInputUrl);
    };

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        event.persist();
        const formData = new FormData();
        formData.append('title', nameInput);
        formData.append('ingredients', ingredients);
        formData.append('description', recipe);
        formData.append('worktime', time);
        // @ts-ignore
        if(event.target[4].files[0]){
            // @ts-ignore
            formData.append('img', event.target[4].files[0]);
        }
        await fetch( `http://${SERVERIPPORT}`,{
            method: 'POST',
            body: formData,
            mode: "no-cors"
        })
            .then((res)=>{
                {
                    console.log('response',res);
                }
            });

    };

    return (
        <div className={'addCook__content'}>
            <div className={'addCook__wrapper'}>
                <div className={'addCook__dataSend'}>
                    <CookItem title={nameInput} isPreview={true} img={fileInputUrl ? fileInputUrl : undefined}/>
                    <form className={'addCook__form'} method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                        <Input placeholder={'Название:'} height={70} value={nameInput} onChange={handleNameChange}/>
                        <Input placeholder={'Ингредиенты:'} height={70} value={ingredients} onChange={handleIngredientsChange} />
                        <Input placeholder={'Рецепт:'} height={180} value={recipe} onChange={handleRecipeChange}/>
                        <Input placeholder={'Время готовки:'} value={time} onChange={handleTimeChange}/>
                        <input type={'file'} name={'img'} onChange={handleFileInput} ref={fileRef}/>
                        <button type='submit' className={'addCook__button'}>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
