import React from 'react';
import style from '../style.css';

class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let price = Math.round(this.props.house.price_per_night);
    let checkInDate = new Date(this.props.checkInDate);
    let checkOutDate = new Date(this.props.checkOutDate);
    let dayCount = (checkOutDate - checkInDate)/(60 * 60 * 24 * 1000);
    let finalPrice = price * dayCount;
    let serviceFee = Math.round(this.props.house.service_fee);

    let cleaningFee = Math.round(Number(this.props.house.cleaning_fee));
    let cleaningFeeBox = (
      <div className={style.fee}>
          Cleaning fee
          <button className={style.helpBtn}>?</button>
          <div className={style.charge}>
            ${cleaningFee}
          </div>
      </div>
    )

    let extraGuestFee = Math.round(Number(this.props.house.extra_guest_fee));
    let extraGuestFeeBox = (
      <div className={style.fee}>
        Extra guest fee
        <button className={style.helpBtn}>?</button>
        <div className={style.charge}>
          ${extraGuestFee}
        </div>
      </div>
    )

    let securityDeposit = Math.round(Number(this.props.house.security_deposit));
    let securityDepositBox = (
      <div className={style.fee}>
        Security deposit
        <button className={style.helpBtn}>?</button>
        <div className={style.charge}>
          ${securityDeposit}
        </div>
      </div>
    )

    let valueAddedTax = Math.round(Number(this.props.house.value_added_tax));
    let valueAddedTaxBox = (
      <div className={style.fee}>
        Value added tax
        <button className={style.helpBtn}>?</button>
        <div className={style.charge}>
          ${valueAddedTax}
        </div>
      </div>
    )

    let localTaxes = Math.round(Number(this.props.house.local_taxes));
    let localTaxesBox = (
      <div className={style.fee}>
        Local taxes
        <button className={style.helpBtn}>?</button>
        <div className={style.charge}>
          ${localTaxes}
        </div>
      </div>
    )

    let total = finalPrice + serviceFee + cleaningFee + extraGuestFee 
    + securityDeposit + valueAddedTax + localTaxes;

    return (
      <div className={style.quotePanel}>
        <div className={`${style.fee} ${style.firstFee}`}>
          ${price} x {dayCount} {dayCount > 1 ? 'nights' : 'night'}
          <div className={style.charge}>
            ${finalPrice}
          </div>
        </div>

        {this.props.house.cleaning_fee !== null && cleaningFeeBox}
        {this.props.house.extra_guest_fee !== null && extraGuestFeeBox}
        {this.props.house.security_deposit !== null && securityDepositBox}
        {this.props.house.value_added_tax !== null && valueAddedTaxBox}
        {this.props.house.local_taxes !== null && localTaxesBox}

        <div className={style.fee}>
          Service fee
          <button className={style.helpBtn}>?</button>
          <div className={style.charge}>
            ${serviceFee}
          </div>
        </div>
        <div className={style.total}>
          Total
          <div className={style.charge}>
            ${total}
          </div>
        </div>
      </div>
    )
  }
}

export default Quote;