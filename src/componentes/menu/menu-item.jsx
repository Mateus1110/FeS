import React from 'react'
import {NavLink} from 'react-router-dom'
import './Menu.css'

export default function MenuItem(props){
    return(
        <NavLink className='menu-item' activeClassName='menu-item-active' to={props.to}>{props.text}</NavLink>
    )
}