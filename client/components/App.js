import React from 'react';
import Restaurants from './Restaurants.js';
import Orders from './Orders.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          orders: [
              {
                restaurant: 'A',
                order: 'hamburger'
              },
              {
                restaurant: 'B',
                order: 'sausage'
              },
              {
                restaurant: 'A',
                order: 'dumplings'
              },
              {
                restaurant: 'A',
                order: 'noodles'
              }
          ],
          newOrder: []
        }
        this.fulfilledOrder = this.fulfilledOrder.bind(this);
        // this.fetchOrders = this.fetchOrders.bind(this);
        this.consoleLogText = this.consoleLogText.bind(this);

    }

    // componentDidMount() {
    //     this.fetchOrders();
    // }

    fulfilledOrder(e) {
        console.log('id:', e.target.id);
        let newOrders = [...this.state.orders];
        newOrders.splice(e.target.id, 1);
        this.setState({orders: newOrders }, () => console.log(this.state.orders));
    }

    // fetchOrders() {
    //     axios.get('/api/orders')
    //     .then((allOrders) => {
    //         //allOrders is an array of objects
    //         this.setState({
    //             orders: allOrders
    //         })
    //     })
    //     .catch(() => {
    //         console.log('fetchOrders failed');
    //     })
    // }

    addOrders() {
        axios.post('/api/orders', this.state.newOrder)
        .then(() => {
            console.log('successfully added order');
        })
        .catch(() => console.log('failed to add order'));
    }

    consoleLogText(text) {
        console.log(text)
    }

    render() {
        return (
            <div>
            {this.state.orders.length ? 
            (this.state.orders.map((order, index) => (
                <div>
                  <Restaurants restaurant={order.restaurant} consoleLogText={this.consoleLogText}/>
                  <Orders order={order.order} consoleLogText={this.consoleLogText}/>
                  <button id={index} onClick={this.fulfilledOrder}>Order has been fulfilled</button>
                </div>
              )
            )) : 'SORRY, NO ORDERS :(' 
            }
            </div>
        )
    }
}

export default App;