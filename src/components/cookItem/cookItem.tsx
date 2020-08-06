import * as React from 'react';
import './cookItem.css';
import { LikeIcon } from "../../assets/icons/likeIcon";
import { DeleteIcon } from "../../assets/icons/deleteIcon";
import { CookIcon } from "../../assets/icons/cookIcon";
import { TimeIcon } from "../../assets/icons/timeIcon";

export const CookItem = () => {
    return (
        <>
            <div className={'cookItem'}>
                <div className={'cookItem__nav'}>
                    <div className={'cookItem__navWrapper'}>
                        <button className={'cookItem__addFavourite cookItem__button'}>
                            <LikeIcon height={'35'} width={'35'} className={'like'}/>
                        </button>
                        <button  className={'cookItem__delete cookItem__button'}>
                            <DeleteIcon height={'25'} width={'25'} className={'delete'} />
                        </button>
                    </div>
                </div>
                <div className={'cookItem__nameWrapper'}>
                    <p className={'cookItem__nameText'}>название название название название </p>
                </div>
                <div className={'cookItem__cookingTime'}>
                    <TimeIcon height={`20`} width={'20'} className={'cookingTime'}/>
                    <p className={'cookItem__textTime'}>99 минут</p>
                </div>
                <div className={'cookItem__bgIcon'}>
                    <CookIcon className={'cookbg'} width={'140'} height={'150'}/>
                </div>
            </div>
        </>
    );
};

