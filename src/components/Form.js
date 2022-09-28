import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <label htmlFor="name">
          Nome:
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
            id="name"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            name="cardDescription"
            type="textarea"
            data-testid="description-input"
            id="description"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>

        <label htmlFor="attr1">
          Força:
          <input
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

        <label htmlFor="attr2">
          Defesa:
          <input
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

        <label htmlFor="attr3">
          Velocidade:
          <input
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

        <label htmlFor="image-input">
          Coloque uma imagem:
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
            id="image-input"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>

        <label htmlFor="rare">
          Raridade:
          <select
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

        <label htmlFor="trunfo">
          { hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : 'Super Trunfo'}
          { !hasTrunfo && <input
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />}
        </label>

        <button
          type="button"
          data-testid="save-button"
          id="save-button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
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
