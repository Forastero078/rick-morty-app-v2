import React from "react";
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { NavLink } from "react-router-dom";



export default function Nav(props) {
    return (
        <div className={styles.Nav}>
            <div className={styles.navButtons}>
             <NavLink to='/home' className={({isActive}) => isActive ? styles.active : styles.button}>Home</NavLink>
             <NavLink to='/about' className={({isActive}) => isActive ? styles.active : styles.button}>About</NavLink>
             <NavLink to='/fav' className={({isActive}) => isActive ? styles.active : styles.button}>myFavorites</NavLink>
             </div>
             <button className={styles.logOut} onClick={props.logout}>LOG OUT</button>
            <SearchBar onSearch={props.onSearch} onSearchR={props.onSearchR} />

        </div>
    )
}