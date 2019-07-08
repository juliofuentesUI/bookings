import React from 'react';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestTotal: '1 guest',
      guestAdult: 1,
      guestChildren: 0,
      guestInfant: 0,
      guestColor: '#fff',
      guestText: '#757575',
      guestArrow: 'https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ExpandMore-512.png',
      borderBottom: '1px solid #e4e4e4',
      showPanel: false
    }

    this.updateGuestField.bind(this);
    this.showGuestsPanel.bind(this);
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

  showGuestsPanel() {
    let show = this.state.showPanel ? false : true;
    let bottom = this.state.borderBottom === '1px solid #e4e4e4' ? '2px solid #007A87' : '1px solid #e4e4e4';
    this.setState({
      showPanel: show,
      borderBottom: bottom
    })
  }

  render() {
    let guestsPanel = (
      <div className='guestsPanel'>

        <div className='guestsType'>
          <p className='guestsOptionAdults'>Adults</p>
        </div>

        <div className='guestsType'>
          <p className='guestsOption'>Children</p>
          <p className='extraOptionInfo'>Ages 2-12</p>
        </div>

        <div className='guestsType'>
          <p className='guestsOption'>Infants</p>
          <p className='extraOptionInfo'>Under 2</p>
        </div>

        <div className='guestsType'>
          <p className='extraGuestInfo'>
            2 guests maximum. Infants don't count toward the number of guests.
          </p>
        </div>

        <div className='guestsClose'>
          <button className='closeBtn'
           onClick={() => {
             this.updateGuestField();
             this.showGuestsPanel();
          }}>Close</button>

        </div>
      </div>
    )

    return (
      <div className='guests'>
        <h5 className='guestsLabel'>Guests</h5>
        <button className='fieldBox'
         style={{borderBottom: this.state.borderBottom}}
         onClick={() => {
           this.updateGuestField();
           this.showGuestsPanel();
        }}>
            
          <div className='guestsBtn'
           style={{
             backgroundColor: this.state.guestColor,
             color: this.state.guestText
          }}>{this.state.guestTotal}</div>

          <img src={this.state.guestArrow} className='guestsArrow'/>

        </button>

        {this.state.showPanel && guestsPanel}
      </div>
    )
  }
}

export default Guests;