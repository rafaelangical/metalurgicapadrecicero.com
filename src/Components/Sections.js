import React from 'react'
import './Sections.css'
import 'particles.js'
import { componentDidMount } from 'react-lifecycle-hoc'

class Hero extends React.Component{
  render(){
    return (
      <div class="hero-wrapper">
        <section id="home" class="content">
          <article class="box home">
          </article>
        </section>
        <div id="particles-js"></div>
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