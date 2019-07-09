import React from 'react';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {},
      guestTotal: '1 guest',
      guestAdults: 1,
      guestChildren: 0,
      guestInfants: 0
    }
  }

  componentDidMount() {
    fetch('/rooms/bookings/listings')
    .then(res => res.json())
    .then((result) => {
      console.log(result[0]);
      this.setState({
        listing: result[0]
      })
    },
    (err) => {
      console.log('ERROR ON MOUNT: ' + err);
    })
  }

  updateGuestTotal(type, guest) {
    if (type === 'add') {
      if (guest === 'adult') {
        this.setState({
          guestAdults: this.state.guestAdults+1
        })
      } else if (guest === 'children') {
        this.setState({
          guestChildren: this.state.guestChildren+1
        })
      } else if (guest === 'infants') {
        this.setState({
          guestInfants: this.state.guestInfants+1
        })
      }
    } else {
      if (guest === 'adult') {
        if (this.state.guestAdults !== 0) {
          this.setState({
            guestAdults: this.state.guestAdults-1
          })
        }
      } else if (guest === 'children') {
        if (this.state.guestChildren !== 0) {
          this.setState({
            guestChildren: this.state.guestChildren-1
          })
        }
      } else if (guest === 'infants') {
        if (this.state.guestInfants !== 0) {
          this.setState({
            guestInfants: this.state.guestInfants-1
          })
        }
      }
    }
  }

  render() {
    let price = (Number(this.state.listing.price_per_night)).toString();

    return (
      <div className='bookings'>
        <h1 className='dollarSign'>$</h1>
        <h1 className='price'>{price}</h1>
        <p className='perNight'>per night</p>

        <div className='starContainer'>
          <img src='https://i.ibb.co/NWJ1j37/new-Teal-Star.png' className='stars'/>
          <img src='https://i.ibb.co/NWJ1j37/new-Teal-Star.png' className='stars'/>
          <img src='https://i.ibb.co/NWJ1j37/new-Teal-Star.png' className='stars'/>
          <img src='https://i.ibb.co/NWJ1j37/new-Teal-Star.png' className='stars'/>
          <img src='https://i.ibb.co/NWJ1j37/new-Teal-Star.png' className='stars'/>
          <p className='reviewCount'>214</p>
        </div>

        <div className='bookingFields'>
          <Dates />

          <Guests 
           house={this.state.listing}
           total={this.state.guestTotal}
           adults={this.state.guestAdults}
           children={this.state.guestChildren}
           infants={this.state.guestInfants}
           updateGuest={this.updateGuestTotal.bind(this)}
          />

          {/* <Quote /> */}
          
          <button className='bookBtn'>Book</button>
          <p className='noCharge'>You won't be charged yet</p>
        </div>

        <p className='highlight'>
          This place is getting a lot of attention.
          <img src='https://a0.muscache.com/airbnb/static/packages/icon-uc-light-bulb.1ffc0407.gif' className='lightBulb'/>
        </p>
        <p className='successMetric'>It’s been viewed 500+ times in the past week.</p>
      </div>
    )
  }
}

export default App;