import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="superTrunfo">
        <div>
          <h1 data-testid="name-card">{ cardName }</h1>
        </div>
        <div>
          <img
            className="imageSelection"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <h2 data-testid="description-card">{ cardDescription }</h2>
        <h3 data-testid="attr1-card">{ cardAttr1 }</h3>
        <h4 data-testid="attr2-card">{ cardAttr2 }</h4>
        <h5 data-testid="attr3-card">{ cardAttr3 }</h5>
        <h6 data-testid="rare-card">{ cardRare }</h6>
        { cardTrunfo
        && <span data-testid="trunfo-card" className="superTrunfo">Super Trunfo</span> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
