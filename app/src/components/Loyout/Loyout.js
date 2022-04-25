import Header from "../Header/Header";
import {Outlet} from "react-router-dom"
import React from 'react'
export default function Loyout(){
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}