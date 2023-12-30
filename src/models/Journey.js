import React from 'react';

export class Journey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: props.origin,
      destination: props.destination
    };
  }
}

export class TrainJourney extends Journey {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      trainNumber: props.trainNumber,
      seatNumber: props.seatNumber
    };
  }
}

export class AirplaneJourney extends Journey {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      flightNumber: props.flightNumber,
      seatNumber: props.seatNumber
    };
  }
}

export class CarJourney extends Journey {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      licensePlate: props.licensePlate
    };
  }
}

export class BoatJourney extends Journey {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      boatNumber: props.boatNumber
    };
  }
}
