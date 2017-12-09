
import React from 'react';
import ReactDOM from 'react-dom';
import Invie from './Invie';
import './css/invie.css';
import './css/animations.css';
import cheet from 'cheet.js';

import logoPortada from './images/invie.png';
import logoPlatzi from './images/platzi.png';
import acustica from './images/invie-acustica.png';
import clasic from './images/invie-classic.png';
import acustica2 from './images/invie-acustica2x.png';
import clasic2 from './images/invie-classic2x.png';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import easterA from './images/easter-a.png';
import easterA2x from './images/easter-a2x.png';
import easterB from './images/easter-b.png';
import easterB2x from './images/easter-b2x.png';

const initialState = {
  
  menu: [
      {
        href: 'index.html',
        title: 'Home'
      },
      {
        href: '#guitarras',
        title: 'Guitarras'
      },
      {
        href: 'precios.html',
        title: 'Precios'
      }
    ],

    logoPortada: logoPortada,
    guitarras: [
      {
        image: acustica,
        image2x: acustica2,
        alt: 'Guitarra Invie Acustica',
        title: 'Invie Acustica',
        features: [
          'Estilo vintage',
          'Madera pura',
          'Incluye estuche invisible de aluminio'
        ]
      },

      {
        image: clasic,
        image2x: clasic2,
        alt: 'Guitarra Invie Classic',
        title: 'Invie Classic',
        features: [
          'Estilo vintage',
          'Liviana',
          'Inicia tu camino como Rockstar'
        ]
      }      
    ],
    isAnimated: false,
    hola: 'hola'      
}

function reducer(state, action){
  switch(action.type){
    case 'UPDATE_PROPS':{
      const newProps = action.payload.props;
      return { ...state, ...newProps}
    }
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

const easter = {
  isAnimated: 'is-animated',
  menu: [

    ],
  logoPortada: logoPlatzi,
  guitarras: [
    {
      image: easterA,
      image2x: easterA2x,
      alt: 'Guitarra Padre de Familia',
      title: 'Invie Familiar',
      features: [
        'Lista para copiar a los Simpsons',
        'Aire puro',
        'Chistes malos'
      ]
    },

    {
      image: easterB,
      image2x: easterB2x,
      alt: 'Guitarra Anime',
      title: 'Invie Anime',
      features: [
        'Estilo vintage',
        'Liviana',
        'Inicia tu camino como Rockstar'
      ]
    }      
  ]       
}
cheet('i n v i e', ()=>{
  // console.log('lo lograste');
  store.dispatch(
    {
      type: 'UPDATE_PROPS',
      payload: {
        props: easter
      }
    }
  )
});

cheet('g o b a c k', ()=>{
  // console.log('regresaste');
  store.dispatch(
    {
      type: 'UPDATE_PROPS',
      payload: {
        props: initialState
      }
    }
  )
});

ReactDOM.render(
  <Provider store={store}>
  <Invie />
  </Provider>,
  document.getElementById('root')
);
