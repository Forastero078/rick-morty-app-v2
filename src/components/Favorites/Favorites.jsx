import React, { useEffect, useState } from "react";
import styles from './Favorites.module.css';
import { connect } from "react-redux";
import Card  from "../Card/Card";




export function Favorites(props) {

    const { myFavorites } = props;

    const [favs, setFavs] = useState([])

    useEffect(() => {
        setFavs([...myFavorites])
    }, [myFavorites]);

    console.log(props)

    return (
        <div>
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