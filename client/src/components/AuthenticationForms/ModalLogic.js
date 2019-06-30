import React, { Component } from 'react';

export default class ModalLogic extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return this.props.children({
      ...this.state,
      handleClose: this.handleClose,
      handleShow: this.handleShow
    });
  }
}
