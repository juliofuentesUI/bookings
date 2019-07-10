import React from 'react';
import { tsNumberKeyword } from '@babel/types';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: '',
      checkOutDate: '',
      checkInColor: '#fff',
      checkOutColor: '#fff',
      checkInText: '#757575',
      checkOutText: '#757575',
      showCalendar: false
    }

    this.showCalendarPopUp = this.showCalendarPopUp.bind(this);
  }

  updateColor(type) {
    if (type === 'Check-in') {
      let color = this.state.checkInColor === '#fff' ? '#99EDE6' : '#fff';
      let textColor = this.state.checkInText === '#757575' ? '#007A87' : '#757575' ;
      this.setState({
        checkInColor: color,
        checkInText: textColor
      })
    } else if (type === 'Checkout') {
      let color = this.state.checkOutColor === '#fff' ? '#99EDE6' : '#fff';
      let textColor = this.state.checkOutText === '#757575' ? '#007A87' : '#757575' ;
      this.setState({
        checkOutColor: color,
        checkOutText: textColor
      })
    }
  }

  showCalendarPopUp() {
    let show = this.state.showCalendar ? false : true;

    this.setState({
      showCalendar: show
    })
  }

  render() {
    let calendarPopUp = (
      <div className='calendarContainer'>
        <div className='swapMonth'>
          <img src='https://i.ibb.co/QkSRK9K/leftfacingarrow.png' className='calendarArrow'/>
        </div>
        <p className='currentMonth'>July 2019</p>
        <div className='swapMonth'>
          <img src='https://i.ibb.co/Xbr3WN0/rightfacingarrow.png' className='calendarArrow'/>
        </div>
        <ul className='daysContainer'>
          <li className='weekdays firstDay'>Su</li>
          <li className='weekdays'>Mo</li>
          <li className='weekdays'>Tu</li>
          <li className='weekdays'>We</li>
          <li className='weekdays'>Th</li>
          <li className='weekdays'>Fr</li>
          <li className='weekdays'>Sa</li>
        </ul>
      </div>
    )

    return (
      <div className='dates'>
        <h5 className='datesLabel'>Dates</h5>
        <div className='fieldBox'>

          <div className='datesBtn'
          onClick={() => {
            this.updateColor('Check-in');
            this.showCalendarPopUp();
          }} 
          style={{
            backgroundColor: this.state.checkInColor, 
            color: this.state.checkInText
          }}>Check-in</div>
          
          <div className='datesArrow'>
            <img src='https://i.ibb.co/Xbr3WN0/rightfacingarrow.png'/>
          </div>
          
          <div className='datesBtn' 
          onClick={() => {
            this.updateColor('Checkout');
          }} 
          style={{
            backgroundColor: this.state.checkOutColor, 
            color: this.state.checkOutText
          }}>Checkout</div>
        
        </div>

        {this.state.showCalendar && calendarPopUp}

      </div>
    )
  }
}

export default Dates;