// DELETE

const Sequelize = require('sequelize');
const connection = new Sequelize('bookings', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
})

connection
  .authenticate()
  .then(() => {
    console.log('Connection to DB was successful!');
  })
  .catch((err) => {
    console.log('ERROR! Unable to connect to DB, more details here: ' + err);
});

const Test_Listings = connection.define('test_listings', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  max_no_guests: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  infant_guest_eligible: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  price_per_night: {
    type: Sequelize.DECIMAL (10, 2),
    allowNull: false
  },
  service_fee: {
    type: Sequelize.DECIMAL (10,2),
    allowNull: false
  },
  cleaning_fee: {
    type: Sequelize.DECIMAL (10,2)
  },
  extra_guest_fee: {
    type: Sequelize.DECIMAL (10,2)
  },
  security_deposit: {
    type: Sequelize.DECIMAL (10,2)
  },
  value_added_tax: {
    type: Sequelize.DECIMAL (10,2)
  },
  local_taxes: {
    type: Sequelize.DECIMAL (10,2)
  }
});

const Test_Dates = connection.define('test_dates', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  day: {
    type: Sequelize.STRING,
    allowNull: false
  },
  month: {
    type: Sequelize.STRING,
    allowNull: false      
  }
});

const Test_Listings_Dates = connection.define('test_listings_dates', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true      
  },
  available: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

Test_Listings_Dates.belongsTo(Test_Listings);
Test_Listings_Dates.belongsTo(Test_Dates);

connection.sync();

module.exports = {
  Test_Listings: Test_Listings,
  Test_Dates: Test_Dates,
  Test_Listings_Dates: Test_Listings_Dates
};