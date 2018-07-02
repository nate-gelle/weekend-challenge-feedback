import React, { Component } from 'react';
import axios from 'axios';

class FeedbackEntry extends Component {
    deleteEntry = (event) => {
        const id = this.props.entry.id;
        // alert('Are you sure you want to delete this entry?')
        axios.delete(`/feedback/${id}`).then((response) => {
            console.log(response.data);
            this.props.getFeedback();  
        }).catch((error) => {
            alert('Unable to delete entry.');
        });
    }

    render() {
        return (
            <tr>
                <td>{this.props.entry.feeling}</td>
                <td>{this.props.entry.understanding}</td>
                <td>{this.props.entry.support}</td>
                <td>{this.props.entry.comment}</td>
                <td><button onClick={this.deleteEntry}>Delete</button></td>
            </tr>
        );
    }
}

export default FeedbackEntry;