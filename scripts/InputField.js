import React, { Component } from 'react';

export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: ""
        };
        
    };
    
    handleChange = (e) => {
        this.setState({ filterValue: e.target.value }, () => {
            this.props.onFilterList(this.state.filterValue);
        });
         
    };
    
    render() {
        return (
            <div className="input-field-container">
                <input type="text" className="form-control" id="search_input" value={this.state.filterValue} onChange={this.handleChange} placeholder="Filter..."/>
            </div>
        )
    }
};