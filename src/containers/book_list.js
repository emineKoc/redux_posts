// renders list of books
// We changed one {Component}(Dumb Component) to Container(Smart Component), Container has direct access/connection to Redux
// Usually the most parent component being promoted as Container.We need to check the diagram for it.

import React, {Component} from 'react';
import { connect } from 'react-redux';   // connect is a function

class Booklist extends Component {
  renderList({
    return this.props.books.map((book)) => {
      return(
        <li key={book.title} className="list-groupitem">{book.title}</li>
      )
    }
  })
  render({
    return({
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    })
  })
}
// state contains array of books and current book
function mapStateToProps(state){
  // whatevet is returned will show up as props
  // inside of Booklist
  return {
    asdf: '123'
  }

}
