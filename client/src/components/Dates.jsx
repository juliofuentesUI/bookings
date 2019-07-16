import React from 'react';
import Calendar from './Calendar.jsx';
import style from '../style.css';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInColor: '#fff',
      checkOutColor: '#fff',
      checkInText: '#757575',
      checkOutText: '#757575',
      showCheckInCalendar: false,
      showCheckOutCalendar: false
    }

    this.updateColor = this.updateColor.bind(this);
    this.showCheckInCalendarPopUp = this.showCheckInCalendarPopUp.bind(this);
    this.showCheckOutCalendarPopUp = this.showCheckOutCalendarPopUp.bind(this);
  }

  updateColor(type) {
    if (type === 'Check-in') {
      let color = this.state.checkInColor === '#fff' ? '#99EDE6' : '#fff';
      let textColor = this.state.checkInText === '#757575' ? '#007A87' : '#757575' ;
      this.setState({
        checkInColor: color,
        checkInText: textColor,
        checkOutColor: '#fff',
        checkOutText: '#757575'
      })
    } else if (type === 'Checkout') {
      let color = this.state.checkOutColor === '#fff' ? '#99EDE6' : '#fff';
      let textColor = this.state.checkOutText === '#757575' ? '#007A87' : '#757575' ;
      this.setState({
        checkOutColor: color,
        checkOutText: textColor,
        checkInColor: '#fff',
        checkInText: '#757575'
      })
    }
  }

  showCheckInCalendarPopUp() {
    let show = this.state.showCheckInCalendar ? false : true;

    this.setState({
      showCheckInCalendar: show,
      showCheckOutCalendar: false
    })
  }

  showCheckOutCalendarPopUp() {
    let show = this.state.showCheckOutCalendar ? false : true;

    this.setState({
      showCheckInCalendar: false,
      showCheckOutCalendar: show
    })
  }

  changeMonth(type, currentMonth) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let index = months.indexOf(currentMonth);
    let nextMonth;

    if (type === 'previous') {
      if (currentMonth !== 'January') {
        nextMonth = months[index-1];
      }
    } else if (type === 'next') {
      if (currentMonth !== 'December') {
        nextMonth = months[index+1];
      }
    }

    this.props.fetchDates(nextMonth);
  }

  render() {
    let calendarCheckInPopUp = (
      <div className={style.calendarCheckInContainer}>
        <div className={style.swapMonth}>
          <img src='https://i.ibb.co/QkSRK9K/leftfacingarrow.png'
           className={style.calendarArrow}
           onClick={() => {
             this.changeMonth('previous', this.props.month);
           }}/>
        </div>
        <p className={style.currentMonth}>{this.props.month} 2019</p>
        <div className={style.swapMonth}>
          <img src='https://i.ibb.co/Xbr3WN0/rightfacingarrow.png'
           className={style.calendarArrow}
           onClick={() => {
             this.changeMonth('next', this.props.month);
           }}/>
        </div>
        <ul className={style.daysContainer}>
          <li className={`${style.weekdays} ${style.firstDay}`}>Su</li>
          <li className={style.weekdays}>Mo</li>
          <li className={style.weekdays}>Tu</li>
          <li className={style.weekdays}>We</li>
          <li className={style.weekdays}>Th</li>
          <li className={style.weekdays}>Fr</li>
          <li className={style.weekdays}>Sa</li>
        </ul>
        <Calendar 
         currMonth={this.props.month}
         currCalendar={this.props.calendar}
         updateCheckIn={this.props.selectCheckIn}
         updateCheckOut={this.props.selectCheckOut}
         showCheckIn={this.state.showCheckInCalendar}
         showCheckOut={this.state.showCheckOutCalendar}
         updateDateColor={this.updateColor}
         showCheckOutPopUp={this.showCheckOutCalendarPopUp}/>
      </div>
    )

    let calendarCheckOutPopUp = (
      <div className={style.calendarCheckOutContainer}>
        <div className={style.swapMonth}>
          <img src='https://i.ibb.co/QkSRK9K/leftfacingarrow.png'
           className={style.calendarArrow}
           onClick={() => {
             this.changeMonth('previous', this.props.month);
           }}/>
        </div>
        <p className={style.currentMonth}>{this.props.month} 2019</p>
        <div className={style.swapMonth}>
          <img src='https://i.ibb.co/Xbr3WN0/rightfacingarrow.png'
           className={style.calendarArrow}
           onClick={() => {
             this.changeMonth('next', this.props.month);
           }}/>
        </div>
        <ul className={style.daysContainer}>
          <li className={`${style.weekdays} ${style.firstDay}`}>Su</li>
          <li className={style.weekdays}>Mo</li>
          <li className={style.weekdays}>Tu</li>
          <li className={style.weekdays}>We</li>
          <li className={style.weekdays}>Th</li>
          <li className={style.weekdays}>Fr</li>
          <li className={style.weekdays}>Sa</li>
        </ul>
        <Calendar 
         currMonth={this.props.month}
         currCalendar={this.props.calendar}
         checkInDate={this.props.checkIn}
         updateCheckIn={this.props.selectCheckIn}
         updateCheckOut={this.props.selectCheckOut}
         showCheckIn={this.state.showCheckInCalendar}
         showCheckOut={this.state.showCheckOutCalendar}
         updateDateColor={this.updateColor}
         showCheckOutPopUp={this.showCheckOutCalendarPopUp}
         showCheckInPopUp={this.showCheckInCalendarPopUp}/>
      </div>
    )

    return (
      <div className={style.dates}>
        <h5 className={style.datesLabel}>Dates</h5>
        <div className={style.fieldBox}>

          <div className={style.datesBtn}
          onClick={() => {
            this.updateColor('Check-in');
            this.showCheckInCalendarPopUp();
            this.props.fetchDates('June');
          }} 
          style={{
            backgroundColor: this.state.checkInColor, 
            color: this.state.checkInText
          }}>{this.props.checkIn}</div>
          
          <div className={style.datesArrow}>
            <img src='https://i.ibb.co/Xbr3WN0/rightfacingarrow.png' className={style.rightFaceArrow}/>
          </div>
          
          <div className={style.datesBtn} 
          onClick={() => {
            this.updateColor('Checkout');
            this.showCheckOutCalendarPopUp();
            this.props.fetchDates('June');
          }} 
          style={{
            backgroundColor: this.state.checkOutColor, 
            color: this.state.checkOutText
          }}>{this.props.checkOut}</div>
        
        </div>

        {this.state.showCheckInCalendar && calendarCheckInPopUp}
        {this.state.showCheckOutCalendar && calendarCheckOutPopUp}

      </div>
    )
  }
}

export default Dates;