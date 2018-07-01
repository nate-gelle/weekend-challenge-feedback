import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

class Understanding extends Component {
    constructor() {
        super();
          this.state = {
            understanding: '',
            toNext: false,
          }
        }
      
        handleUnderstandingChange = (event) => {
          this.setState({
            understanding: event.target.value,
          })
        }
      
        handleClick = (event) => {
            const action = {type: 'UNDERSTANDING', payload: this.state.understanding};
            this.props.dispatch(action);
            this.setState(() => ({
                toNext: true,
            }));
        }

    render() {
        if(this.state.toNext === true){
            return <Redirect to='/3' />
        }
        return (
            <div>
                <h3>2 of 4 Pages</h3>
                <label>How well are you understanding the content?</label>
                <br/>
                <input type="number" onChange={this.handleUnderstandingChange} value={this.state.understanding} />
                <button onClick={this.handleClick}>Next</button>  
            </div>    
        )
    }
}

export default connect(mapReduxStateToProps)(Understanding);