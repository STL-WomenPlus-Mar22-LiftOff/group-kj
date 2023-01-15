import React, { Component } from 'react';
import { YearPicker } from 'react-dropdown-date';

export class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { year: null, month: null, day: null };
    }

    render() {
        return (
            <div>
                <YearPicker
                    defaultValue={'select year'}
                    start={1930}                // default is 1900
                    reverse                     // default is ASCENDING
                    required={true}             // default is false
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
            </div>
        );
    }
}