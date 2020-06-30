import React from 'react';
import './SearchBox.css';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../FilterBar/FilterBar';

class SearchBox extends React.Component {
    render() {
        return(
            <div>
                <SearchBar
                    changeSearch = {this.props.changeSearch}
                />
                <FilterBar 
                    changePrintType = {this.props.changePrintType}
                    changeBookType = {this.props.changeBookType}
                />
            </div>
        );
    }
}

export default SearchBox; 