import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Detail.module.css';



export default function Detail(props) {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  const backToBack = () => {
    navigate(-1);
  }

  const statusHandler = () => {
    if(character.status === 'Alive'){
      return styles.alive
    } else if( character.status === 'Dead'){
      return styles.dead
    }
    
  }
 
  return (
    <div className={styles.detail}>
      <button className={styles.button} onClick={backToBack}>🔙</button>
      <img className={styles.image} src={character.image} alt={character.name} />
      <div className={styles.info}>
         <p className={styles.name}>{character.name}</p>
          <p className={styles.detalle}>Status: <span className={statusHandler()}>{character.status}</span></p>
      {character.specie && <p className={styles.detalle}>Specie: {character.specie}</p>}
      <p className={styles.detalle}>Gender: {character.gender}</p>
      {character.origin && <p className={styles.detalle}>Origin: {character.origin.name}</p>}
      </div>
    </div>
  )
}
