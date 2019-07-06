import React from 'react';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: '',
      checkOut: '',
      month: 'June'
    }
  }

  render() {
    return (
      <div className='dates'>
        <h5 className='fieldLabel'>Dates</h5>
        <div className='dateBox'>
          <input type='text' className='field' placeholder='Check-in'></input>
          <div className='arrow'></div>
          <input type='text' className='field' placeholder='Checkout'></input>
        </div>
      </div>
    )
  }
}

export default Dates;