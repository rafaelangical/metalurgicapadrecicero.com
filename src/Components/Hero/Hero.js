import React from 'react'
import './Hero.css'
import 'particles.js'
import './MediaScreen.css'
import { componentDidMount } from 'react-lifecycle-hoc'


class Hero extends React.Component{
  render(){
    return (
      <div className="hero-wrapper flex-grid-container">
        <section className="hero">
          <div id="particles-js">
            <h1>Metalúrgica Padre Cícero</h1>
          </div>
        </section>
      </div>
      )
  }
}
export default componentDidMount(
  () => {
    /* eslint-disable no-undef */
    particlesJS('particles-js', require('./particlesjs-config.json'));
    /* eslint-enable no-undef */
  }
)(Hero)