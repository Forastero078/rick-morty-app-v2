import React, { useEffect, useState } from "react";
import styles from './Favorites.module.css';
import { connect, useDispatch } from "react-redux";
import Card  from "../Card/Card";
import { orderCards, filterCards } from '../../redux/actions'




export function Favorites(props) {

    const { myFavorites } = props;
    const dispatch = useDispatch();

    const [favs, setFavs] = useState([])


    useEffect(() => {
        setFavs([...myFavorites])
    }, [myFavorites]);
  
    let orderHandler = (event) => {
        dispatch(orderCards(event.target.value))
    }
    let filterHandler = (event) => {
        dispatch(filterCards(event.target.value))
    }
    



    return (
        <div>
     
        <div className={styles.selectors}>
            <select name='Ordenamiento' className={styles.select} onChange={orderHandler}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>

            <select name='filtrar' className={styles.select} onChange={filterHandler}>
                <option value='Todos los personajes'>Todos los personajes</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>unknown</option>
            </select>

        </div>
 


            {favs.map((personaje) => {
               return <Card 
                character={personaje}
               id={personaje.id}
               key={personaje.name + ' Fav' +personaje.id}
               name={personaje.name}
               species={personaje.species}
               gender={personaje.gender}
               image={personaje.image}
               onClose={props.onClose}
            />
            })}
            
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}


export default connect(mapStateToProps)(Favorites)