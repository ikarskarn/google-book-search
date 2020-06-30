import React from 'react';
import './App.css';
import GoogleBookApp from './GoogleBookApp/GoogleBookApp.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			search: 'Moby Dick',
			printType: 'all',
			bookType: 'ebooks'
		};
	}
	getBooks() {
		const search = this.state.search;
		const apiKey='AIzaSyC7_DqzY3FyTP4gyC5r5WLWiLSTI9qL80A'; 
		const apiURL='https://www.googleapis.com/books/v1/volumes';
		const url = `${apiURL}?q=${search}
			&printType=${this.state.printType}
			&filter=${this.state.bookType}
			&key=${apiKey}`;
		
		fetch(url)	
		.then(response => {
			if(!response.ok) {
				throw new Error("something went wrong.  Please try again");
			}
			return response;
		})
		.then(response => response.json())
		.then(data => {
			//console.log("DATA::::::::");
			//console.log(data);
			const bookData = Object.keys(data)
				.map((key) => data[key]);
			//console.log(data.items[0].volumeInfo);
			//console.log("BOOOOOOKKKKKS!!!!!")
			//console.log(bookData);
			const bookList = bookData[2];
			//console.log("BOOK LIST")
			//console.log(bookList[0].volumeInfo);
			const books = bookList.map(book => {
				console.log("booklist:");
				console.log(book);
				return book.volumeInfo;
			});
			this.setState({
				books: books
			})
		})
		.catch(error => {
			this.setState({
				error: error.message,
			});
		});
	}
	componentDidMount() {
		//this.getBooks();
	}
	changeSearch(search) {
		this.setState({
			search,
		})
		this.getBooks();
	}
	updatePrintType(printType) {
		this.setState({
			printType,
		});
		this.getBooks();
	}
	updateBookType(bookType) {
		this.setState({
			bookType,
		});
		this.getBooks();
	}
	render() {
		return (
			<main className="App">
				<GoogleBookApp
					books={this.state.books}
					search={this.state.search}
					changeSearch={query => this.changeSearch(query)}
					changePrintType={printType => this.updatePrintType(printType)}
					changeBookType={bookType => this.updateBookType(bookType)}
					printType={this.state.printType}
					bookType={this.state.bookType}
				/>
			</main>
		);
	}
}

export default App;