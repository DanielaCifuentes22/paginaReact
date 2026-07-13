function Card({titulo, descripcion, botonTexto}){
    return(
     <article className = "card">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>

         {botonTexto && (
                <button className="boton">
                    {botonTexto}
                </button>
            )}
            
      </article>
    );
}
export default Card;