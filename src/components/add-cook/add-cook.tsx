import * as React from 'react';
import './add-cook.css';

export const AddCook: React.FunctionComponent = () => {

    return(
        <div className={'add-cook'}>
            <input type="text" className={'add-cook__text'}/>
            <input type="button" className={'add-cook__submit'} value={'Добавить'}/>
        </div>
    )
};