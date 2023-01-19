import React, { Component } from 'react';

import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { year: this.year, month: this.month, day: this.day };
  }

  render() {
    return (
      <div>
        <YearPicker
          defaultValue={'select year'}
          start={1900}                // mandatory  
          reverse                     // default is ASCENDING
          value={this.state.year}     // mandatory
          onChange={(year) => {       // mandatory
            this.setState({ year });
            console.log(year);
          }}
          id={'year'}
          name={'year'}
          classes={'classes'}
          optionClasses={'option classes'}
        />
        <MonthPicker
          defaultValue={'select month'}
          short                     // default is full name
          caps                      // default is Titlecase
          year={this.state.year}    // mandatory
          value={this.state.month}  // mandatory
          onChange={(month) => {    // mandatory
            this.setState({ month });
            console.log(month);
          }}
          id={'month'}
          name={'month'}
          classes={'classes'}
          optionClasses={'option classes'}
        />
        <DayPicker
          defaultValue={'select day'}
          year={this.state.year}    // mandatory
          month={this.state.month}  // mandatory
          value={this.state.day}    // mandatory
          onChange={(day) => {      // mandatory
            this.setState({ day });
            console.log(day);
          }}
          id={'day'}
          name={'day'}
          classes={'classes'}
          optionClasses={'option classes'}
        />
      </div>
    );
  }
}