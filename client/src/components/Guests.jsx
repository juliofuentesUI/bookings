import React from 'react';
import style from '../style.css';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestColor: '#fff',
      guestText: '#757575',
      guestArrow: 'https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ExpandMore-512.png',
      guestPadding: '3px 0 3px 5px',
      infantPadding: '3px 5px 3px 0',
      borderBottom: '1px solid #e4e4e4',
      boxHeight: '42px',
      addBtnBorder: '1px solid #007A87',
      addBtnText: '#007A87',
      subtractBtnBorder: '1px solid rgba(0, 132, 137, 0.3)',
      subtractBtnText: 'rgba(0, 132, 137, 0.3)',
      showPanel: false
    }

    this.updateGuestField = this.updateGuestField.bind(this);
    this.showGuestsPanel = this.showGuestsPanel.bind(this);
    this.updateButtonColor = this.updateButtonColor.bind(this);
  }

  updateGuestField() {
    let color = this.state.guestColor === '#fff' ? '#99EDE6' : '#fff';
    let textColor = this.state.guestText === '#757575' ? '#007A87' : '#757575';
    let padding = this.state.guestPadding === '3px 0 3px 5px' ? '6px 8px' : '3px 0 3px 5px';
    let babyPadding = this.state.infantPadding === '3px 5px 3px 0' ? '6px 0' : '3px 5px 3px 0';
    let arrowDir;

    if (this.state.guestArrow === 'https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ExpandMore-512.png') {
      arrowDir = 'https://i.ibb.co/2SdTGMC/Expand-More-512.png';
    } else {
      arrowDir = 'https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ExpandMore-512.png';
    }
    
    this.setState({
      guestColor: color,
      guestText: textColor,
      guestArrow: arrowDir,
      guestPadding: padding,
      infantPadding: babyPadding
    })
  }

  showGuestsPanel() {
    let show = this.state.showPanel ? false : true;
    let bottom = this.state.borderBottom === '1px solid #e4e4e4' ? '2px solid #007A87' : '1px solid #e4e4e4';
    let height = this.state.boxHeight === '42px' ? '50px' : '42px';

    this.setState({
      showPanel: show,
      borderBottom: bottom,
      boxHeight: height
    })
  }

  updateButtonColor(type) {
    let amount = type === 'add' ? this.props.total+1 : this.props.total-1;
    if (amount >= this.props.maxGuestCount) {
      this.setState({
        addBtnBorder: '1px solid rgba(0, 132, 137, 0.3)',
        addBtnText: 'rgba(0, 132, 137, 0.3)',
        subtractBtnBorder: '1px solid #007A87',
        subtractBtnText: '#007A87'
      })
    } else {
      this.setState({
        addBtnBorder: '1px solid #007A87',
        addBtnText: '#007A87',
        subtractBtnBorder: '1px solid rgba(0, 132, 137, 0.3)',
        subtractBtnText: 'rgba(0, 132, 137, 0.3)'
      })
    }
  }

  render() {
    let guestInfantInfo = this.props.infantEligibility ? 'count' : 'don\'t count';
    let guestSyntax = this.props.total === 1 ? 'guest' : 'guests';
    let infantSyntax;

    if (!this.props.infantEligibility) {
      if (this.props.infants > 1) {
        infantSyntax = ', ' + this.props.infants + ' infants';
      } else if (this.props.infants === 1) {
        infantSyntax = ', ' + this.props.infants + ' infant';
      }
    }

    let guestsPanel = (
      <div className={style.guestsPanel}>
        <div className={style.guestsType}>
          <div className={style.guestsOptionAdults}>Adults 
            <button className={`${style.addBtn} ${style.addAdultsCountBtn}`} 
             onClick={() => {
               this.props.updateGuest('add', 'adults');
               this.updateButtonColor('add');
             }}
             style={{
               border: this.state.addBtnBorder,
               color: this.state.addBtnText
             }}>+</button>
            <div className={`${style.guestsCount} ${style.guestsAdultsCount}`}>{this.props.adults}</div>
            <button className={`${style.subtractBtn} ${style.subtractAdultsCountBtn}`}
             onClick={() => {
               this.props.updateGuest('subtract', 'adults');
               this.updateButtonColor('subtract');
             }}
             style={{
               border: this.state.subtractBtnBorder,
               color: this.state.subtractBtnText
             }}>-</button>
          </div>
        </div>

        <div className={style.guestsType}>
          <div className={style.guestsOption}>Children
            <button className={`${style.addBtn} ${style.addChildrenCountBtn}`}
             onClick={() => {
               this.props.updateGuest('add', 'children');
               this.updateButtonColor('add');
             }}
             style={{
                border: this.state.addBtnBorder,
                color: this.state.addBtnText
             }}>+</button>
            <div className={`${style.guestsCount} ${style.guestsChildrenCount}`}>{this.props.children}</div>
            <button className={`${style.subtractBtn} ${style.subtractChildrenCountBtn}`}
             onClick={() => {
               this.props.updateGuest('subtract', 'children');
               this.updateButtonColor('subtract');
             }}
             style={{
                border: this.state.subtractBtnBorder,
                color: this.state.subtractBtnText
             }}>-</button>
          </div>
          <p className={style.extraOptionInfo}>Ages 2-12</p>
        </div>

        <div className={style.guestsType}>
          <div className={style.guestsOption}>Infants
            <button className={`${style.addBtn} ${style.addInfantsCountBtn}`}
             onClick={() => {
               this.props.updateGuest('add', 'infants');
             }}>+</button>
            <div className={`${style.guestsCount} ${style.guestsInfantsCount}`}>{this.props.infants}</div>
            <button className={`${style.subtractBtn} ${style.subtractInfantsCountBtn}`}
             onClick={() => {
               this.props.updateGuest('subtract', 'infants');
             }}>-</button>
          </div>
          <p className={style.extraOptionInfo}>Under 2</p>
        </div>

        <div className={style.guestsType}>
          <p className={style.extraGuestInfo}>
            {this.props.maxGuestCount} guests maximum. Infants {guestInfantInfo} toward the number of guests.
          </p>
        </div>

        <div className={style.guestsClose}>
          <button className={style.closeBtn}
           onClick={() => {
             this.updateGuestField();
             this.showGuestsPanel();
           }}>Close</button>

        </div>
      </div>
    )

    return (
      <div className={style.guests}>
        <h5 className={style.guestsLabel}>Guests</h5>
        <button className={style.fieldBox}
         style={{
           borderBottom: this.state.borderBottom,
           height: this.state.boxHeight
         }}
         onClick={() => {
           this.updateGuestField();
           this.showGuestsPanel();
         }}>
            
          <div className={style.guestsBtn}
           style={{
             backgroundColor: this.state.guestColor,
             color: this.state.guestText,
             padding: this.state.guestPadding
           }}>{this.props.total} {guestSyntax}
          </div>

          <span className={style.infantsCount}
           style={{
             padding: this.state.infantPadding
           }}>{!this.props.infantEligibility && infantSyntax}</span>

          <img src={this.state.guestArrow} className={style.guestsArrow}/>

        </button>

        {this.state.showPanel && guestsPanel}
      </div>
    )
  }
}

export default Guests;