const expect = require('chai').expect;

const vitalOkay=require('./vitals.js');

expect(vitalOkay.vitalsAreOk(100, 95, 70)).to.be.true; //all vitals okay
expect(vitalOkay.vitalsAreOk(180, 95, 70)).to.be.false; // BP is high
expect(vitalOkay.vitalsAreOk(30, 95, 70)).to.be.false; // BP is low
expect(vitalOkay.vitalsAreOk(100, 60, 70)).to.be.false; // spo2 is low
expect(vitalOkay.vitalsAreOk(100, 95, 20)).to.be.false; //respRate is low
expect(vitalOkay.vitalsAreOk(100, 95, 115)).to.be.false; // respRate is high
expect(vitalOkay.vitalsAreOk(185, 55, 70)).to.be.false; // BP is high, spo2 is low
expect(vitalOkay.vitalsAreOk(100, 55, 15)).to.be.false; // spo2 is low, respRate is low
expect(vitalOkay.vitalsAreOk(100, 55, 110)).to.be.false; //spo2 is low, respRate is high
expect(vitalOkay.vitalsAreOk(180, 95, 10)).to.be.false; //BP is high, respRate is low
expect(vitalOkay.vitalsAreOk(10, 95, 100)).to.be.false; //BP is low, respRate is high
expect(vitalOkay.vitalsAreOk(10, 55, 10)).to.be.false; // BP is low, spo2 is low, respRate is low
expect(vitalOkay.vitalsAreOk(190, 20, 150)).to.be.false; //BP is high, spo2 is low, respRate is high

console.log('checker is done');
