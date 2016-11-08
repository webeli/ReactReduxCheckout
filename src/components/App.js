import React, { Component } from 'react';

import CheckoutHeader from './checkout/CheckoutHeader.react';
import CheckoutContainer from './checkout/CheckoutContainer.react';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Alert from 'react-s-alert';

class App extends Component {
  render() {
    return (
        <div>
            <CheckoutHeader />
            <CheckoutContainer />
            <Alert stack={{limit: 3}} />
        </div>
    );
  }
}

export default App;
