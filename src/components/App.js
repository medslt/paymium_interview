import React, { Component } from 'react';

import axios from 'axios';

import List from './List';
import Header from './Header';

import  transactionsLocal  from '../data/transactions';

class App extends Component {
  state = {
    transactions: [],
    isLoading: false,
  };


  async componentDidMount() {
    // fetch transactions
    this.setState({ isLoading: true });
    const transactions = await this.fetchTransactions();

    console.log('transactions', transactions);
    

    const isLoading = false;
    this.setState({transactions, isLoading});
  }

  fetchTransactions = async () => {
    console.log('fetching data ...');

    //Api doesn't work !!!! use data in local 

      // const url = 'https://private-3f9656-paymiuminterviews.apiary-mock.com/transactions';

      // const result = await axios.get(url);

      // const transactions = [...result.data.data.results];
      return transactionsLocal[0].transactions;
      
  }

  render() {
    const { transactions, isLoading } = this.state;

    if (isLoading) {
      return (<p>Loading ...</p>);
    }

    return (
        <div className="container-fluid">
         
          <List 
            transactions={transactions}
            {...this.props}
          />
        </div>
    );
  }
}

export default App;
