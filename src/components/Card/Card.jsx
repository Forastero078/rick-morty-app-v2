import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import {  connect } from 'react-redux';
import { useEffect, useState } from 'react';

export function Card(props) {

const [ isFav, setIsFav ] = useState(false);

const { myFavorites, addFavorite, deleteFavorite } = props;

useEffect(() => {
   if(myFavorites){
   myFavorites.forEach((fav) => {
      if(fav.id === props.id){
         setIsFav(true);
      };
   });
}
}
,[myFavorites]);

// useEffect(() => {
//    if(myFavorites){
//    for(let i = 0; i < myFavorites.length; i++){
//       if(myFavorites[i].id === props.id){
//          setIsFav(true);
//       }
//    }
// }
// }, [myFavorites]);

const handleFavorite = () => {
   if(isFav){
      setIsFav(false);
      deleteFavorite(props.id);
   }  else {
      setIsFav(true);
      addFavorite(props.character);
   }
}

   return (
      <div className={styles.Card}>
         
           <span className={styles.id}> {props.id}</span>
         

         {
   isFav ? (
      <button onClick={handleFavorite} className={styles.Fav}>❤️<span className={styles.isFav}>Fav</span></button>
   ) : (
      <button onClick={handleFavorite} className={styles.Fav}>🤍NoFav</button>
   )
}
         <button onClick={() => props.onClose(props.id)} className={styles.close}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2 className={styles.name}>{props.name}</h2>
            <img className={styles.img} src={props.image} alt={props.name + ' 0' + props.id} />
            {/* <h2 className={styles.speciesGender}>{props.species} | {props.gender}</h2> */}
         </Link>
         
      </div>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: [...state.myFavorites]
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFavorite: (character) => dispatch(addFavorite(character)),
      deleteFavorite: (id) => dispatch(deleteFavorite(id))

   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);