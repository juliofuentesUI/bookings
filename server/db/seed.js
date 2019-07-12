const Listings = require('./index.js').Listings;
const Dates = require('./index.js').Dates;
const Listings_Dates = require('./index.js').Listings_Dates;

const sampleListingsData = [];

const generateSampleListingData = () => {
  for (var i = 0; i < 100; i++) {
    let max = Math.floor(Math.random() * 30);
    let maxGuests = max > 0 ? max : 1;

    let eligibleNum = Math.floor(Math.random() * 2);
    let eligible = eligibleNum >= 1 ? true : false;

    let priceLottery = Math.floor(Math.random() * 500);
    let price = priceLottery > 0 ? priceLottery : 102;

    let randomServiceFee = (Math.random() * 10).toFixed(2);
    let serviceFee = randomServiceFee > 0 ? randomServiceFee : 7.52;

    let cleaningFee = null;
    let extraGuestFee = null;
    let securityDeposit = null;
    let valueAddedTax = null;
    let localTaxes = null;

    if ((Math.floor(Math.random() * 2)) === 1) {
      let hiddenCleaningFee = (Math.random() * 10).toFixed(2);
      cleaningFee = hiddenCleaningFee > 0 ? hiddenCleaningFee : 5.46;
    }

    if ((Math.floor(Math.random() * 2)) === 1) {
      let hiddenExtraGuestFee = (Math.random() * 10).toFixed(2);
      extraGuestFee = hiddenExtraGuestFee > 0 ? hiddenExtraGuestFee : 3.21;
    }

    if ((Math.floor(Math.random() * 2)) === 1) {
      let hiddenSecurityDeposit = (Math.random() * 10).toFixed(2);
      securityDeposit = hiddenSecurityDeposit > 0 ? hiddenSecurityDeposit : 6.15;
    }

    if ((Math.floor(Math.random() * 2)) === 1) {
      let hiddenValueAddedTax = (Math.random() * 10).toFixed(2);
      valueAddedTax = hiddenValueAddedTax > 0 ? hiddenValueAddedTax : 2.78;
    }

    if ((Math.floor(Math.random() * 2)) === 1) {
      let hiddenLocalTaxes = (Math.random() * 10).toFixed(2);
      localTaxes = hiddenLocalTaxes > 0 ? hiddenLocalTaxes : 3.21;
    }

    let listing = {
      max_no_guests: maxGuests,
      infant_guest_eligible: eligible,
      price_per_night: price,
      service_fee: serviceFee,
      cleaning_fee: cleaningFee,
      extra_guest_fee: extraGuestFee,
      security_deposit: securityDeposit,
      value_added_tax: valueAddedTax,
      local_taxes: localTaxes
    }

    sampleListingsData.push(listing);
  }
}

generateSampleListingData();

Listings.bulkCreate(sampleListingsData)
.then(() => {
  return Listings.findAll();
})
.then((data) => {
  console.log(data);
});

const sampleDatesData = [];

const generateSampleDatesData = () => {
  const findCurrentDay = (day) => {
    if (day === 'Sunday') {
      return 'Monday';
    } else if (day === 'Monday') {
      return 'Tuesday';
    } else if (day === 'Tuesday') {
      return 'Wednesday';
    } else if (day === 'Wednesday') {
      return 'Thursday';
    } else if (day === 'Thursday') {
      return 'Friday';
    } else if (day === 'Friday') {
      return 'Saturday';
    } else if (day === 'Saturday') {
      return 'Sunday';
    }
  }
 
  let currentDayFirstMonth = 'Wednesday';

  for (var i = 1; i < 32; i++) {
    let firstMonthDate = {
      date: new Date(2019, 4, i),
      weekday: currentDayFirstMonth,
      month: 'May',
      day: i
    }

    currentDayFirstMonth = findCurrentDay(currentDayFirstMonth);
    sampleDatesData.push(firstMonthDate);
  }

  let currentDaySecondMonth = 'Saturday';

  for (var j = 1; j < 31; j++) {
    let secondMonthDate = {
      date: new Date(2019, 5, j),
      weekday: currentDaySecondMonth,
      month: 'June',
      day: j
    }

    currentDaySecondMonth = findCurrentDay(currentDaySecondMonth);
    sampleDatesData.push(secondMonthDate);
  }

  let currentDayThirdMonth = 'Monday';

  for (var k = 1; k < 32; k++) {
    let thirdMonthDate = {
      date: new Date(2019, 6, k),
      weekday: currentDayThirdMonth,
      month: 'July',
      day: k
    }

    currentDayThirdMonth = findCurrentDay(currentDayThirdMonth);
    sampleDatesData.push(thirdMonthDate);
  }
}

generateSampleDatesData();

Dates.bulkCreate(sampleDatesData)
.then(() => {
  return Dates.findAll();
})
.then((data) => {
  console.log(data);
});

const generateSampleLDData = () => {
  Listings.findAll()
  .then((homes) => {

    Dates.findAll()
    .then((days) => {
      for (var i = 0; i < homes.length; i++) {
        for (var j = 0; j < days.length; j++) {
          let available = ((Math.floor(Math.random() * 2)) === 1) ? true : false;
          let listingDate = {
            available: available,
            listingId: homes[i].dataValues.id,
            dateId: days[j].dataValues.id
          }

          Listings_Dates.create(listingDate);
        }
      }
    })

  })
}

generateSampleLDData();