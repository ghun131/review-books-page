import React, { Component } from "react";
import BooksDetail from "./BooksDetail";
import api from "./api";
import { Grid, Row, Col, Clearfix } from "react-bootstrap";

export default class BooksList extends Component {
  render() {
    const bookInfo = api.map(book => {
      return <BooksDetail key={book.title} book={book} />;
    });

    /*let firstCol = [];
    let secondCol = [];
    const smallerArr = (col, num) => {
      for (let i = num; i < bookInfo.length; i += 2) {
        col.push(bookInfo[i]);
      }
      return col;
    };

    firstCol = smallerArr(firstCol, 0);
    secondCol = smallerArr(secondCol, 1);
*/

    return (
      <span>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6} md={6}>
              <ul>{bookInfo}</ul>
            </Col>
          </Row>
        </Grid>
      </span>
    );
  }
}
