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
    let date = day + '/' + month + '/' + year;
    this.props.updateCheckIn(date);
  }

  underlineButton() {
    let decoration = this.state.textDecor === 'none' ? 'underline' : 'none';

    this.setState({
      textDecor: decoration
    })
  }

  render() {
    let calendarMay = (
      <tbody>
        <tr>
          <td className='emptyDay'></td>
          <td className='emptyDay'></td>
          <td className='emptyDay'></td>
          <td className='day'
           onClick={() => {
             this.handleDateClick(this.props.currCalendar[0].date);
             this.selectChangeColor();
           }}
           style={{
             backgroundColor: this.state.boxColor,
             color: this.state.textColor
           }}
           onMouseOver={() => {
             this.hoverChangeColor();
           }}
           onMouseLeave={() => {
             this.hoverChangeColor();
           }}
           >1</td>
          <td className='unavailableDay'>2</td>
          <td className='day'>3</td>
          <td className='day'>4</td>
        </tr>
        <tr>
          <td className='day'>5</td>
          <td className='day'>6</td>
          <td className='day'>7</td>
          <td className='day'>8</td>
          <td className='unavailableDay'>9</td>
          <td className='day'>10</td>
          <td className='day'>11</td>
        </tr>
        <tr>
          <td className='day'>12</td>
          <td className='day'>13</td>
          <td className='day'>14</td>
          <td className='day'>15</td>
          <td className='unavailableDay'>16</td>
          <td className='unavailableDay'>17</td>
          <td className='day'>18</td>
        </tr>
        <tr>
          <td className='day'>19</td>
          <td className='unavailableDay'>20</td>
          <td className='day'>21</td>
          <td className='day'>22</td>
          <td className='day'>23</td>
          <td className='day'>24</td>
          <td className='day'>25</td>
        </tr>
        <tr>
          <td className='day'>26</td>
          <td className='day'>27</td>
          <td className='day'>28</td>
          <td className='day'>29</td>
          <td className='day'>30</td>
          <td className='unavailableDay'>31</td>
          <td className='emptyDay'></td>
        </tr>
      </tbody>
    )
    
    let calendarJune = (
        <tbody>
          <tr>
            <td className='emptyDay'></td>
            <td className='emptyDay'></td>
            <td className='emptyDay'></td>
            <td className='emptyDay'></td>
            <td className='emptyDay'></td>
            <td className='emptyDay'></td>
            <td className='day'>1</td>
          </tr>
          <tr>
            <td className='day'>2</td>
            <td className='day'>3</td>
            <td className='day'>4</td>
            <td className='day'>5</td>
            <td className='day'>6</td>
            <td className='day'>7</td>
            <td className='day'>8</td>
          </tr>
          <tr>
            <td className='day'>9</td>
            <td className='day'>10</td>
            <td className='day'>11</td>
            <td className='day'>12</td>
            <td className='day'>13</td>
            <td className='day'>14</td>
            <td className='day'>15</td>
          </tr>
          <tr>
            <td className='day'>16</td>
            <td className='day'>17</td>
            <td className='day'>18</td>
            <td className='day'>19</td>
            <td className='day'>20</td>
            <td className='day'>21</td>
            <td className='day'>22</td>
          </tr>
          <tr>
            <td className='day'>23</td>
            <td className='day'>24</td>
            <td className='day'>25</td>
            <td className='day'>26</td>
            <td className='day'>27</td>
            <td className='day'>28</td>
            <td className='day'>29</td>
          </tr>
          <tr>
            <td className='day'>30</td>
            <td className='emptyDay'></td>
            <td className='emptyDay'></td>
            <td className='emptyDay'></td>
            <td className='emptyDay'></td>
            <td className='emptyDay'></td>
            <td className='emptyDay'></td>
          </tr>
        </tbody>
    )

    let calendarJuly = (
        <tbody>
          <tr>
            <td className='emptyDay'></td>
            <td className='day'>1</td>
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
    )

    return (
      <div className='monthContainer'>
      <table>
        {this.props.currMonth === 'May' && calendarMay}
        {this.props.currMonth === 'June' && calendarJune}
        {this.props.currMonth === 'July' && calendarJuly}
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