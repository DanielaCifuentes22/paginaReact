//Importación de imagenes usados como iconos para redes sociales.
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import whatsapp from "../img/whatsapp.png";

//Componente para mostrar pié de página con información de redes sociales.
function Footer(){
    return(
        <footer className="footer">
            <p>© 2026 Galería Cuecha - Todos los derechos reservados.</p>
            {/*Contenedor con los enlaces de las redes sociales.*/}
            <div className="redes-sociales">

                <a
                    href="https://www.facebook.com/share/19LC8ncekp/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={facebook} alt="Facebook" />
                </a>

                <a
                    href="https://www.instagram.com/cuecha_?igsh=Y3l1MjFrMTVkZ2d3"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={instagram} alt="Instagram" />
                </a>

                <a
                    href="https://wa.me/573106144502"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={whatsapp} alt="Whatsapp" />
                </a>

            </div>

        </footer>
    );
}
export default Footer;