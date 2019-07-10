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
        <table>
          <tbody>
            <tr>
              <td className='emptyDay'></td>
              <td className='day unavailableDay'>1</td>
              <td className='day'>2</td>
              <td className='day'>3</td>
              <td className='day'>4</td>
              <td className='day'>5</td>
              <td className='day'>6</td>
            </tr>
            <tr>
              <td className='day'>7</td>
              <td className='day'>8</td>
              <td className='day'>9</td>
              <td className='day unavailableDay'>10</td>
              <td className='day'>11</td>
              <td className='day'>12</td>
              <td className='day'>13</td>
            </tr>
            <tr>
              <td className='day'>14</td>
              <td className='day'>15</td>
              <td className='day unavailableDay'>16</td>
              <td className='day unavailableDay'>17</td>
              <td className='day unavailableDay'>18</td>
              <td className='day'>19</td>
              <td className='day'>20</td>
            </tr>
            <tr>
              <td className='day'>21</td>
              <td className='day'>22</td>
              <td className='day'>23</td>
              <td className='day'>24</td>
              <td className='day'>25</td>
              <td className='day'>26</td>
              <td className='day'>27</td>
            </tr>
            <tr>
              <td className='day'>28</td>
              <td className='day unavailableDay'>29</td>
              <td className='day unavailableDay'>30</td>
              <td className='day unavailableDay'>31</td>
              <td className='emptyDay'></td>
              <td className='emptyDay'></td>
              <td className='emptyDay'></td>
            </tr>
          </tbody>
        </table>
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