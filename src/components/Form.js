import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name">
          <input type="text" data-testid="name-input" id="name" />
        </label>

        <label htmlFor="description">
          <input type="textarea" data-testid="description-input" id="description" />
        </label>

        <label htmlFor="attr1">
          <input type="number" data-testid="attr1-input" id="attr1" />
        </label>

        <label htmlFor="attr2">
          <input type="number" data-testid="attr2-input" id="attr2" />
        </label>

        <label htmlFor="attr3">
          <input type="number" data-testid="attr3-input" id="attr3" />
        </label>

        <label htmlFor="image-input">
          <input type="text" data-testid="image-input" id="image-input" />
        </label>

        <label htmlFor="rare">
          <select data-testid="rare-input" id="rare">
            <option id="normal">normal</option>
            <option id="rare">raro</option>
            <option id="very-rare">muito raro</option>
          </select>
        </label>

        <input type="checkbox" data-testid="trunfo-input" id="trunfo" />

        <button type="button" data-testid="save-button" id="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
