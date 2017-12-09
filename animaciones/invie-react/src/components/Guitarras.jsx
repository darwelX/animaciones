import React, {Component} from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

function mapStateToProps(state){
  return {
    guitarras: state.guitarras
  }
}

class Guitarras extends Component {
  render(){

    return (
      <section id="guitarras" className="guitarras contenedor">
        <h2>Nuestra guitarras</h2>
        <div className="video-demo">
          <div className="video-responsive-contenedor">
            <iframe className="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        {this.props.guitarras.map((item, index)=>{
          return (
            <article className='guitarra' key={index}>
            <CSSTransitionGroup
             transitionName="flicker"
             transitionEnterTimeout={500}
             transitionLeaveTimeout={500}>
              <img className='guitarra-image' key={item.image, item.image2x} src={item.image, item.image2x} alt={item.alt} width="350"/>
            </CSSTransitionGroup>
            <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            transitionLeave={false}>
              <div className='contenedor-guitarra' key={item.title}>
                <h3 className="guitarra-title">{item.title}</h3>
                <ol>
                  {item.features.map((item, index)=>{
                    return (
                      <li key={index}>{item}</li>
                    )
                  })}
                </ol>
              </div>
            </CSSTransitionGroup>
          </article>
          )
        })}

      </section>
    );
  }
}

export default connect(mapStateToProps)(Guitarras);