import React, { Component } from 'react';

import axios from 'axios';

import List from './List';
import Menu from './Menu';
import TransactionDetails from './TransactionDetails';
import {Row, Col } from 'reactstrap';
import  transactionsLocal  from '../data/transactions';

class App extends Component {
  state = {
    transactions: [],
    transactionsToDisplay: null,
    isLoading: false,
  };


  async componentDidMount() {
    // fetch transactions
    this.setState({ isLoading: true });
    const transactions = await this.fetchTransactions();

    const isLoading = false;
    this.setState({transactions, isLoading});
  }

  fetchTransactions = async () => {
      console.log('fetching data ...');

      const url = 'https://private-3f9656-paymiuminterviews.apiary-mock.com/transactions';
      
     let transactions;

      try {
        const result = await axios.get(url);
       transactions = [...result.data[0].transactions];
      } catch (error) {
        //Api doesn't work !!!! use data in local 

        transactions = transactionsLocal[0].transactions;
        
      }
      
      
      return transactions;
      
  }

  sortTransactions = (sortBy) => (e) => {
      let transactions = [...this.state.transactions];

      
      transactions.sort((trA, trB)  => {
          return (trA[sortBy] < trB[sortBy] ? 1 : -1);
      });
      this.setState({transactions});
  }

  setTransactionsToDisplay = (transactions) => {
    this.setState({transactionsToDisplay: transactions});
  }

  render() {
    const { transactions, isLoading, transactionsToDisplay} = this.state;

    if (isLoading) {
      return (<p>Loading ...</p>);
    }

    return (
        <div className="container-fluid h-100" onClick={ (e)=>{ !e.shiftKey &&  this.setTransactionsToDisplay(null)} }>
          <Row className="no-gutters h-100">
            <Col md="3" className="bg-secondary" >
              <Menu/>
            </Col>
            <Col md="6">
              <List 
                  transactions={transactions}
                  setTransactionsToDisplay={this.setTransactionsToDisplay}
                  sortTransactions={this.sortTransactions}
                  transactionsToDisplay={transactionsToDisplay}
                  {...this.props}
                />
            </Col>
            <Col md="3">
              <TransactionDetails
                transactionsToDisplay={transactionsToDisplay}
              />
            </Col>
             
              
          </Row>
        </div>
    );
  }
}

export default App;
