import React, { Component } from 'react';

import ViewCart from './ViewCart.react';
import ViewDelivery from './ViewDelivery.react';
import ViewPayment from './ViewPayment.react';
import ViewDetails from './ViewDetails.react';

import '../../styles/checkout.scss';

class Container extends Component {
    render() {
        return (
            <div id="checkout-container">
                <div className="col-md-offset-3 col-md-6">
                    <ViewCart />
                </div>
                <div className="col-md-offset-3 col-md-6">
                    <ViewDelivery />
                </div>
                <div className="col-md-offset-3 col-md-6">
                    <ViewPayment />
                </div>
                <div className="col-md-offset-3 col-md-6">
                    <ViewDetails />
                </div>
            </div>
        );
    }
}

export default Container;
