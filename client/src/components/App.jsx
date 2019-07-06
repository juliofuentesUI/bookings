import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: {}
    }
  }

  render() {
    return (
      <div className='bookings'>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default App;