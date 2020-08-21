const Cash = (props) => {
  const {cash, ratio, title} = props;
  const value = (cash / ratio).toFixed(2);
  return (
    <div>{title}{cash <= 0 ? '' : value}</div>
  );
}

class ExchangeCounter extends React.Component {
  state = {
    amount: '',
  }

  currencies = [
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
  ]

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  }

  render() {
    const {amount} = this.state;

    const calculators = this.currencies.map(currency => (
      <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount}/>
    ));

    return (
      <div className='app'>
        <label>
          <input type="number" value={this.state.amount} onChange={this.handleChange}/>
        </label>
        {calculators}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));