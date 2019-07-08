import React from 'react';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: '',
      checkOutDate: '',
      checkInColor: '#fff',
      checkOutColor: '#fff',
      checkInText: '#757575',
      checkOutText: '#757575'
    }
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

  render() {
    return (
      <div className='dates'>
        <h5 className='datesLabel'>Dates</h5>
        <div className='fieldBox'>

          <div className='datesBtn'
          onClick={() => {
            this.updateColor('Check-in');
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
      </div>
    )
  }
}

export default Dates;