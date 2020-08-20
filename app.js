class ExchangeCounter extends React.Component {
  state = {
    product: 'default',
    amount: 0,
    textToDisplay: 'ilość',
    priceValueInDollars: 0,
    priceValueInEuro: 0
  }

  handleChange = e => {
    if (e.target.type === 'select-one') {
      switch (e.target.value) {
        case 'pln':
          this.setState({
            [e.target.name] : e.target.value,
            textToDisplay: 'zł'
          });
          break;
        case 'gasoline':
          this.setState({
            [e.target.name] : e.target.value,
            textToDisplay: 'litrów'
          });
          break;
        case 'orange':
          this.setState({
            [e.target.name] : e.target.value,
            textToDisplay: 'sztuk'
          });
          break;
        default:
          this.setState({
            [e.target.name] : e.target.value,
            textToDisplay: 'ilość'
          })
      }
    } else {
      switch (this.state.product) {
        case 'pln':
          this.setState({
            [e.target.name] : e.target.value,
            priceValueInDollars: 0.27 * parseInt([e.target.name]),
            priceValueInEuro: 0.23 * parseInt([e.target.name])
          });
          break;
        case 'gasoline':
          this.setState({
            [e.target.name] : e.target.value,
            priceValueInDollars: 4.5 * 0.23 * parseInt([e.target.name]),
            priceValueInEuro: 4.5 * 0.27 * parseInt([e.target.name])
          });
          break;
        case 'orange':
          this.setState({
            [e.target.name] : e.target.value,
            priceValueInDollars: 8.99 * 0.23 * parseInt([e.target.name]),
            priceValueInEuro: 8.99 * 0.27 * parseInt([e.target.name])
          });
          break;
        default:
          break;
      }
    }
  }

  render() {
    return (
      <>
        <h1>Wybierz walutę (produkt)</h1>
        <select value={this.state.product} name="product" value={this.state.product} onChange={this.handleChange}>
          <option value="default">Wybierz opcję</option>
          <option value="pln">złotówka</option>
          <option value="gasoline">benzyna</option>
          <option value="orange">pomarańcza</option>
        </select>
        <br />
        <label>
          <input value={this.state.amount} name='amount' type='number' onChange={this.handleChange}/>
          {this.state.textToDisplay}
        </label>
        <br />
        <div>$$$: {this.state.priceValueInDollars}</div>
        <br />
        <div>Euro: {this.state.priceValueInEuro}</div>
      </>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));