import React, {Component} from 'react';
importth
import {Redirect} from 'react-router-dom';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import './Understanding.css';

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
            <Card className="card">
                <h3>2 of 4 Pages</h3>
                <label>How well are you understanding the content?</label>
                <br/>
                <input min="1" max="5" type="number" onChange={this.handleUnderstandingChange} value={this.state.understanding} />
                <br/>
                <br/>
                <Button variant="raised" color="primary" onClick={this.handleClick}>Next</Button>  
            </Card>    
        )
    }
}

export default connect(mapReduxStateToProps)(Understanding);