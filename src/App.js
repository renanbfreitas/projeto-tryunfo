import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardInserted: [],
    };
  }

  validButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const maxValue = 210;
    const maxAtribute = 90;
    const atr1 = parseInt(cardAttr1, 10);
    const atr2 = parseInt(cardAttr2, 10);
    const atr3 = parseInt(cardAttr3, 10);

    const someInfo = (cardName !== '') && (cardDescription !== '') && (cardImage !== '');
    const notValueNegative = (atr1 >= 0 && atr1 <= maxAtribute)
      && (atr2 >= 0 && atr2 <= maxAtribute)
      && (atr3 >= 0 && atr3 <= maxAtribute);
    const sum = (atr1 + atr2 + atr3) <= maxValue;

    const validation = someInfo && sum && notValueNegative;

    if (validation) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = (e) => {
    const { target } = e;
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : e.target.value;

    this.setState({
      [name]: value,
    }, () => this.validButton());
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    const cardNew = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare };

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardInserted: [...prevState.cardInserted, cardNew],
    }));
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          validButton={ this.validButton }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
