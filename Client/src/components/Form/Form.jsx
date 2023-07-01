import styles from './Form.module.css';
import { useState } from 'react';
import validate from './validation';




export default function Form(props){

    const { login } = props;


    const [ userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [ errors, setErrors ] = useState({})

    const handlerInput = (event) => {
        setUserData({
            ...userData,
        [event.target.name] : event.target.value
        });

        setErrors(validate({
            ...userData
        }))
    };

    const handlerSubmit = (event) => {
        event.preventDefault();
      
        login(userData);  
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>

               <label className={styles.label}  >Username :</label>
               <input type='text' className={styles.input} name='username' value={userData.username} onChange={handlerInput}/>
               { errors.username && <p className={styles.warning}>{errors.username}</p>}

               <br/>

               <label className={styles.label}>Password :</label>
               <input type='text' className={styles.input}  name='password' value={userData.password} onChange={handlerInput}/>
               { errors.password && <p className={styles.warning}>{errors.password}</p>}
               <br/>

               <button type='submit' className={styles.button}>LOGIN!</button>

            </form>
        </div>
    )
};


