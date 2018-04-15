import React, { Component } from 'react'
import { Image } from 'react-bootstrap';

export default class BooksDetail extends Component {
    render() {
        const book = this.props.book;
        const bookImageUrl = process.env.PUBLIC_URL + `/pictures/${book.picture}`;
        return (
            <div>
                <h3>{book.title}</h3>
                <Image src={bookImageUrl} responsive/>
                <li>{book.author}</li>
                <li>{book.review}</li>
            </div>
        )
    }
}
