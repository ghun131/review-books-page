import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import "./BookDetail.css";
import ReactModal from "react-modal";


const customStyles = {
  content : {
    top : '50%',
    left : '50%',
    width: '50%',
    height: '80%',
    right : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)',
    textAlign : 'center'
  }
};

ReactModal.setAppElement('#root')

export default class BooksDetail extends Component {
  constructor() {
    super();
    this.state = { showModal: false };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    const book = this.props.book;
    const bookImageUrl = process.env.PUBLIC_URL + `/pictures/${book.picture}`;
    //const bookImageUrl = "http://via.placeholder.com/200x300"
    return (
      <div className="book-detail">
        <Image
          onClick={this.handleOpenModal}
          className="center-block"
          src={bookImageUrl}
          responsive
        />
        <ReactModal
          isOpen={this.state.showModal}
          style={customStyles}
          contentLabel="Author and Review"
        >
          <Image className="center-block" src={bookImageUrl} responsive />
          <ul className="list-unstyled">
            <li>
              <em>{book.author}</em>
            </li>
            <li>{book.review}</li>
          </ul>
          <Button onClick={this.handleCloseModal}> close </Button>
        </ReactModal>
      </div>
    );
  }
}
