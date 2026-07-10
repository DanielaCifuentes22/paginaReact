function Card({titulo, descripcion}){
    return(
     <article className = "card">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </article>
    );
}
export default Card;