const request = require('supertest');
const db = require('../server/db/index.js');
const app = require('../server/index.js');

describe('GET request', () => {
  beforeEach(async() => {
    await db.Test_Listings.create({
      id: 114,
      max_no_guests: 31,
      infant_guest_eligible: true,
      price_per_night: 999,
      service_fee: 11.99,
      cleaning_fee: 11.99,
      extra_guest_fee: 11.99,
      security_deposit: 11.99,
      value_added_tax: 11.99,
      local_taxes: 11.99
    });
  });

  afterEach(async() => {
    await db.Test_Listings.destroy({ 
      where: { 
        id: 114
      } 
    });
  });

  test('GET request for a test listing', async() => {
    const response = await request(app).get('/rooms/bookings/test_listings');
    expect(response.body[0].max_no_guests).toEqual(31);
  });
});