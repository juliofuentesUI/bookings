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
        <h5 className='datesLabel'>Dates</h5>
        <div className='fieldBox'>
          {/* <input type='text' className='field' placeholder='Check-in'></input> */}
          <button className='fieldBtn'>Check-in</button>
          <div className='arrow'>
              <img src='https://i.ibb.co/Xbr3WN0/rightfacingarrow.png'/>
          </div>
          {/* <input type='text' className='field' placeholder='Checkout'></input> */}
          <button className='fieldBtn'>Checkout</button>
        </div>
      </div>
    )
  }
}

export default Dates;