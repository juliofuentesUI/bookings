import React from 'react';

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
      <div className='fee'>
          Cleaning fee
          <button className='helpBtn'>?</button>
          <div className='charge'>
            ${cleaningFee}
          </div>
      </div>
    )

    let extraGuestFee = Math.round(Number(this.props.house.extra_guest_fee));
    let extraGuestFeeBox = (
      <div className='fee'>
        Extra guest fee
        <button className='helpBtn'>?</button>
        <div className='charge'>
          ${extraGuestFee}
        </div>
      </div>
    )

    let securityDeposit = Math.round(Number(this.props.house.security_deposit));
    let securityDepositBox = (
      <div className='fee'>
        Security deposit
        <button className='helpBtn'>?</button>
        <div className='charge'>
          ${securityDeposit}
        </div>
      </div>
    )

    let valueAddedTax = Math.round(Number(this.props.house.value_added_tax));
    let valueAddedTaxBox = (
      <div className='fee'>
        Value added tax
        <button className='helpBtn'>?</button>
        <div className='charge'>
          ${valueAddedTax}
        </div>
      </div>
    )

    let localTaxes = Math.round(Number(this.props.house.local_taxes));
    let localTaxesBox = (
      <div className='fee'>
        Local taxes
        <button className='helpBtn'>?</button>
        <div className='charge'>
          ${localTaxes}
        </div>
      </div>
    )

    let total = finalPrice + serviceFee + cleaningFee + extraGuestFee 
    + securityDeposit + valueAddedTax + localTaxes;

    return (
      <div className='quotePanel'>
        <div className='fee firstFee'>
          ${price} x {dayCount} {dayCount > 1 ? 'nights' : 'night'}
          <div className='charge'>
            ${finalPrice}
          </div>
        </div>

        {this.props.house.cleaning_fee !== null && cleaningFeeBox}
        {this.props.house.extra_guest_fee !== null && extraGuestFeeBox}
        {this.props.house.security_deposit !== null && securityDepositBox}
        {this.props.house.value_added_tax !== null && valueAddedTaxBox}
        {this.props.house.local_taxes !== null && localTaxesBox}

        <div className='fee'>
          Service fee
          <button className='helpBtn'>?</button>
          <div className='charge'>
            ${serviceFee}
          </div>
        </div>
        <div className='total'>
          Total
          <div className='charge'>
            ${total}
          </div>
        </div>
      </div>
    )
  }
}

export default Quote;