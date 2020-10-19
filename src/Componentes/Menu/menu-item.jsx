import React from 'react'
import {NavLink} from 'react-router-dom'
import './menu.css'

export default function MenuItem(props){
    console.log(props.text);
    return(
        <NavLink className='menu-item' to={props.to}>{props.text}</NavLink>
    )
}