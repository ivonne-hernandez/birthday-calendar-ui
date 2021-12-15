import { Component } from 'react';

class BdayForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ``, 
      month: ``,
      day: ``
    }
  }

  render = () => {
    return (
      <form className='Bday-active-input-form'>
        <label>
          Name:
          <input 
            className='name-input'
            placeholder='name'
            type="text"
            name="name"
            value={this.state.name}
            onChange={event => {this.handleInputChange(event)}}
          />
        </label>
        <label>
          Month:
        <input 
          className='month-input'
          placeholder='month'
          type="number"
          name="month"
          value={this.state.month}
          onChange={event => {this.handleInputChange(event)}}
        />
        </label>
        <label>
          Day:
        <input 
          className='day-input'
          placeholder='day'
          type="number"
          name="day"
          value={this.state.day}
          onChange={event => {this.handleInputChange(event)}}
        />
        </label>
        <button
          className='add-this-bday-button'
          onClick={this.addNewBday}
        > Add this birthday!
        </button>
      </form>
    )
  }

}
export default BdayForm;