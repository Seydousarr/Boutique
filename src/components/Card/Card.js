import React from 'react';
import './Card.css';

function Card(props) {

  const handleClickCard = (id) => {
    props.click(id); // Appel de la fonction click passée en prop
  };

  return (
    <div className='card'>
      <img src={"./assets/img/" + props.data.imgUrl} alt={props.data.name} />
      <h2>{props.data.name}</h2>
      <p className='card-price'>{props.data.price}€</p>
      <p className='card-description'>{props.data.description}</p>
      <p className='card-qte'>
        {props.data.qte > 0 ? props.data.qte + " Animal en stock" : "Cet espèce n'est plus disponible."}
      </p>
      <button className='' onClick={() => handleClickCard(props.data.id)}>Achat</button>
    </div>
  );
}

export default Card;
