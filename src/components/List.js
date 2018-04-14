import React from 'react';
import Transaction from './Transaction';

import {Row, Col } from 'reactstrap';

class List extends React.Component {
  render() {
    console.log('pros', this.props)
    const {transactions, onCickTransactionRow} = this.props;
    
    if (!transactions || !transactions.length ) {
        return '';
    }
    console.log('test', {transactions});

    return (
     <section>
        <Row className="no-gutters">
            <Col className="bg-warning min-h-100">  </Col> 
        </Row>
        <Row className="text-left bg-light no-gutters">
          <Col sm={{ size: 8, offset: 2 }}>
            <Row className="border-bottom p-3">
              <Col  xs="3" className="clickable">created at</Col>
              <Col  xs="3" className="clickable">Counterparty Name</Col>
              <Col  xs="3" className="clickable">Payment type</Col>
              <Col  xs="3" className="clickable">
                  <Row>
                    <Col  xs="7" className="clickable">Amount</Col>
                    <Col  xs="5" className="clickable">attach</Col>
                  </Row>
              </Col>
            </Row>
            {
              transactions.map(transaction => (
              <Transaction
                key={transaction.id}
                transaction={transaction}
                {...this.props}
                onCickTransactionRow={onCickTransactionRow}
              />
            ))
            }
          </Col>
        </Row>
    </section>
      
    )
  }
};

export default List;
