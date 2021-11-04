import  React, { useReducer,useState } from 'react';
import PedidoContext from './PedidoContext';
import PedidoReducer from './PedidoReducer';

import {
    PRODUCTS_LIST,
    PRODUCTS_LISTED
} from '../../types'

const PedidoState = ({children}) => {

    // Products State 
    const initialState = {
        products: [],
        productsList: [],
    }

    const [ state, dispatch ] = useReducer(PedidoReducer, initialState);

 

      const setProductsList = async productsListed => {
        
        let nuevoState=[];
        if(state.productsList.length > 0 ) {
            state.productsList.map( producto => {
                nuevoState.push(producto);
            } )
            
            nuevoState.push(productsListed);
        } else {
            nuevoState.push(productsListed);
        }
        console.log("hola rr2",nuevoState);
         dispatch({
            type: PRODUCTS_LISTED,
            payload: nuevoState
        })
        

        
    }
    
    let setInformacion = async(prod) => {

        let producto = await setProductsList(prod);
    
        return producto;
    }
    

    
    const setProducts =  async productsListed => {

        //console.log("hola rr",(productsListed.preparation_time/10)*1000);
        //const stateProduc = await resolveAfterSeconds(productsListed.preparation_time);

        productsListed.state="processing";
        productsListed.state2= setInterval(function(segundos=0){
            segundos--;
            if(segundos===0){
                return 0;
            }

        },1000);
        let nuevoState=[];
        
        if(state.productsList.length > 0 ) {
            state.productsList.map( producto => {                
                nuevoState.push(producto);
            } )
            
            nuevoState.push(productsListed);
        } else {
            nuevoState.push(productsListed);
        }
        //console.log("hola rr2",nuevoState);
        dispatch({
            type: PRODUCTS_LISTED,
            payload: nuevoState
        })

        
    }

    const progress = (nuevoState) =>{
        //console.log("llllttt66",state.productsList);
        //console.log("llllttt667",nuevoState);
        let indice = state.productsList.indexOf(nuevoState);
        console.log(indice);
         
        console.log(state.productsList[indice].state);
        //state.productsList[indice].state=1;
        //para que no sean tanta la espera
        var segundos=(state.productsList[indice].preparation_time/1);
        var intervalo=setInterval(function(){
            segundos--;
            if(segundos>0){
            state.productsList[indice].state=segundos;
            //console.log("segundollllllllllllllll",segundos);
        }

            
        if(segundos===0 || segundos<0 ){
            state.productsList[indice].state="Completed";
            clearInterval(intervalo);
            return 0;
        }

        },1000);
    }

   
   var [productsget, setCount] = useState(0);
   const getProducts = () => {
    fetch("https://products-api-ten.vercel.app/api")
      .then((response) => {
        return response.json();
      })
      .then((api) => {
        //console.log(api);
        setCount(api)
      });
      return productsget;
    }
    

 



    return (
        <PedidoContext.Provider
            value={{
                setProducts,
                getProducts,
                productsget,
                productos: state.productsList,
                progress
            }}
        > {children}
        </PedidoContext.Provider>
    )
}

export default PedidoState;