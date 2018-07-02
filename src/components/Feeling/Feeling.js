import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Button from 'material-ui/Button';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

class Feeling extends Component {
    constructor() {
        super();
          this.state = {
            feeling: '',
            toNext: false,
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
            this.setState(() => ({
                toNext: true,
            }));
        }

    render() {
        if(this.state.toNext === true){
            return <Redirect to='/2' />
        }
        return (
            <div>
                <h3>1 of 4 Pages</h3>
                <label>How are you feeling today?</label>
                <br/>
                <input type="number" onChange={this.handleFeelingChange} value={this.state.feeling} />
                <br/>
                <br/>
                <Button variant="raised" color="primary" onClick={this.handleClick}>Next</Button>  
            </div>    
        )
    }
}

export default connect(mapReduxStateToProps)(Feeling);