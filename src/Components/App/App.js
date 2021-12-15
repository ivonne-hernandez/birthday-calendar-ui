import './App.css';
import { months } from '../../months_data';
import { Component } from 'react';
import BdayContainer from './BdayContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      months: months
    }
  }

  render = () => {
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <div className='bday-form'/>
        <BdayContainer 
          months={this.state.months}
          className='bday-container'/>
      </div>
    )
  }


}

export default App;
