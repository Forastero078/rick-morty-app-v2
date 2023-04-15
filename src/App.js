import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';




function App () {

  const [ characters, setCharacters] = useState([]);

  const [ access, setAccess ] = useState(false);

  const username = 'leonardo.carofiglio@hotmail.com';
  const password = 'henry1234';

  const location = useLocation();
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
  }

  const logout = () => {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const onSearch = (character) => {
    let filter = characters.filter((e) => e.id === Number(character));
   
    if (filter.length >= 1) return alert('Ya tienes ese personaje');

    fetch(`http://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => 
          [...oldChars, data]
        )
      } else {
        window.alert('No hay personajes con ese ID')
      }
    })


  };

  const onSearchR = (character) => {
    let random = Math.floor(Math.random() * 826);

    fetch(`http://rickandmortyapi.com/api/character/${random}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => 
          [...oldChars, data]
        )
      } else {
        window.alert('No hay personajes con ese ID')
      }
    })


  };

  const onClose = (id) => {
    let filter = characters.filter((e) => e.id !== id);
    setCharacters([...filter]);

  }
  

  return (
    <div className='App' style={{ padding: '25px' }}>
      { location.pathname !== '/' && <Nav onSearch={onSearch} onSearchR={onSearchR} logout = {logout}/>}
      <hr />
      <div>
        <Routes>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:detailId' element={<Detail/>}/>
          <Route exact path='/' element={<Form login={login}/>}/>
          <Route path='/fav' element={<Favorites onClose={onClose}/>}/>
          <Route path='*' element={<PageNotFound/>}/>

        </Routes>
      </div>
      <hr />
      
    </div>
  )
}

export default App
