import React from 'react';
import Transaction from './Transaction';

import { CardColumns } from 'reactstrap';
class List extends React.Component {
  render() {
    console.log('pros', this.props)
    const {transactions} = this.props;
    
    if (!transactions || !transactions.length ) {
        return '';
    }
    console.log('test', {transactions});

    return (
      <div>
          {
            transactions.map(transaction => (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              {...this.props}
            />
          ))
          }
      </div>
    )
  }
};

export default List;
