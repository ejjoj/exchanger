// const Dollars = (props) => (
//   <div>Wartość w dolarach: {props.cash <= 0 ? '' : (props.cash / props.ratio).toFixed(2)}</div>
// )
//
// const Euros = (props) => {
//   const value = (props.cash / props.ratio).toFixed(2);
//   return (
//     <div>Wartość w euro: {props.cash <= 0 ? '' : value}</div>
//     );
// }

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
    ratioDollar: 3.6,
    ratioEuro: 4.2
  }

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  }

  render() {
    const {amount, ratioDollar, ratioEuro} = this.state;

    return (
      <div className='app'>
        <label>
          <input type="number" value={this.state.amount} onChange={this.handleChange}/>
        </label>
        {/*<Dollars cash={amount} ratio={ratioDollar}/>*/}
        {/*<Euros cash={amount} ratio={ratioEuro}/>*/}
        <Cash cash={amount} ratio={ratioDollar} title='Wartość w dolarach: ' />
        <Cash cash={amount} ratio={ratioEuro} title='Wartość w euro: ' />
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));