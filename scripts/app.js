import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import InputField from './InputField';
import CountriesList from './CountriesList';
import Countries from './countries';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countriesList: []
        };
        
    }
    
    getCountries(Countries){
        console.log(Countries, "Countries");
        this.setState({countriesList: Countries });
        
    }
    
    componentDidMount() {
        this.getCountries(Countries);
    }
    onFilterList() {
        alert();
    }
    render() {
        console.log(this.state.countriesList);
        return (
            <div className="flex-container">
                <div className="title">Filtered list</div>
                <InputField onFilterList={filterKey => this.onFilterList(filterKey)}/>
                <CountriesList  countriesList = {this.state.countriesList}/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));