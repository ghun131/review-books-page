import React, { Component } from "react";
import BooksDetail from "./BooksDetail";
import api from "./api";
import { Grid, Row, Col } from "react-bootstrap";

export default class BooksList extends Component {
  render() {
    const bookInfo = api.map(book => (
      <Col xs={12} sm={6} md={4} key={book.title}>
        <BooksDetail key={book.title} book={book} />
      </Col>
    ));

    return (
      <div>
        <Grid>
          <Row className="show-grid">{bookInfo}</Row>
        </Grid>
      </div>
    );
  }
}
