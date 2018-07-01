import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

class Thanks extends Component {
    constructor(reduxStore) {
        super(reduxStore);
          this.state = ({
            feeling: this.props.reduxStore.feelingReducer,
            understanding: this.props.reduxStore.understandingReducer,
            support: this.props.reduxStore.supportReducer,
            comment: this.props.reduxStore.commentReducer,
            toNext: false,
          })
        }
      
        sendFeedbackToDB = () => {
            console.log(this.state);
            
          const body = {feeling: this.state.feeling, understanding: this.state.understanding, support: this.state.support, comment: this.state.comment};
          console.log(body);
          
          axios.post('/feedback', body).then((response) => {
            console.log(response);
          }).catch((error) => {
            alert('Something BAD');
            console.log(error);
          });
        }

        handleClick = (event) => {
            this.setState(() => ({
                toNext: true,
            }));
        }

        componentDidMount = () => {
            this.sendFeedbackToDB();
        }

    render() {
        if(this.state.toNext === true){
            return <Redirect to='/' />
        }
        return (
            <div>
                <h2>Thank You!</h2>
                <button onClick={this.handleClick}>Leave New Feedback</button>  
            </div>    
        )
    }
}

export default connect(mapReduxStateToProps)(Thanks);