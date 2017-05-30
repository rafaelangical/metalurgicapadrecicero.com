import React from 'react'
import './AboutUs.css'
import um from './Projects/um.jpg';
import dois from './Projects/2.jpg';
import quatro from './Projects/4.jpg';
import cinco from './Projects/5.jpg';

export default function Sections(){
    return (
        <section id="aboutus" className="content aboutus">
          <h2>Sobre</h2>
          <img src={um} className="imageAbout"/>
          <img src={dois} className="imageAbout"/>
          <img src={quatro} className="imageAbout"/>
          <img src={cinco} className="imageAbout"/>
          <article className="aboutus">
            <p className="about">Metalúrgica Padre Cícero é uma empresa que esta a mais de
             20 anos no mercado com serviços seguros e eficientes<br /> sem 
             deixar de lado aquele acabamento que voçê merece.</p>
          </article>
          <article className="list">
            <ul className="list-about">
              <li>Fabricação de Portas</li>
              <li>Portões</li>
              <li>Grades</li>
              <li>Janelas</li>
              <li>Coberturas em Geral</li>
              <li>Etc.</li>
            </ul>
          </article>
        </section>
      )
}