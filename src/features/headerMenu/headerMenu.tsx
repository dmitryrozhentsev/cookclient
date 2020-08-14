import * as React from 'react';
import './headerMenu.css';
import { MenuButton} from "../../components/menuButton/menuButton";
import {IHeaderMenuType} from "./headerMenu.type";
import {SyntheticEvent, useEffect, useState} from "react";


export const HeaderMenu = (props:IHeaderMenuType) => {
    const [uri, setUri] = useState(location.hash.slice(1));
    const clickHandle =  (e: SyntheticEvent) => {
        e.persist();
        setUri(props.tabs[+e.currentTarget.attributes[1].value].link);
    };
    useEffect(()=>{
        const setLocalUri = () =>{
            setUri(location.hash.slice(1));
        };
        window.addEventListener('popstate', setLocalUri);

        return () => {
            window.removeEventListener('popstate', setLocalUri);
        }
    });

    return (
            <header className={'header__menu'}>
                <ul className={'header__buttons-list'}>
                        {
                            props.tabs.map((tab, index)=>{
                                return  <li className={'header__menu-button'} key={index}><MenuButton
                                    icon={tab.icon}
                                    active={uri === tab.link}
                                    key={index}
                                    dataValue={index}
                                    link={tab.link}
                                    onClick = {clickHandle}
                                /></li>
                            })
                        }
                    {
                    }
                </ul>
                <div className={'header__decorLine'} />
            </header>

    );
};
