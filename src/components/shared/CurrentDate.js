import React, { Component } from "react";

class CurrentDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZoneName: 'short'
      },
      currentDate: new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZoneName: 'short'
      })
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      3600000 // 3,600,000 ms = 1 hr.
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    console.log("currentDate: ", this.state.currentDate);
    //Setting the value of the date
    this.setState({
      currentDate: new Date().toLocaleString('en-US', this.state.options)
    });
  }
  render() {
    return <span>{this.state.currentDate}</span>;
  }
}

export default CurrentDate;