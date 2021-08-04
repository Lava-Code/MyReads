import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book';
import { Link } from 'react-router-dom'
/**
 * TODO: 
 * Create a query state of the input to control the component
 * Create a listBooks state of the input to control the component
 * Fetch the result data from Back-End 
 * Handle the returned error
 * Update the listBooks state
 * Update UI
 */

class SearchPage extends Component {
    state = {
        query: [''],
        listBooks: []
    };

    handleOnChangeInput = inputValue => {
        // inputValue should return from the state not the element
        this.setState(() => ({
            query: inputValue
        }));
        inputValue ? this.getSearchedResult(inputValue) : this.setState({ listBooks: [] })
    };

    //Get the Result of searched books and update the staate if no errors
    getSearchedResult = request => {
        BooksAPI.search(request)
            .then((data) => {
                data.error ? this.setState({ listBooks: [] }) : this.setState({ listBooks: data })
            })
    }

    render() {
        const stateQueryValue = this.state.query;
        const listOfSearchedBooks = this.state.listBooks;
        const listOfSelectedBooks = this.props.listBooks;
        const handleOnChangeShelf = this.props.handleOnChangeShelf
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to='/' className="close-search"> </Link>
                        <div className="search-books-input-wrapper">
                            <input
                                value={stateQueryValue}
                                type="text" placeholder="Search by title or author"
                                onChange={(event) => this.handleOnChangeInput(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {listOfSearchedBooks.map((book) => {
                                let shelf = 'none'
                                listOfSelectedBooks.map((bookInList) => (
                                    bookInList.id === book.id && (
                                        shelf = bookInList.shelf
                                    )
                                ));
                                return (
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                            shelf={shelf}
                                            handleOnChangeShelf={handleOnChangeShelf}
                                        />
                                    </li>
                                )
                            })}
                        </ol>

                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage
