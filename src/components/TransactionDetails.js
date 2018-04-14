import React from 'react';

import {Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';


class TransactionDetails extends React.Component {

    transactionsDetails = (props) => {
    const transactionsToDisplay = this.props.transactionsToDisplay;
    if (transactionsToDisplay.length === 1) {
        return this.oneTransactionDetails(props);
    } 

    const ids =  this.props.transactionsToDisplay.map(transaction => transaction.id);

    return (
        <div className="text-center">
            <h3>Ids of selected transactions</h3>
            <p> {ids.join(', ')} </p>
        </div>
        );
    
    }

    oneTransactionDetails = (props) => {
        const transactionsToDisplay = this.props.transactionsToDisplay;
        const transaction = transactionsToDisplay[0];
        return (
            <Table>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>{transaction.id}</td>
                    </tr>
                    <tr>
                        <td>Created at</td>
                        <td>{(new Date(transaction.created_at)).toISOString().slice(0,10) }</td>
                    </tr>
                    <tr>
                        <td>Counterparty name</td>
                        <td>{transaction.counterparty_name}</td>
                    </tr>
                    <tr>
                        <td>Currency</td>
                        <td>{transaction.currency}</td>
                    </tr>
                    <tr>
                        <td>Operation type</td>
                        <td>{transaction.operation_type}</td>
                    </tr>
                </tbody>
          </Table>
        );
      }

    render() {
        const transactionsToDisplay = this.props.transactionsToDisplay;

        return (
            <aside className="bg-white w-100 h-100">
                <Row className="no-gutters">
                    <Col className="bg-light min-h-100">  </Col> 
                </Row>
                <section className="bg-white d-flex h-100 justify-content-center align-items-center">
                    { 
                        transactionsToDisplay ? this.transactionsDetails() : (<div>Select  one or several transactions to see details </div>)
                    }
                    
                </section>

            
            </aside>
        )
  }
};

export default TransactionDetails;
