import React from 'react';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        //console.log("Hej:" + this.props.order);
    }

    render() {
        //console.log("Hej:" + this.props.order);
        return (
        <div className="container">
          <h4>Order</h4>
          <ul>
            {this.props.order.map(name => (
                <li key={name.id}>{name.toString()}</li>
            ))}
          </ul>
        </div>
        );
    }
}

export default Orders;