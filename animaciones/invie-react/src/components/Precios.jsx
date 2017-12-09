import React, {Component} from 'react';

class Precios extends Component {
  render() {
    return(
      <header id="header" className="header background">
      <div className="contenedor">
        <figure className="logotipo">
        <img id="logo" className="b-loaded" src={this.props.logo} width="186" height="60" alt="Invie logotipo"/>
        </figure>
        <span className="burger-button icon-menu" id="burger-button"></span>
        <nav className="menu" id="menu">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html#guitarras">Guitarras</a>
            </li>
            <li>
              <a href="precios.html">Precios</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    );
  }
}

export default Precios;