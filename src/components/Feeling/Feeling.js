import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

class Feeling extends Component {
    constructor() {
        super();
          this.state = {
            feeling: 0,
          }
        }
      
        handleFeelingChange = (event) => {
          this.setState({
            feeling: event.target.value,
          })
        }
      
        handleClick = (event) => {
            const action = {type: 'FEELING', payload: this.state.feeling};
            this.props.dispatch(action);
            this.clearInputs();
        }
      
        clearInputs() {
          this.setState({
            feeling: 0,
          })
        }

    render() {
        return (
            <div>
                <h3>1 of 4 Pages</h3>
                <input type="number" onChange={this.handleFeelingChange} value={this.state.feeling} />
                <button onClick={this.handleClick}>Next</button>
                <Link to="/understanding">Next</Link>  
            </div>    
        )
    }
}

export default connect(mapReduxStateToProps)(Feeling);