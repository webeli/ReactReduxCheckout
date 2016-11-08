import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../../actions/cartActions';

import IMAGEWARNING from '../../assets/warning.png';
import IMAGECLOSE from '../../assets/close1.png';

class ViewCart extends Component {

    updateCart(value, key) {
        if (Number(value) === 0) {
            this.props.removeProduct(key);
        } else {
            this.props.updateProdAmount(value, key);
        }
    }

    render() {

        const cart = this.props.cart;
        const deliveryPrice = this.props.options.delivery.price;
        const deliveryText = this.props.options.delivery.text;
        const paymentPrice = this.props.options.payment.price;
        const paymentText = this.props.options.payment.text;

        // Calculate totalprice based on products and amounts
        let totalProdPrice = Object.keys(cart).reduce((sum, product)=>sum + cart[product].price * cart[product].amount, 0);

        let totalPrice = totalProdPrice + deliveryPrice + paymentPrice;

        let deliveryString = (deliveryPrice !== null ? deliveryText + ': ' + deliveryPrice + 'kr' : 'Välj leveransmetod');
        let paymentString = (paymentPrice !== null ? paymentText + ': ' + paymentPrice + 'kr' : 'Välj betalningsmetod');

        const mappedCart = Object.keys(cart).map((product)=> {
            return (
                <tbody key={product}>
                <tr>
                    <td>
                        <img className="well" src={cart[product].image} alt="" width="120px"/>
                    </td>
                    <td>
                        <p className="product-title">{cart[product].title}</p>
                        <p className="product-description">{cart[product].desc}</p>
                    </td>
                    <td>
                        <div className="form-inline">
                            <input type="number" className="form-control amount" placeholder="0"
                                   defaultValue={cart[product].amount}
                                   onChange={(e)=>this.updateCart(e.target.value, product)}/>
                            st
                        </div>
                    </td>
                    <td>x</td>
                    <td>{cart[product].price}kr</td>
                    <td>=</td>
                    <td className="priceTotalProd">{cart[product].price * cart[product].amount}kr</td>
                    <td>
                        <img className="closeImage" onClick={()=>this.props.removeProduct(product)} src={IMAGECLOSE}
                             alt="close"/>
                    </td>
                </tr>
                </tbody>
            )
        });

        return (
            <div className="panel panel-default">
                <div className="panel-heading">Granska din kundvagn (Måste hämtas i butik)</div>
                <div className="panel-body">
                    <div className="cartDescription">
                        <img src={IMAGEWARNING} alt="warning"/>
                        <p>Din kundvagn innehåller antingen <b>reservdelar</b> eller produkter som vi klassar som <b>farliga</b>,
                            <b>krymmande</b> eller <b>ömtåliga</b>. Din beställning måste därför hämtas ut i någon av
                            våra butiker.</p>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            {mappedCart}
                        </table>
                    </div>
                </div>
                <div className="panel-footer">
                    <p className="priceInfo">{deliveryString}</p>
                    <p className="priceInfo">{paymentString}</p>
                    <p className="priceInfo">Totalt inkl. moms: <span className="priceTotal">{totalPrice}kr</span></p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        options: state.options
    };
}
function mapDispatchToProps(dispatch) {
    return {
        updateProdAmount: (value, key) => dispatch(cartActions.updateProdAmount(value, key)),
        removeProduct: (key) => dispatch(cartActions.removeProduct(key))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);
