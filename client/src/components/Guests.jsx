import React from 'react';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestTotal: '1 guest',
      guestColor: '#fff',
      guestText: '#757575',
      guestArrow: 'https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ExpandMore-512.png'
    }
  }

  updateGuestField() {
    let color = this.state.guestColor === '#fff' ? '#99EDE6' : '#fff';
    let textColor = this.state.guestText === '#757575' ? '#007A87' : '#757575';
    let arrowDir;

    if (this.state.guestArrow === 'https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ExpandMore-512.png') {
      arrowDir = 'https://i.ibb.co/2SdTGMC/Expand-More-512.png';
    } else {
      arrowDir = 'https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ExpandMore-512.png';
    }
    
    this.setState({
      guestColor: color,
      guestText: textColor,
      guestArrow: arrowDir
    })
  }

  render() {
    return (
      <div className='guests'>
        <h5 className='guestsLabel'>Guests</h5>
          <button className='fieldBox' 
          onClick={() => {
            this.updateGuestField();
          }}>
            
            <div className='guestsBtn' 
            style={{
                backgroundColor: this.state.guestColor, 
                color: this.state.guestText
            }}>{this.state.guestTotal}</div>

            <img src={this.state.guestArrow} className='downArrow'/>
          </button>  
      </div>
    )
  }
}

export default Guests;