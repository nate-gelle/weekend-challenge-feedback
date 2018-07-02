import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import './Support.css';

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
            <Card className="card">
                <h3>3 of 4 Pages</h3>
                <label>How well are you being supported?</label>
                <br/>
                <input min="1" max="5" type="number" onChange={this.handleSupportChange} value={this.state.support} />
                <br/>
                <br/>
                <Button variant="raised" color="primary" onClick={this.handleClick}>Next</Button>  
            </Card>    
        )
    }
}

export default connect(mapReduxStateToProps)(Support);