import React from 'react';
import Dates from './Dates.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: {}
    }
  }

  render() {
    return (
      <div className='bookings'>
        <h1 className='dollarSign'>$</h1>
        <h1 className='price'>68</h1>
        <p className='perNight'>per night</p>
        <div className='bookingFields'>
          <Dates />
          {/* <Guests />
          <Quote /> */}
          <button>Book</button>
          <p className='noCharge'>You won't be charged yet</p>
        </div>
        <p className='highlight'>This place is getting a lot of attention.</p>
        <p className='successMetric'>It’s been viewed 500+ times in the past week.</p>
      </div>
    )
  }
}

export default App;