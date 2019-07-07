import React from 'react';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestTotal: 1
    }
  }

  render() {
    return (
      <div className='guests'>
        <h5 className='guestsLabel'>Guests</h5>
        <div className='fieldBox'>
          <input type='text' className='field' value='1 guest'></input>
          <img src='https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ExpandMore-512.png' className='downArrow'/>
        </div>
      </div>
    )
  }
}

export default Guests;