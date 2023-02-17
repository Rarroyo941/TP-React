import React from 'react';
import './Footer.css'
import { useForm, ValidationError } from '@formspree/react';
const Footer = () => {
    const [state, handleSubmit] = useForm("mpzedabb");
    if (state.succeeded) {
        alert('¡Mail enviado!');
    }
    return(
        <>
            <div className='footer'>
                <div className="primerFooter">
                    <a href='https://walink.co/dd7246' target="_blank" rel="noreferrer"><i class="fa-solid fa-phone"></i> 341-5841451</a>
                    <p>Redes Sociales</p>
                    <p>Estemos en contacto!</p>
                </div>
                <div className="segundoFooter">
                    <a href="mailto:arroyo.rodrigo@outlook.com"><i class="fa-regular fa-envelope"></i>arroyo.rodrigo@outlook.com</a>
                    <div className="segundoFooterIconos">
                        <a href="https://www.behance.net/gallery/99902869/Website-for-the-photographer-UIUX-design?tracking_source=search_projects%7Cportfolio" target={"_blank"} rel="noreferrer"><i class="fa-brands fa-behance"></i></a>
                        <a href="https://www.instagram.com/rodri.arroyo/" target={"_blank"} rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://ar.pinterest.com/search/pins/?q=nature&rs=typed" target={"_blank"} rel="noreferrer"><i class="fa-brands fa-pinterest"></i></a>
                    </div>
                    <form className='formMail' onSubmit={handleSubmit}>
                    <label htmlFor="email"></label>
                        <input id='email' name='email' type='email' placeholder='E-mail'></input><ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /><button type="submit" className='btnFooter' disabled={state.submitting}>ENVIAR</button>
                    </form>            
                </div>
                <h5 className='copyright'>Copyright©2023-Todos los derechos reservados</h5>
            </div>
            <div className='footer-responsive'>
                <a href='https://walink.co/dd7246' target="_blank" rel="noreferrer"><i class="fa-solid fa-phone"></i> 341-5841451</a>
                <a href="mailto:arroyo.rodrigo@outlook.com"><i class="fa-regular fa-envelope"></i>arroyo.rodrigo@outlook.com</a>
                <p>Redes Sociales</p>
                <div className='footer-responsive-icons'>
                    <a href="https://www.behance.net/gallery/99902869/Website-for-the-photographer-UIUX-design?tracking_source=search_projects%7Cportfolio" target={"_blank"} rel="noreferrer"><i class="fa-brands fa-behance"></i></a>
                    <a href="https://www.instagram.com/rodri.arroyo/" target={"_blank"} rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://ar.pinterest.com/search/pins/?q=nature&rs=typed" target={"_blank"} rel="noreferrer"><i class="fa-brands fa-pinterest"></i></a>
                </div>
                <p>Estemos en contacto!</p>
                <form className='formMail' onSubmit={handleSubmit}>
                    <label htmlFor="email"></label>
                        <input id='email' name='email' type='email' placeholder='E-mail'></input><ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /><button type="submit" className='btnFooter' disabled={state.submitting}>ENVIAR</button>
                    </form> 
                <h5 className='copyright-responsive'>Copyright©2023-Todos los derechos reservados</h5>  
            </div>
        </>
    )
}

export default Footer