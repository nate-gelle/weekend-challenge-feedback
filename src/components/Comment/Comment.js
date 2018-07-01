import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

class Comment extends Component {
    constructor() {
        super();
          this.state = {
            comment: '',
            toNext: false,
          }
        }
      
        handleCommentChange = (event) => {
          this.setState({
            comment: event.target.value,
          })
        }
      
        handleClick = (event) => {
            const action = {type: 'COMMENT', payload: this.state.comment};
            this.props.dispatch(action);
            this.setState(() => ({
                toNext: true,
            }));
        }

    render() {
        if(this.state.toNext === true){
            return <Redirect to='/5' />
        }
        return (
            <div>
                <h3>4 of 4 Pages</h3>
                <label>Any comments you want to share?</label>
                <br/>
                <input type="text" onChange={this.handleCommentChange} value={this.state.comment} />
                <button onClick={this.handleClick}>Next</button> 
            </div>    
        )
    }
}

export default connect(mapReduxStateToProps)(Comment);