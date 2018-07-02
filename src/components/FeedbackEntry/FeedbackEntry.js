import React, { Component } from 'react';
import axios from 'axios';

class FeedbackEntry extends Component {
    constructor() {
        super();
        this.state = {flagged: {}};
        this.showFlagged = this.showFlagged.bind(this);
    }

    deleteEntry = (event) => {
        const id = this.props.entry.id;
        let confirm = window.confirm('Are you sure you want to delete this entry?');
        if(confirm){
            axios.delete(`/feedback/${id}`).then((response) => {
                console.log(response.data);
                this.props.getFeedback();  
            }).catch((error) => {
                alert('Unable to delete entry.');
            });
        }
    }

    flagEntry = (event) => {
        const id = this.props.entry.id;
        const flagged = this.props.entry.flagged;
        axios.put(`/feedback/${id}/${flagged}`).then((response) => {
            console.log(response.data);
            this.props.getFeedback();
        }).catch((error) => {
            alert('Unable to flag entry.')
        });
    }

    showFlagged = () => {
        if(this.props.entry.flagged === true){
            this.setState({flagged: {backgroundColor: 'grey'}});
            console.log('in showFlagged, state=', this.state);
        }    
    }

    componentDidMount = () =>{
        this.showFlagged();
    }

    render() {
        return (
            <tr style={this.state.flagged}>
                <td>{this.props.entry.feeling}</td>
                <td>{this.props.entry.understanding}</td>
                <td>{this.props.entry.support}</td>
                <td>{this.props.entry.comment}</td>
                <td><button onClick={this.deleteEntry}>Delete</button></td>
                <td><button onClick={this.flagEntry}>Flag</button></td>
            </tr>
        );
    }
}

export default FeedbackEntry;