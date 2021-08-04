import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import DashBoard from './DashBoard'
import { Route } from 'react-router-dom'
/**
 * TODO: 
 * Fetch the data form Back-End
 * Update the state
 * passing the state to Dashbaord to update the UI
 * Create a function to:
    * Update the shelf by selected value
    * update the state
* Use the function as handler by passing it in chain to the book component as props
 */
class BooksApp extends React.Component {
  state = {
    books: []
  };

  getAllBooks = () => {
    BooksAPI.getAll()
      .then((data) => {
        this.setState(() => ({
          books: data
        }))
      })
  };

  handleOnChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.getAllBooks()
      })
  };

  componentDidMount() {
    this.getAllBooks()
  };

  render() {

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <DashBoard
            listBooks={this.state.books}
            handleOnChangeShelf={this.handleOnChangeShelf} />
        )} />

        <Route path='/search' render={() => (
          <SearchPage
            listBooks={this.state.books}
            handleOnChangeShelf={this.handleOnChangeShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
