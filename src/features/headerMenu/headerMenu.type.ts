import React from "react";

export interface IHeaderMenuType {
    tabs: iTab[]
}

interface iTab {
    icon: React.ReactElement,
    link: string
}