import { Modal, Image } from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';

const ModalBebida = () => {

  const { modal, handleModalClick, receta, setr } = useBebidas();

  function mostrarIngrediente() {
    let ingredientes = [];

    for(let i = 1; i < 16; i++) {
      if(receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
        )
      }
    }

    return ingredientes;
  }

  return (
    <Modal show={modal} onHide={() => {
      handleModalClick()
      setReceta({})
    }}>
      <Image 
        src={receta.strDrinkThumb}
        alt={`imagen receta ${receta.strDrink}`}
      />

      <Modal.Header>
        <Modal.Title className='text-center'>{receta.strDrink}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className='py-3'>
          <h2>Instrucciones</h2>
          <p>{receta.strInstructions}</p>
          <h2>Ingredientes y cantidades</h2>
          <ul>
            {mostrarIngrediente()}
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalBebida