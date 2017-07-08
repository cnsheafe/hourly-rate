import React from 'react'

export default class NumberInput extends React.Component {
	constructor(props) {
		super(props);
        this.handleChange = this.handleChange.bind(this)
	}
	
    handleChange(event) {
        if (event.target.id === 'day-rate') {
            this.props.updateValues(event.target.value, null)
        }
        else {
            this.props.updateValues(null, event.target.value)
        }
    }

	render() {
		return(
				<div>
                    <div>Day rate 
                        <input id="day-rate" type="number" onChange={this.handleChange}/></div>
                    <div>Hours 
                        <input id="hours" type="number" onChange={this.handleChange}/></div>
                </div>
				)
	}
}
