import React, { Component } from 'react';
import DetailsForm from './DetailsForm';

import Alert from 'react-s-alert';

import { connect } from 'react-redux';

class ViewDetails extends Component {

    submitForm = (values) => {
        const delivery = this.props.options.delivery;
        const payment = this.props.options.payment;

        if (!delivery.text && !payment.text) {
            Alert.error('Vänligen ange leverans och betalningsmetod!', {
                position: 'top-right', effect: 'slide', timeout: 5000
            });
        } else if (!delivery.text) {
            Alert.error('Vänligen ange leveransmetod!', {
                position: 'top-right', effect: 'slide', timeout: 5000
            });
        } else if (!payment.text) {
            Alert.error('Vänligen ange betalningsmetod!', {
                position: 'top-right', effect: 'slide', timeout: 5000
            });
        } else {
            Alert.success('Tack för din beställning!', {
                position: 'top-right', effect: 'slide', timeout: 5000
            });
            // Do something with form values and options
            console.log("Beställning - ", "FORM:", values, "OPTIONS:", this.props.options, "CART:", this.props.cart);
        }
    };

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Ange dina uppgifter</div>
                <div className="panel-body">
                    <DetailsForm onSubmit={this.submitForm}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        options: state.options,
        cart: state.cart
    };
}
export default connect(mapStateToProps)(ViewDetails);
