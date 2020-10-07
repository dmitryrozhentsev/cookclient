import * as React from 'react';
import {SERVERIPPORT} from "../../../constants/backend";
import {ICookItemFromServer} from "../../features/cookList/cookList.types";

export const CookDescription = () => {

   // const [currentCook] = useState();

    const getDescription = async () => {
        // fetch(`http://${SERVERIPPORT}/${location.hash.slice(7)}`, {
        //     mode: 'no-cors'
        // }).then((response) => {
        //         return response.json();
        //     })
        fetch(`http://${SERVERIPPORT}/${location.hash.slice(7)}`)
            .then((response) => {
                return response.json();
            })
            .then((cooksData:ICookItemFromServer[]) => {
                console.log(cooksData);
            })
            .catch((err)=>{
                console.log(err);
            })
    };

    getDescription();

    return (
       <div>{location.hash.slice(7)}</div>
    );
};
