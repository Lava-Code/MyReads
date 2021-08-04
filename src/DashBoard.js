import React, { Component } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom'
/**
 * TODO: 
 * Passing the handler function to the book component
 * Extract the list of books from props
 * Maping over the list to update the UI and passing the require data to the book component (Book , currentShelf)
 * Split the list of books on the shelfs based on it's property using short circuit evaluation (expression && expression)
 */

class DashBoard extends Component {
    render() {
        const { listBooks, handleOnChangeShelf } = this.props
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {listBooks.map((book) => (
                                            book.shelf === 'currentlyReading' &&
                                            <li key={book.id}>
                                                <Book
                                                    book={book}
                                                    shelf={book.shelf}
                                                    handleOnChangeShelf={handleOnChangeShelf}

                                                />
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {listBooks.map((book) => (
                                            book.shelf === 'wantToRead' &&
                                            <li key={book.id}>
                                                <Book
                                                    book={book}
                                                    shelf={book.shelf}
                                                    handleOnChangeShelf={handleOnChangeShelf}

                                                />
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {listBooks.map((book) => (
                                            book.shelf === 'read' &&
                                            <li key={book.id}>
                                                <Book
                                                    book={book}
                                                    shelf={book.shelf}
                                                    handleOnChangeShelf={handleOnChangeShelf}
                                                />
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to='/search'>
                            <button>Add Book</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default DashBoard
