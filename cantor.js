// Co do wyniesienia z tej lekcji?
// -- jeśli mamy powtarzające się elementy - spróbujmy je zmergować w jeden - czytelność
// -- używanie array.map()
// -- obsługa defaultProps
// -- przypisywanie danych i obsługa tablic/obiektów
// -- stworzenie metod dla poszczególnych funkcjonalności - nie próbuj upchnąć wszystkiego w "onChange"
// -- destrukturyzacja

const Cash = (props) => {
  const {cash, ratio, title} = props;
  const value = (cash / ratio * props.price).toFixed(2);
  return (
    <div>{title}{cash <= 0 ? '' : value}</div>
  );
}

class ExchangeCounter extends React.Component {
  state = {
    amount: '',
    product: 'electricity'
  }

  static defaultProps = {
    currencies : [
      {
        id: 0,
        name: 'zloty',
        ratio: 1,
        title: 'Wartość w złotówkach: '
      },
      {
        id: 1,
        name: 'dollar',
        ratio: 3.6,
        title: 'Wartość w dolarach: '
      },
      {
        id: 2,
        name: 'euro',
        ratio: 4.1,
        title: 'Wartość w euro: '
      },
      {
        id: 3,
        name: 'pound',
        ratio: 4.55,
        title: 'Wartość w funtach: '
      }
    ],
    prices: {
      electricity: .51,
      gas: 4.5,
      oranges: 3.79,
    }
  }

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  }

  handleSelect = e => {
    this.setState({
      product: e.target.value,
      amount: ''
    })
  }

  insertSuffix(select) {
    if (select === 'electricity') return  <em>kWh</em>
    else if (select === 'gas') return  <em>litrów</em>
    else if (select === 'oranges') return  <em>kilogramów</em>
    else return null;
  }

  selectPrice(select) {
    return this.props.prices[select];
  }

  render() {
    const {amount, product} = this.state;
    const price = this.selectPrice(product);

    const calculators = this.props.currencies.map(currency => (
      <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} price={price}/>
    ));

    return (
      <div className='app'>
        <label>Wybierz produkt:
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">prąd</option>
            <option value="gas">benzyna</option>
            <option value="oranges">pomarańcze</option>
          </select>
        </label>
        <br />
        <label>
          <input type="number" value={this.state.amount} onChange={this.handleChange}/>
          {this.insertSuffix(this.state.product)}
        </label>
        {calculators}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));