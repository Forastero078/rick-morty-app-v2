import { ADD_FAVORITE, DELETE_FAVORITE } from "./actions";

const initialState = {
     myFavorites: []
}


export default function rootReducer(state = initialState, {type, payload}){
  switch(type){
    case ADD_FAVORITE:
        return{
            ...state,
            myFavorites: [...state.myFavorites, payload]
        };
        
    case DELETE_FAVORITE:
    let myFavorites = state.myFavorites;
    if(myFavorites){
    let filter = myFavorites.filter((element) => {
        if(element){
        return element.id !== Number(payload)
        }
    });

        return {
            ...state,
            myFavorites: filter
        };
    }
    
    
    default:
        return state;
    }
  };