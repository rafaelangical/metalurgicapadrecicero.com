import React from 'react'
import './Sections.css'

export default function Sections(){

    return (
      <div class="sections">
        <section id="home" class="content">
          <article class="box home">
            <h2>Home</h2>
          </article>
        </section>
        
        <section id="company" class="content">
          <article class="box company">
            <h2>Company</h2>
          </article>
        </section>
        
        <section id="service" class="content">
          <article class="box service">
            <h2>Serviços</h2>
          </article>
        </section>
        
        <section id="contact" class="content">
          <article class="box contact">
            <h2>Contatos</h2>
          </article>
        </section>
      </div>
      )
}