import * as React from 'react';
import './addCook.css';
import { CookItem } from "../../components/cookItem/cookItem";
import { Input } from "../../components/input/Input";

export const AddCook = () => {
    return (
        <div className={'addCook__content'}>
            <div className={'addCook__wrapper'}>
                <CookItem title={''} isPreview={true} />
                <form className={'addCook__form'}>
                    <Input placeholder={'Название...'} height={70}/>
                    <Input placeholder={'Ингредиенты:'} height={70}/>
                    <Input placeholder={'Рецепт:'} height={180}/>
                    <Input placeholder={'время готовки(мин):'}/>
                    <button type='submit' />
                </form>
            </div>
        </div>
    );
};
