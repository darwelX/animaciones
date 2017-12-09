import React, { Component } from 'react';
// import logo from './logo.svg';
import Portada from './components/Portada.jsx';
import Guitarras from './components/Guitarras.jsx';
import Footer from './components/Footer.jsx';

// const data = {
//   menu: [
//       {
//         href: 'index.html',
//         title: 'Home'
//       },
//       {
//         href: '#guitarras',
//         title: 'Guitarras'
//       },
//       {
//         href: 'precios.html',
//         title: 'Precios'
//       }
//     ],

//     logoPortada: logoPortada,

//     guitarras: [
//       {
//         image: acustica,
//         alt: 'Guitarra Invie Acustica',
//         title: 'Invie Acustica',
//         classContenedor: 'contenedor-guitarra-a',
//         classImg: 'derecha',
//         classArticle: 'guitarra',
//         features: [
//           'Estilo vintage',
//           'Madera pura',
//           'Incluye estuche invisible de aluminio'
//         ]
//       },

//       {
//         image: clasic,
//         alt: 'Guitarra Invie Classic',
//         title: 'Invie Classic',
//         classContenedor: 'contenedor-guitarra-b',
//         classImg: 'izquierda',   
//         classArticle: 'guitarra b',    
//         features: [
//           'Estilo vintage',
//           'Liviana',
//           'Inicia tu camino como Rockstar'
//         ]
//       }      
//     ]       
// }

class App extends Component {
  render() {
    return (
      <section className="Invie">
        {/* Portada */}
        {/* <Portada menu={data.menu} logo={data.logoPortada}/> */}
        <Portada />
        {/* Guitarras*/}
        {/* <Guitarras guitarras={data.guitarras}/> */}
        <Guitarras/>
        {/* Footer*/}
        <Footer/>
      </section>
    );
  }
}

export default App;
