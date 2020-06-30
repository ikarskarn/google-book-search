import React from 'react';
import './BookList.css';
import Book from '../Book/Book.js';

class BookList extends React.Component {
    render() {
        console.log("Book List");
        console.log(this.props.books);
        return(
            <div className="bookList">
                <Book 
                    books={this.props.books}
                    printType={this.props.printType}
                    bookType={this.props.bookType}
                />
            </div>
        );
    }
}

export default BookList; 