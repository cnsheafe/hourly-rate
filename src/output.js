import React from 'react'

export default class Output extends React.Component {
	constructor(props) {
		super(props);
	}
    
    render() {
        return(<div><p>Hourly rate ${this.props.value}</p></div>)
    }
	
}
