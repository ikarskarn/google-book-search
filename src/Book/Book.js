import React from 'react';
import './Book.css';

class Book extends React.Component {
    render() {
        const books = this.props.books;
        console.log("books in book");
        console.log(books);
        const bookList = books
            .map((book, idx) => {
            return (
                <section className="book-main" key={idx}>
                    <header className="book-title">
                        <h2>{book.title}</h2>
                    </header>
                    <div className="book-info-group">
                        <div className="book-image">
                            <img
                                src={book.imageLinks.smallThumbnail}
                            />
                        </div>
                        <div className="book-info">
                            <h3>Written by: {book.authors}</h3>
                            <p>Print Type: {book.printType}</p>
                            <p>Description: {book.description}</p>
                        </div>
                    </div>
                </section>
            )
        })
        return(
            <div className="book">
                {bookList}               
            </div>
        );
    }    
}
export default Book;