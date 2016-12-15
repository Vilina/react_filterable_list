import React, { Component } from 'react';
import Countries from './countries';

export default class CountriesList extends Component {
    render(){
        var CountriesList = this.props.countriesList.map(function (value, key) {
            return (
                <div className="country-row">{value.name}</div>
            )
        }.bind(this));
        return (<div className="countries-container">{CountriesList}</div>);
    }
};