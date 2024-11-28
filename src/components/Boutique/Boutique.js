import React, { useState } from 'react'; // Import de useState
import './Boutique.css';
import dataBoutique from '../../dataBoutique.js';
import Card from '../Card/Card.js';

function Boutique() {
  const [dataBoutiqueState, setDataBoutiqueState] = useState(dataBoutique);

  function decrease(id) {
    // Copie de l'état actuel (ne pas le muter directement)
    const updatedData = [...dataBoutiqueState];
    // Décrémente la quantité du produit sélectionné
    updatedData[id].qte--; 

    // Mise à jour de l'état avec la nouvelle liste
    setDataBoutiqueState(updatedData);
  }

  return (
    <div className="container">
      {dataBoutiqueState.map((element, index) => (
        <Card key={index} data={{ id: index, ...element }} click={decrease} />
      ))}
    </div>
  );
}

export default Boutique;
