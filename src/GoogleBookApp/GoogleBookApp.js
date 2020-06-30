import React from 'react';
import './GoogleBookApp.css';
import SearchBox from '../SearchBox/SearchBox';
import BookList from '../BookList/BookList';

class GoogleBookApp extends React.Component {
    render() {
        console.log('Google Book App');
        console.log(this.props.books);
        return(
            <div className="GoogleBookApp">
                <h1>Google Book App</h1>
                <SearchBox 
                    changeSearch={this.props.changeSearch}
                    search={this.props.search}
                    changeBookType={this.props.changeBookType}
                    changePrintType={this.props.changePrintType}
                />
                <BookList 
                    books={this.props.books}
                    printType={this.props.printType}
                    bookType={this.props.bookType}
                />
            </div>
        );
    }
}

export default GoogleBookApp;