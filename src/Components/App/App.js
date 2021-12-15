import './App.css';
import { months } from '../../months_data';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      birthdays: []
    }
  }

  render = () => {
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <div className='bday-form'>

        </div>
        <div className='bday-container'>

        </div>
      </div>
    )
  }


}

export default App;
