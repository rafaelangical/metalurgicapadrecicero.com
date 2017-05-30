import React from 'react'
import './Contacts.css'
import face from './face.png'
import twitter from './twitter.png'
import insta from './insta.png'


export default function Sections(){

    return (
        <section id="contacts" className="content contacts">
          <h2>Contatos</h2>
          <article className="box contact">
            <article className="box-contacts">
				<a href="#"><img src={face} className="images-contacts"/></a> 
				<a href="#"><img src={twitter} className="images-contacts"/></a> 
				<a href="#"><img src={insta} className="images-contacts"/></a>
				<hr/> 
				<h3>Telefones e Whatsapp</h3>
				<h4><span>(86) 99432-5736</span> Tratar com Diva</h4>
				<h4><span>(86) 99500-5246</span> Tratar com Diva</h4>
				<h4><span>(86) 99444-6431</span> Tratar com Rafael</h4>
				<hr />
				<h4 className="email">padrecicerometalurgica@hotmail.com</h4>
				<h5>Avenida Petrônio Portela - 
				431 - Centro - Angical do Piauí - Pi</h5>
            </article>
          </article>
        </section>
      )
}