import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <div>
          <label htmlFor="name" className="nameUsuario">
            Nome:
            <input
              className="nome"
              name="cardName"
              type="text"
              data-testid="name-input"
              id="name"
              onChange={ onInputChange }
              value={ cardName }
            />
          </label>
        </div>
        <div>
          <label htmlFor="description" className="nameDescriçao">
            Descrição:
            <input
              className="descriçao"
              name="cardDescription"
              type="textarea"
              data-testid="description-input"
              id="description"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr1" className="nameForça">
            Força:
            <input
              className="força"
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              id="attr1"
              onChange={ onInputChange }
              value={ cardAttr1 }
              min="0"
              max="90"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr2" className="nameDefesa">
            Defesa:
            <input
              className="defesa"
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              id="attr2"
              onChange={ onInputChange }
              value={ cardAttr2 }
              min="0"
              max="90"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr3" className="nameVelocidade">
            Velocidade:
            <input
              className="velocidade"
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              id="attr3"
              onChange={ onInputChange }
              value={ cardAttr3 }
              min="0"
              max="90"
            />
          </label>
        </div>
        <div>
          <label htmlFor="image-input" className="nameImg">
            Coloque uma imagem:
            <input
              className="coloqueUmaImagem"
              name="cardImage"
              type="text"
              data-testid="image-input"
              id="image-input"
              onChange={ onInputChange }
              value={ cardImage }
            />
          </label>
        </div>
        <div>
          <label htmlFor="rare" className="nameRaridade">
            Raridade:
            <select
              className="raridade"
              name="cardRare"
              data-testid="rare-input"
              id="rare"
              onChange={ onInputChange }
              value={ cardRare }
            >
              <option id="normal">normal</option>
              <option id="rare">raro</option>
              <option id="very-rare">muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="trunfo" className="nameTryunfo">
            { hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : 'Super Trunfo'}
            { !hasTrunfo && <input
              className="nameTrunfo"
              name="cardTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              id="trunfo"
              onChange={ onInputChange }
              checked={ cardTrunfo }
            />}
          </label>
        </div>
        <div>
          <button
            className="buttonSalvar"
            type="button"
            data-testid="save-button"
            id="save-button"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
          >
            Salvar
          </button>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
