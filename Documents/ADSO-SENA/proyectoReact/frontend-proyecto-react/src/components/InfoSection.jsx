//Importación del componente para presentación en tarjetas reutilizables.
import Card from './Card';

//Componente para información importante mediante tarjetas.
function InfoSection(){
    return(
        <section className = "section" id = "informacionImportante">
            <h2>Información de interés</h2>
            <div className = "cards-container">
                <Card
                titulo = "Objetivo de la galería"
                descripcion = {`Concebir el arte como un espacio de contemplación y transformación,
                donde cada obra invita a descubrir nuevos significados.`}
                />
                <Card
                titulo = "Información general"
                descripcion = {
                <>
                    Dirección de la galería: Carrera 30 # 50-69 Bello Horizonte, Pereira.<br />
                    Teléfono: 606 350 0000.<br />
                    Correo: galeriacuecha@gmail.com.<br />
                    Horarios de atención: Lunes a viernes de 8:00 a.m. a 12:00 m. y de 2:00 p.m. a 4:00 p.m.
                </> }
                />
                <Card 
                titulo = "Servicios"
                descripcion = {`Se ofrece talleres de pintura y dibujo.
                 clases personalizadas en modalidad presencial o virtual.
                 Se abren cupos con previa inscripción y pago del 50 % del servicio.`}
                 botonTexto = "Inscribirse"
                />
            </div>
        </section>
    );
}
export default InfoSection;