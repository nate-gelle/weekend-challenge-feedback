import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import './Feeling.css';

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
            <Card className="card">
                <h3>1 of 4 Pages</h3>
                <label>How are you feeling today?</label>
                <br/>
                <input min="1" max="5" type="number" onChange={this.handleFeelingChange} value={this.state.feeling} />
                <br/>
                {/* <div className="mdc-form-field">
                    <div className="mdc-radio">
                        <input className="mdc-radio__native-control" value="1" type="radio" id="radio-1" name="radios" />
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                    </div>
                    <label htmlFor="radio-1">1</label> */}
                {/* </div> */}
                <br/>
                <Button variant="raised" color="primary" onClick={this.handleClick}>Next</Button>  
            </Card>    
        )
    }
}

export default connect(mapReduxStateToProps)(Feeling);