import React from 'react'
import NumberInput from './number-input'
import Output from './output'

export default class HourlyRate extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            dayRate: 0,
            hours: 0
        }
        this.updateValues = this.updateValues.bind(this)
        this.calculateRate = this.calculateRate.bind(this)
	}

	calculateRate() {
        console.log(this.state)
		if(!this.state.hours) {
			return 0;
		}
        
		return (this.state.dayRate/this.state.hours).toFixed(2);
	}

    updateValues(dayRate, hours) {
        this.setState({
            dayRate: +dayRate || this.state.dayRate,
            hours: +hours || this.state.hours
        })
    }

	render() {
        const rate = this.calculateRate()
		return(
				<div>
					<NumberInput updateValues={this.updateValues}/>
					<Output value={rate}/>
				</div>
				)
	}
}
