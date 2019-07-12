import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: '',
      checkOutDate: '',
      boxColor: '#fff',
      textColor: '#484848',
      textDecor: 'none'
    }

    this.handleDateClick = this.handleDateClick.bind(this);
    this.selectChangeColor = this.selectChangeColor.bind(this);
    this.unselectChangeColor = this.unselectChangeColor.bind(this);
    this.underlineButton = this.underlineButton.bind(this);
  }

  hoverChangeColor() {
    let backgroundColor;
    
    if (this.state.boxColor === '#e4e4e4') {
      backgroundColor = '#fff';
    } else if (this.state.boxColor === '#fff') {
      backgroundColor = '#e4e4e4';
    } else if (this.state.boxColor === '#00A699') {
      backgroundColor = '#00A699';
    }

    this.setState({
      boxColor: backgroundColor
    })
  }

  selectChangeColor() {
    let backgroundColor = '#00A699';
    let numColor = '#fff';

    this.setState({
      boxColor: backgroundColor,
      textColor: numColor
    })
  }

  unselectChangeColor() {
    let backgroundColor = '#fff';
    let numColor = '#484848';

    this.setState({
      boxColor: backgroundColor,
      textColor: numColor
    })
  }

  handleDateClick(selectedDay) {
    let year = selectedDay.slice(0,4);
    let month = selectedDay.slice(5,7);
    let day = selectedDay.slice(8,10);
    let date = month + '/' + day + '/' + year;
    this.props.updateCheckIn(date);
  }

  underlineButton() {
    let decoration = this.state.textDecor === 'none' ? 'underline' : 'none';

    this.setState({
      textDecor: decoration
    })
  }

  render() {
    return (
      <div className='monthContainer'>
      <table>
        <tbody>
        {this.props.currCalendar.map((week, index) => {
          return (
            <tr key={index}>
              {week.map((day) => (
                <td key={day.id} 
                 className={day.type}
                 onClick={() => {
                   this.handleDateClick(day.date);
                 }}>
                  {day.hasOwnProperty('type') === 'emptyDay' && ''}
                  {day.hasOwnProperty('day') && day.day}
                </td>
              ))}
            </tr>
          )
        })}
        </tbody>
      </table>
      <div className='clearBtnContainer'>
        <button className='clearDatesBtn'
         onClick={() => {
            this.props.updateCheckIn('Check-in');
            this.unselectChangeColor();
            this.props.updateCheckOut('Checkout');
         }}
         onMouseOver={() => {
            this.underlineButton();
         }}
         onMouseLeave={() => {
            this.underlineButton();
         }}
         style={{
            textDecoration: this.state.textDecor
         }}>Clear dates</button>
      </div>
      </div>
    )
  }
}

export default Calendar;