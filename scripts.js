class telephone {
  constructor() {
    this.phoneNumber = [];
    this.observers = [];
  }
  addPhoneNumber(number) {
    this.phoneNumber.push(number);
  }

  removePhoneNumber(number) {
    this.phoneNumber = this.phoneNumber.filter(
      (phoneNumber) => phoneNumber !== number
    );
  }
  dialPhoneNumber(number) {
    if (this.phoneNumber.includes(number)) {
      console.log(`Calling ${number}...`);
      this.notifyObservers(number);
    } else {
      console.log(
        ` this number ${number} is not in the arrays of phone numbers`
      );
      // this.notifyObservers(number);
    }
  }

  addObserver(observers) {
    this.observers.push(observers);
  }
  removeObserver(observer) {
    this.observers = this.observers.filter((observe) => observe !== observer);
  }

  notifyObservers(number) {
    this.observers.forEach((observer) => observer.update(number));
  }
}

class observer {
  constructor(name) {
    this.name = name;
  }

  update(phoneNumber) {
    switch (this.name) {
      case `${this.name}`:
        console.log(`${this.name} just dialed ${phoneNumber}`);
        break;
      case `${this.name}`:
        console.log(`${this.name}, and I just got a call from ${phoneNumber}.`);
    }
  }
}

const phone = new telephone();
const printer = new observer("caleb");
const dialer = new observer("chisom");

phone.addObserver(printer);
phone.addObserver(dialer);

phone.addPhoneNumber("1234567890");
// phone.addPhoneNumber("123");

phone.dialPhoneNumber("1234567890");
phone.dialPhoneNumber("123");

console.log(phone);
