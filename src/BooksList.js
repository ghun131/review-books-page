import React, { Component } from "react";
import BooksDetail from "./BooksDetail";
import api from "./api";

export default class BooksList extends Component {
  render() {
    const bookInfo = api.map(book => {
      return <BooksDetail key={book.title} book={book} />;
    });
    return (
      <div className="book-list">
        <ul>{bookInfo}</ul>
      </div>
    );
  }
}
