import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import InputField from './InputField';
import CountriesList from './CountriesList';
import Countries from './countries';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alCountriesList: [],
            filteredCountriesList: []
        };
    }
    
    getCountries = (Countries) => {
        this.setState({alCountriesList: Countries });
        this.setState({filteredCountriesList: Countries });
    };
    
    componentDidMount = () => {
        this.getCountries(Countries);
    };
    
    onFilterList = (filterKey) => {
        let filteredList = [];
        for (let i = 0; i < this.state.alCountriesList.length; i++) {
            
            if (this.state.alCountriesList[i].name.toLowerCase().indexOf(filterKey) > -1) {
    
                filteredList.push(this.state.alCountriesList[i]);
            }
        }
        this.setState({filteredCountriesList: filteredList});
    };
    render() {
        return (
            <div className="flex-container">
                <div className="title">Filtered list</div>
                <InputField onFilterList={filterKey => this.onFilterList(filterKey)}/>
                <CountriesList  countriesList = {this.state.filteredCountriesList}/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));