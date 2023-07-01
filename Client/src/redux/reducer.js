import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER  } from "./actions";

const initialState = {
     myFavorites: [],
     allCharacters: []
}


export default function rootReducer(state = initialState, {type, payload}){
  switch(type){
    case ADD_FAVORITE:
        // return{
        //     ...state,
        //     myFavorites: [...state.allCharacters, payload],
        //     allCharacters: [...state.allCharacters, payload]
        // };
        return { ...state,
        myFavorites: [...payload],
        allCharacters: [...payload]
     };
        
    case DELETE_FAVORITE:
    // let myFavorites = state.myFavorites;
    // if(myFavorites){
    // let filter = myFavorites.filter((element) => {
    //     if(element){
    //     return element.id !== Number(payload)
    //     }
    // });
    
        // return {
        //     ...state,
        //     myFavorites: filter
        // };
    // }
        return { ...state, myFavorites: payload };

    case FILTER:
      let { allCharacters } = state;

      if(payload === 'Todos los personajes'){
        return {
            ...state,
            myFavorites: [...allCharacters]
      }
      }

      let filter = allCharacters.filter((element) => element.gender === payload);

        return {
              ...state,
              myFavorites: [...filter]
        };

        case ORDER:

        let charsSort;
        
        // let allChar;
        // if(state) allChar = state.allCharacters 
        if(payload === 'Ascendente'){
            let { allCharacters } = state;
            charsSort = allCharacters.sort((a,b) => a.id - b.id )
        } else if (payload === 'Descendente'){
            let { allCharacters } = state;
         charsSort = allCharacters.sort((a,b) => b.id - a.id );
        }

        return {
            ...state,
            myFavorites: [...charsSort]
        }
        
        


    
    
    default:
        return state;
    }
  };