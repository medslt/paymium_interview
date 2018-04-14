import React from 'react';

import { Button } from 'reactstrap';

import {Row, Col } from 'reactstrap';


class Transaction extends React.Component {

 
   render() {
    const transaction = this.props.transaction;

    return (
      <Row className="border-bottom p-3 clickable" onClick={this.props.onCickTransactionRow(transaction)}>
        <Col xs="3">{ (new Date(transaction.created_at)).toISOString().slice(0,10)  }</Col>
        <Col xs="3">{ transaction.counterparty_name }</Col>
        <Col xs="3">{ transaction.operation_type }</Col>
        <Col xs="3">
            <Row >
              <Col xs="9">{ transaction.amount } { transaction.currency }</Col>
              <Col xs="3"> { transaction.attachements.length } </Col>
            </Row>
        </Col>
      </Row>
    )
  }
}

export default Transaction;
