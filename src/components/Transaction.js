import React from 'react';

import { Button } from 'reactstrap';

class Transaction extends React.Component {

 
   render() {
    const transaction = this.props.transaction;

    return (
      <div>
        name:{transaction.counterparty_name}  ||  currency: {transaction.currency}
      </div>
    )
  }
}

export default Transaction;
