import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as optionsActions from '../../actions/optionsActions';

class ViewPayment extends Component {

    updatePayment(val) {
      const value = val.split(",");
      this.props.updateOptionPayment(value[0], Number(value[1]));
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Hur vill du betala?</div>
                <div className="panel-body">
                    <div className="radio">
                        <label>
                            <input type="radio" name="payment" id="1"
                            value={['Faktura', '29']} onClick={(e)=>this.updatePayment(e.target.value)}/>
                            <span>Faktura (29kr)</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="payment" id="2"
                            value={['Klarna konto', '0']} onClick={(e)=>this.updatePayment(e.target.value)}/>
                            <span>Klarna konto (0kr)</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="payment" id="3"
                            value={['Visa eller MasterCard', '0']} onClick={(e)=>this.updatePayment(e.target.value)}/>
                            <span>Visa eller MasterCard (0kr)</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="payment" id="4"
                            value={['Visa bank', '0']} onClick={(e)=>this.updatePayment(e.target.value)}/>
                            <span>Visa bank (0kr)</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        updateOptionPayment:(text, number) => dispatch(optionsActions.updateOptionPayment(text, number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewPayment);
