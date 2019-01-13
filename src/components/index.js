import React, { Component } from 'react';
import { connect } from 'react-redux';
import { positive, negative, reset } from '../actions';

class App extends Component {



    render() {

        console.log(this.props.value)
        return (
            <div className="ui grid container" style={{ marginTop: '20%' }}>
                <div className="ui twelve wide column centered">
                    <div className="row">
                        <button className="ui positive button" onClick={() => this.props.positive()} >positive + </button>
                        <button className="ui negative button" onClick={() => this.props.negative()} >negative - </button>
                        <button className="ui blue button" >{this.props.value}</button>
                        <button className="ui black button" onClick={() => this.props.reset()} > reset value * </button>

                    </div>
                </div>
            </div>


        );

    }


}

function mapStateToProps(state) {
    return {
        value: state
    };
}



export default connect(mapStateToProps, { positive, negative, reset })(App);