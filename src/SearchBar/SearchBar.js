import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
    }
    queryChanged(query) {
        this.setState({
            query
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.changeSearch(this.state.query);
    }
    render() {
        return(
            <div className='searchBar'>
                <form className="searchBook__form">
                    <label htmlFor="search">Search:</label>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Moby Dick"
                        value={this.state.query}
                        onChange={(e) => this.queryChanged(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={(e) => this.handleSubmit(e)}
                    >Search Books</button>
                </form>            
            </div>
        );
    }
}

export default SearchBar;