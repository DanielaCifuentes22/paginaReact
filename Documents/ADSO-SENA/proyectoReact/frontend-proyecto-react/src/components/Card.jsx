//Componente reutilizable como tarjeta de presentación.
//como propiedades recibe un titulo, descripción y un boton.
function Card({titulo, descripcion, botonTexto}){
    return(
     <article className = "card">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>

        {/*Botón de inscripción para la tercera tarjeta.*/}
         {botonTexto && (
                <button className="boton">
                    {botonTexto}
                </button>
            )}
            
      </article>
    );
}
export default Card;