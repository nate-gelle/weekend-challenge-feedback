import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

class Support extends Component {
    constructor() {
        super();
          this.state = {
            support: '',
            toNext: false,
          }
        }
      
        handleSupportChange = (event) => {
          this.setState({
            support: event.target.value,
          })
        }
      
        handleClick = (event) => {
            const action = {type: 'SUPPORT', payload: this.state.support};
            this.props.dispatch(action);
            this.setState(() => ({
                toNext: true,
            }));
        }

    render() {
        if(this.state.toNext === true){
            return <Redirect to='/4' />
        }
        return (
            <div>
                <h3>3 of 4 Pages</h3>
                <label>How well are you being supported?</label>
                <br/>
                <input type="number" onChange={this.handleSupportChange} value={this.state.support} />
                <button onClick={this.handleClick}>Next</button>  
            </div>    
        )
    }
}

export default connect(mapReduxStateToProps)(Support);