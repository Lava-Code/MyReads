import React, { Component } from 'react'

class Book extends Component {

    render() {
        const { book, handleOnChangeShelf, shelf } = this.props;
        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        {book.imageLinks && (
                            <div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
                        )}
                        <div className="book-shelf-changer">
                            <select value={shelf}
                                onChange={(event) => handleOnChangeShelf(book, event.target.value)}>
                                <option value="move" >Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </div>
        )

    }
}

export default Book
