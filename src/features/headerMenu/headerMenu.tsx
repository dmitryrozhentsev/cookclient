import * as React from 'react';
import './headerMenu.css';
import { MenuButton} from "../../components/menuButton/menuButton";
import { SearchIcon } from "../../assets/icons/searchIcon";
import { RandomIcon } from "../../assets/icons/randomIcon";
import { FavouriteIcon } from "../../assets/icons/FavouriteIcon";
import { AddIcon } from "../../assets/icons/addIcon";
import {IHeaderMenuType} from "./headerMenu.type";

export const HeaderMenu = (props:IHeaderMenuType) => {
    const tabs = [
        {
            value: 'Поиск',
            className: 'searchButton',
            icon: <SearchIcon height={'30'}
                              width={'30'}
                              className={'searchButton'}
            />
        },
        {
            value: 'Случайное',
            className: 'randomButton',
            icon: <RandomIcon
                height={'20'}
                width={'20'}
                className={'randomButton'}
            />
        },
        {
            value: 'Любимое',
            className: 'favouriteButton',
            icon:  <FavouriteIcon
                height={'20'}
                width={'20'}
                className={'randomButton'}
            />
        },
        {
            value: 'Добавить',
            className: 'addButton',
            icon:   <AddIcon
                height={'20'}
                width={'20'}
                className={'addButton'}
            />
        }
    ];

    const handlerTabClick = (e:React.SyntheticEvent) =>{
        e.persist();
        props.setActive(+e.currentTarget.attributes[1].value);
    };


    return (
            <header className={'header__menu'}>
                {
                    tabs.map((tab, index)=>{
                       return <MenuButton
                            value={tab.value}
                            className={tab.className}
                            icon={tab.icon}
                            active={props.active === index}
                            key={index}
                            dataValue={index}
                            onClick={handlerTabClick}
                        />
                    })
                }

            </header>

    );
};
