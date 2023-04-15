import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';
import store from '../../redux/store.js'


export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={styles.Cards}>
         {characters.map((personaje) => {
            return <Card
               character={personaje}
               id={personaje.id}
               key={personaje.name + personaje.id}
               name={personaje.name}
               species={personaje.species}
               gender={personaje.gender}
               image={personaje.image}
               onClose={props.onClose}
            />
         })}
      </div>
   );
};


