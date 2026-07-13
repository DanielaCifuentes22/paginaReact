//Importación del componente para selección del idioma
import IdiomaMenu from './IdiomaMenu';
//Importación de las imagenes para el encabezado
import logogaleria from "../img/logogaleria.png";
import ubicacion from "../img/ubicacion.png";

//Componente Header que muestra el encabezado
function Header(){
    return(
        <header className = "header">
            <div className = "logo">
                <img src={logogaleria} alt="logo de la galeria"/>
            </div>
            <div className = "menuIzquierdo">
                <img src={ubicacion} alt="ubicación"/>
                <IdiomaMenu />
            </div>
            {/* Menú principal de navegación*/}
            <nav className = "nav">
                <a href="#inicio">INICIO</a>
                <a href="#obras">OBRAS</a>
                <a href="#exposiciones">EXPOSICIONES</a>
                <a href="#tienda">TIENDA</a>
                <a href="#sobre mí">SOBRE MI</a>
                <a href="#talleres">TALLERES</a>
                <a href="#contacto">CONTACTO</a>
            </nav>
        </header>
    );
}
export default Header;