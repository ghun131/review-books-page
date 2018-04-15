import React, { Component } from "react";
import { Image } from "react-bootstrap";
import './BookDetail.css'

export default class BooksDetail extends Component {
  render() {
    const book = this.props.book;
    const bookImageUrl = process.env.PUBLIC_URL + `/pictures/${book.picture}`;
    return (
      <div className="book-detail">
        <h2>{book.title}</h2>
        <Image className="center-block" src={bookImageUrl} responsive />
        <ul className="list-unstyled">
          <li><em>{book.author}</em></li>
          <li>{book.review}</li>
        </ul>
      </div>
    );
  }
}
