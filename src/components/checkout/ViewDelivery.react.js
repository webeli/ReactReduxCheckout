import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as optionsActions from '../../actions/optionsActions';

class ViewDelivery extends Component {

    updateDelivery(val) {
        const value = val.split(",");
        this.props.updateOptionDelivery(value[0], Number(value[1]));
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Hur vill du ha din order levererad?</div>
                <div className="panel-body">
                    <div className="radio">
                        <label>
                            <input type="radio" name="delivery" id="1"
                                   value={['Hämta på Postens utlämningställe', '49']}
                                   onClick={(e)=>this.updateDelivery(e.target.value)}/>
                            <span>Hämta på Postens utlämningställe (49kr)</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="delivery" id="2"
                                   value={['Hem till dörren', '249']}
                                   onClick={(e)=>this.updateDelivery(e.target.value)}/>
                            <span>Hem till dörren (249kr)</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="delivery" id="3"
                                   value={['Hämta i butik', '0']} onClick={(e)=>this.updateDelivery(e.target.value)}/>
                            <span>Hämta i butik (0kr)</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="delivery" id="4"
                                   value={['Företagspaket', '100']} onClick={(e)=>this.updateDelivery(e.target.value)}/>
                            <span>Företagspaket (100kr)</span>
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
        updateOptionDelivery: (text, number) => dispatch(optionsActions.updateOptionDelivery(text, number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewDelivery);
