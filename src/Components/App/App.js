import './App.css';
import { months } from '../../months_data';
import { Component } from 'react';
import BdayContainer from './BdayContainer';
import { getAllBdays } from './apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      months: months,
      birthdays :[]
    }
  }

  componentDidMount = () => {
    return getAllBdays()
      .then(data => {
        this.setState({birthdays: data})
      })
  }

  render = () => {
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <div className='bday-form'/>
        <BdayContainer 
          months={this.state.months}
          birthdays={this.state.birthdays}
          className='bday-container'/>
      </div>
    )
  }


}

export default App;
