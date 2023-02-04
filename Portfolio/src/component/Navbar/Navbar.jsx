import './Navbar.css'

const Navbar =()=>{
    return (
        <header className='header'>
        <div className="miclase">
        <h2 className='nombre'>Portfolio</h2>
        <div className='navbar'>
            <a href="#">Inicio</a>
            <a href="#">Sobre mi</a>
            <a href="#">Portfolio</a>
            <a href="#">Precios</a>
            <a href="#">Contacto</a>
            <a href="#">Blog</a>
        </div>
        </div>
        <div className="recuadro">
            <div className="disenioizq">
                <div className="linea1"></div>
                <a href="https://www.behance.net/gallery/99902869/Website-for-the-photographer-UIUX-design?tracking_source=search_projects%7Cportfolio" target={"_blank"}><i class="fa-brands fa-behance"></i></a>
                <a href="https://www.instagram.com/rodri.arroyo/" target={"_blank"}><i class="fa-brands fa-instagram"></i></a>
                <a href="https://ar.pinterest.com/search/pins/?q=portfolio&rs=typed" target={"_blank"}><i class="fa-brands fa-pinterest"></i></a>
                <div className="linea2"></div>
            </div>
            <div className="textos">
                <div className="texto">
                    <span className="texto1">R</span>
                    <span className="texto1">o</span>
                    <span className="texto1">d</span>
                    <span className="texto1">r</span>
                    <span className="texto1">i</span>
                    <span className="texto1">g</span>
                    <span className="texto1">o</span>
                    <span className="texto1"> M.</span>
                    <span className="texto1"> A</span>
                    <span className="texto1">r</span>
                    <span className="texto1">r</span>
                    <span className="texto1">o</span>
                    <span className="texto1">y</span>
                    <span className="texto1">o</span>
                </div>
                <h2 className='texto2'> Fotógrafo</h2>
            </div>
        </div>
        </header>

    )
}

export default Navbar