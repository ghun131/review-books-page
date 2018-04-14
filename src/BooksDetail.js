import React, { Component } from 'react'
import { Image } from 'react-bootstrap';

export default class BooksDetail extends Component {
    render() {
        const book = this.props.book;
        return (
            <div>
                <h3>{book.title}</h3>
                <Image src={book.picture} responsive/>
                <li>{book.author}</li>
                <li>{book.review}</li>
            </div>
        )
    }
}
