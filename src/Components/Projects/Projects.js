import React from 'react'
import './Projects.css'
import um from './um.jpg'
import dois from './dois.jpg'
import tres from'./tres.jpg'
import quatro from './quatro.jpg'
import cinco from './cinco.jpg'
import seis from'./seis.png'
import sete from './sete.jpg'
import oito from './oito.jpg'
import nove from './nove.jpg'
import dez from './dez.jpeg'
import onze from './onze.jpg'
import doze from './doze.jpg'
import treze from './treze.jpeg'
import quatorze from './quatorze.jpeg'
import quinze from './quinze.jpg'
import dizesseis from './dizesseis.jpeg'

export default function Sections(){

    return (
        <section id="projects" className="content projects">
        	<h2>Projetos</h2>
        	<div className="section-images">
        		<img className="image-p"/>
        		<img src={um} className="image-p"/>
        		<img src={dois} className="image-p"/>
        		<img src={tres} className="image-p"/>
        		<img src={quatro} className="image-p"/>
        		<img src={cinco} className="image-p"/>
        		<img src={seis} className="image-p"/>
        		<img src={sete} className="image-p"/>
        		<img src={oito} className="image-p"/>
        		<img src={nove} className="image-p"/>
        		<img src={dez} className="image-p"/>
        		<img src={onze} className="image-p"/>
        		<img src={doze} className="image-p"/>
        		<img src={treze} className="image-p"/>
        		<img src={quatorze} className="image-p"/>
        		<img src={quinze} className="image-p"/>
        		<img src={dizesseis} className="image-p"/>
        	</div>
        </section>
      )
}