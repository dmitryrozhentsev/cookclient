import * as React from 'react';
import './headerMenu.css';
import { MenuButton} from "../../components/menuButton/menuButton";
import { SearchIcon } from "../../assets/icons/searchIcon";
import { RandomIcon } from "../../assets/icons/randomIcon";
import { FavouriteIcon } from "../../assets/icons/FavouriteIcon";
import { AddIcon } from "../../assets/icons/addIcon";
import { ListIcon } from "../../assets/icons/listIcon";
import {IHeaderMenuType} from "./headerMenu.type";
import { Link} from "react-router-dom";

export const HeaderMenu = (props:IHeaderMenuType) => {
    const tabs = [
        {
            icon: <ListIcon
                height={'40'}
                width={'40'}
                className={'listButton button'}
            />,
            link: '/'
        },
        {
            icon: <SearchIcon height={'40'}
                              width={'40'}
                              className={'searchButton button'}
            />,
            link: '/search'
        },
        {
            icon:  <RandomIcon
                height={'40'}
                width={'40'}
                className={'randomButton button'}
            />,
            link: '/random'
        },
        {
            icon:   <FavouriteIcon
                height={'40'}
                width={'40'}
                className={'favouriteButton button'}
            />,
            link: '/fav'
        },
        {
            icon:   <AddIcon
                height={'40'}
                width={'40'}
                className={'addButton button'}
            />,
            link: '/add'
        }

    ];

    const handlerTabClick = (e:React.SyntheticEvent) =>{
        e.persist();
        props.setActive(+e.currentTarget.attributes[1].value);
    };


    return (
            <header className={'header__menu'}>
                <ul className={'header__buttons-list'}>
                        {
                            tabs.map((tab, index)=>{
                                return  <li className={'header__menu-button'}><MenuButton
                                    icon={tab.icon}
                                    active={props.active === index}
                                    key={index}
                                    dataValue={index}
                                    onClick={handlerTabClick}
                                    link={tab.link}
                                /></li>
                            })
                        }

                </ul>
                <div className={'header__decorLine'} />
            </header>

    );
};
