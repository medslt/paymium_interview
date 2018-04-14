import React from 'react';
import Transaction from './Transaction';

import {Row, Col } from 'reactstrap';
import { SelectableGroup, createSelectable } from 'react-selectable';

const SelectableComponent = createSelectable(Transaction);

class List extends React.Component {
  constructor (props) {
  	super(props);
  	this.state = {
  		selectedTransactions: []
  	};
  }

  handleSelection = (selectedTransactions) => {
    console.log(selectedTransactions);
  	this.props.setTransactionsToDisplay(selectedTransactions);
  }

  _onMouseMove = (e) => {
    if (!e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }

  render() {
    const {transactions, onCickTransactionRow, transactionsToDisplay} = this.props;
    
    if (!transactions || !transactions.length ) {
        return '';
    }

    return (
     <section>
        <Row className="no-gutters">
            <Col className="bg-warning min-h-100">  </Col> 
        </Row>
        <Row className="text-left bg-light no-gutters" onMouseMove={this._onMouseMove}>
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
            <SelectableGroup 
              onSelection={this.handleSelection}
              preventDefault={false}
            >
              {
                transactions.map(transaction => {
                  let selected = (transactionsToDisplay && transactionsToDisplay.find((t) => t.id === transaction.id)) ? true : false;

                  
                  return (
                    <SelectableComponent 
                      key={transaction.id} 
                      selected={selected ? 'active' : ''} 
                      selectableKey={transaction}
                      transaction={transaction}
                      {...this.props}
                      />
                  ) })
              }
            </SelectableGroup>
          </Col>
        </Row>
    </section>
      
    )
  }
};

export default List;
