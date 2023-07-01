import styles from './SearchBar.module.css';
import { useState } from 'react';


export default function SearchBar(props) {

   const [character, setCharacter] = useState('');

   const handleChange = (event) => {
      setCharacter(event.target.value);
   }


   return (
      <div>
         
      <div className={styles.div}>

         <input type='text' className={styles.input} value={character} onChange={handleChange} placeholder='Busca un personaje por ID!'/>
         <button className={styles.button} onClick={() => props.onSearch(character)}>Agregar</button>
         <button className={styles.button} onClick={props.onSearchR}>Random</button>
      
      
      </div>
      </div>
   );
}
