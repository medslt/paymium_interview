import React from 'react';

import { Button } from 'reactstrap';

import {Row, Col } from 'reactstrap';


class Transaction extends React.Component {

 
   render() {
    const {transaction, selected} = this.props;

    return (
      <Row className={`border-bottom p-3 ${selected ? 'bg-secondary' : ''}`}>
        <Col xs="2">{ (new Date(transaction.created_at)).toISOString().slice(0,10)  }</Col>
        <Col xs="3">{ transaction.counterparty_name }</Col>
        <Col xs="3">{ transaction.operation_type }</Col>
        <Col xs="4">
            <Row>
              <Col xs="8">{ transaction.amount } { transaction.currency }</Col>
              <Col xs="4"> <span>{ transaction.attachements.length } <i className="fa fa-paperclip fa-1x"> </i>  </span></Col>
            </Row>
        </Col>
      </Row>
    )
  }
}

export default Transaction;
