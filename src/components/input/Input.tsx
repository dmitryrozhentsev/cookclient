import * as React from 'react';
import './Input.css';
import {InputTypes} from "./Input.types";


export const Input = (props:InputTypes) => {
    return (
        <div className={'addCook__inputWrapper'}>
            <textarea placeholder={props.placeholder} className={'addCook__input'} style={{height: props.height ? props.height : ''}} value={props.value} onChange={props.onChange}/>
        </div>
    );
};
